import { motion } from "framer-motion";
import HeroGraphic from "../../assets/graphics/HeroGraphic.webp";
import { useModalContext } from "../../contexts/ModalContext";
import ArrowRight from "../icons/ArrowRight";
import ArrowRightLine from "../icons/ArrowRightLine";

export default function Hero() {
  
  const { setActiveModal } = useModalContext();

  return (
    <motion.div
      id="inicio"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="mx-auto grid max-w-[90rem] lg:pt-0 pt-[84px] grid-cols-[5fr_4fr] items-center gap-x-18 px-24 py-32 max-xl:grid-cols-2 max-xl:gap-x-12 max-xl:px-16 max-xl:py-24 max-lg:px-8 max-lg:py-20 max-md:grid-cols-1 max-md:grid-rows-[auto_auto] max-md:gap-y-12 max-md:px-6 max-md:pt-[96px] max-md:pb-12"
    >
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
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="text-primary-1300 bg-primary-500 border-primary-500 hover:border-primary-50 hover:bg-primary-50 transition-properties primary-glow-hover primary-glow group flex cursor-pointer items-center gap-x-3 rounded-full border-2 px-8 py-3.5 max-xl:gap-x-2 max-xl:px-6 max-xl:py-3"
          onClick={() => setActiveModal("sign-up")}
        >
          <p className="text-lg/8 max-xl:text-base/loose">Começar agora</p>
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

      <motion.div 
        className="relative"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
      >
        <div className="bg-primary-1300 absolute top-0 right-0 bottom-0 left-0 rounded-full blur-3xl" />
        <motion.img
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.8, ease: "backOut" }}
          src={HeroGraphic}
          alt="Ilustração de um iPhone mostrando o resumidor de notas do NoteFlow"
          className="relative max-h-[30rem] justify-self-end max-md:max-h-auto max-md:max-w-[90%] max-md:justify-self-center max-sm:max-w-full"
        />
      </motion.div>
    </motion.div>
  );
}