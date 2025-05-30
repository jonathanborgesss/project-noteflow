import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Logo from "../icons/Logo";
import MobileMenuIcon from "./MobileMenu/MobileMenuIcon";
import { navigationLinks } from "../../utils/content";
import { useModalContext } from "../../contexts/ModalContext";

export default function Navigation() {
  const { setActiveModal } = useModalContext();
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Verifica se está na página de login
  const isLoginPage = location.pathname === "/login";

  // Se for a página de login, mostra apenas a logo
  if (isLoginPage) {
    return (
      <header className="fixed left-0 top-3 z-[3] w-full bg-primary-1500/80 h-[84px] py-6">
        <nav className="text-primary-50 m-auto flex max-w-[90rem] items-center px-24 max-xl:px-16 max-lg:px-8 max-md:px-6">
          <div 
            className="flex cursor-pointer items-center gap-x-3"
            onClick={() => navigate("/")}
          >
            <Logo 
              className="stroke-primary-500 h-6 max-md:h-5" 
              alt="Ícone do NoteFlow" 
              width={5} 
            />
            <p className="text-xl font-bold tracking-tight">NoteFlow</p>
          </div>
        </nav>
      </header>
    );
  }

  // Navbar completa para outras páginas
  return (
    <header
      className={`fixed left-0 w-full z-[3] transition-all duration-300 ${
        isScrolled
          ? "top-0 bg-primary-1500/95 h-[76px] py-4 shadow-lg backdrop-blur-sm"
          : "top-3 bg-primary-1500/80 h-[84px] py-6"
      }`}
    >
      <nav className="text-primary-50 m-auto flex max-w-[90rem] items-center justify-between px-24 text-lg/8 font-light max-xl:px-16 max-xl:text-base/loose max-lg:px-8 max-md:px-6">
        {/* Logo */}
        <div 
          className="flex cursor-pointer items-center gap-x-3"
          onClick={() => navigate("/")}
        >
          <Logo 
            className="stroke-primary-500 h-6 max-md:h-5" 
            alt="Ícone do NoteFlow" 
            width={5} 
          />
          <p className="text-xl font-bold tracking-tight">NoteFlow</p>
        </div>

        {/* Links de navegação */}
        <div className="absolute left-1/2 -translate-x-1/2 transform max-lg:hidden">
          <ul className="flex items-center gap-x-8">
            {navigationLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.href}`}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(`/#${link.href}`);
                    const element = document.getElementById(link.href);
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="hover:text-primary-500 transition-colors"
                >
                  {link.link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Botão de login */}
        <div className="flex items-center gap-x-3 max-lg:hidden">
          <button
            onClick={() => navigate("/login")}
            className="bg-primary-500 border-primary-500 text-primary-1300 primary-glow hover:bg-primary-50 cursor-pointer rounded-full border-2 px-6 py-2 text-base transition-colors"
          >
            Iniciar
          </button>
        </div>

        {/* Ícone do menu mobile */}
        <MobileMenuIcon />
      </nav>
    </header>
  );
}