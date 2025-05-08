import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Importar o hook useNavigate
import Logo from "../icons/Logo";
import MobileMenuIcon from "./MobileMenu/MobileMenuIcon";
import { navigationLinks } from "../../utils/content";
import { useModalContext } from "../../contexts/ModalContext";

export default function Navigation() {
  const { setActiveModal } = useModalContext();
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate(); // Inicializar o hook useNavigate

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-primary-1500/95 h-[76px] py-4 shadow-lg backdrop-blur-md"
          : "bg-primary-1500/80 h-[84px] py-6"
      }`}
    >
      <nav className="text-primary-50 m-auto flex max-w-[90rem] items-center justify-between px-24 text-lg/8 font-light max-xl:px-16 max-xl:text-base/loose max-lg:px-8 max-md:px-6">
        <a
          className="flex cursor-pointer items-center gap-x-3"
          onClick={() => navigate("/")} // Redireciona para a página principal
        >
          <Logo
            className="stroke-primary-500 h-6 max-md:h-5"
            alt="Ícone do NoteFlow"
            width={5}
          />
          <p className="text-xl font-bold tracking-tight">NoteFlow</p>
        </a>

        <div className="absolute left-1/2 -translate-x-1/2 transform max-lg:hidden">
          <ul className="flex items-center gap-x-8">
            {navigationLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.href}`} // Mantém o href para acessibilidade
                  onClick={(e) => {
                    e.preventDefault(); // Evita o comportamento padrão do link
                    const element = document.getElementById(link.href); // Busca o elemento pelo ID
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" }); // Animação suave
                    }
                  }}
                  className="hover:text-primary-500 transition-colors"
                >
                  {link.link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-x-3 max-lg:hidden">
          <button
            onClick={() => navigate("/login")} // Redireciona para a página de login
            className="bg-primary-500 border-primary-500 text-primary-1300 primary-glow hover:bg-primary-50 cursor-pointer rounded-full border-2 px-6 py-2 text-base transition-colors"
          >
            Iniciar
          </button>
        </div>

        <MobileMenuIcon />
      </nav>
    </header>
  );
}
