import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { testimonials as test } from "../../../utils/content";
import CaretUp from "../../icons/CaretUp";
import TestimonialList from "./TestimonialList";

export default function Testimonials() {
  const [expanded, setExpanded] = useState(true);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="testemunhas" className="bg-gradient-to-top">
      <motion.div
        initial={{ opacity: 0 }}
        animate={isReady ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
        className="m-auto flex max-w-[90rem] flex-col items-center px-24 py-32 max-xl:px-16 max-xl:py-24 max-lg:px-8 max-md:px-6"
      >
        {/* Título e descrição */}
        <div className="mb-20 flex max-w-[51.625rem] flex-col items-center gap-y-6 max-lg:mb-18 max-lg:gap-y-0">
          <p className="text-primary-1300 bg-primary-500 primary-glow w-min rounded-full px-4 py-2 text-base/8 max-lg:mb-8">
            Testemunhas
          </p>
          <h2 className="text-primary-50 text-center text-6xl/18 font-semibold tracking-tighter max-xl:text-5xl/16 max-lg:mb-4 max-lg:text-4xl/10 max-lg:tracking-tight max-sm:text-3xl/9 max-sm:tracking-tighter">
            O que nossas testemunhas <br />
            tem a dizer sobre o NoteFlow?
          </h2>
          <p className="text-primary-100 px-28 text-center text-xl/loose font-light max-lg:text-lg/8 max-md:px-4">
            O NoteFlow aumenta 100% sua produtividade com
            ferramentas de anotações de IA de ponta
          </p>
        </div>

        <div className="mb-20 grid grid-cols-3 gap-x-6 max-xl:gap-x-4 max-lg:mb-18 max-lg:grid-cols-2 max-sm:grid-cols-1">
          <TestimonialList testimonials={test.slice(0, expanded ? 5 : 2)} />
          <TestimonialList testimonials={test.slice(5, expanded ? 10 : 7)} />
          <TestimonialList testimonials={test.slice(10, expanded ? 15 : 12)} />
        </div>

        {/* O botão "Show more" */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={isReady ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-primary-50 border-primary-50 transition-properties hover:bg-primary-50 hover:text-primary-1300 group flex cursor-pointer items-center gap-x-3 rounded-full border-2 px-8 py-3.5 text-lg/8 max-xl:px-6 max-xl:py-3 max-xl:text-base/loose"
          onClick={() => setExpanded((curr) => !curr)}
        >
          {expanded ? "Diminuir" : "Aumentar"}
          <CaretUp
            className={`stroke-primary-50 group-hover:stroke-primary-1300 rotate-180 transition-all duration-300 ${expanded && "rotate-360"}`}
            alt="Caret Up Icon"
            width={2}
          />
        </motion.button>
      </motion.div>
    </section>
  );
}