import { motion } from "framer-motion";
import HeroGraphic from "../../assets/graphics/HeroGraphic.webp";
import { useModalContext } from "../../contexts/ModalContext";
import ArrowRight from "../icons/ArrowRight";
import ArrowRightLine from "../icons/ArrowRightLine";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const { setActiveModal } = useModalContext();
  const navigate = useNavigate();

  return (
    <section id="inicio" className="relative">
      {/* Container principal com padding para compensar a navbar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-[90rem] px-24 pb-32 pt-[44px] max-xl:px-16 max-xl:pb-24 max-lg:px-8 max-lg:pb-20 max-md:px-6 max-md:pt-[96px] max-md:pb-12"
      >
        {/* Grid layout */}
        <div className="grid grid-cols-[5fr_4fr] items-center gap-x-18 max-xl:grid-cols-2 max-xl:gap-x-12 max-md:grid-cols-1 max-md:grid-rows-[auto_auto] max-md:gap-y-12">
          {/* Coluna de texto */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-primary-50 mb-6 text-6xl/18 font-semibold tracking-tighter max-xl:mb-4 max-xl:text-5xl/16 max-lg:text-4xl/10 max-lg:tracking-tight max-sm:text-3xl/9 max-sm:tracking-tighter"
            >
              Notas com IA. Organize e resuma em segundos
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-primary-100 mb-10 text-xl/loose font-light max-xl:mb-8 max-xl:text-lg/8 max-lg:text-base/loose"
            >
              Deixe a IA organizar e resumir suas notas, <br />
              poupando seu tempo e aumentando sua produtividade
            </motion.p>

            <motion.button
              onClick={() => navigate("/login", { replace: true })}
              className="text-primary-1300 bg-primary-500 border-primary-500 hover:border-primary-50 hover:bg-primary-50 transition-properties primary-glow-hover primary-glow group flex cursor-pointer items-center gap-x-3 rounded-full border-2 px-8 py-3.5 max-xl:gap-x-2 max-xl:px-6 max-xl:py-3"
            >
              Começar agora
              <div className="w-5 max-xl:w-4 max-sm:hidden">
                <ArrowRightLine
                  alt="Seta para direita"
                  className="stroke-primary-1300 transition-properties -mr-3 inline w-0 opacity-0 ease-in-out group-hover:w-3 group-hover:opacity-100"
                  width={2.5}
                />
                <ArrowRight
                  alt="Ícone de seta"
                  className="stroke-primary-1300 inline w-5 max-xl:w-4"
                  width={2}
                />
              </div>
            </motion.button>
          </motion.div>

          {/* Coluna da imagem */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            <div className="bg-primary-1300 absolute top-1/2 left-1/2 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-lg opacity-20" />
            <motion.img
              initial={{ scale: 0.95 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.8, ease: "backOut" }}
              src={HeroGraphic}
              alt="Ilustração de um iPhone mostrando o resumidor de notas do NoteFlow"
              className="relative max-h-[30rem] justify-self-end max-md:max-h-auto max-md:max-w-[90%] max-md:justify-self-center max-sm:max-w-full"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}