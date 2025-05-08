import { motion } from "framer-motion";
import { useState } from "react";
import { frequentlyAskedQuestions } from "../../../utils/content";
import FAQList from "./FAQList";

export default function FAQs() {
  const [category, setActiveCategory] = useState("General");
  const [activeQuestion, setActiveQuestion] = useState(null);

  const categoryObj = frequentlyAskedQuestions.find(obj => obj.category === category) || frequentlyAskedQuestions[0];
  const questionsArr = categoryObj?.questions || [];

  const handleQuestionClick = (id) =>
    id === activeQuestion ? setActiveQuestion(null) : setActiveQuestion(id);

  const handleCategoryClick = (category) => {
    setActiveQuestion(null);
    setActiveCategory(category);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-bottom justify-items-center"
    >
      <div className="w-full max-w-[90rem] py-32 max-xl:px-16 max-xl:py-24 max-lg:px-8 max-md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-primary-50 mb-8 text-center text-6xl/18 font-semibold tracking-tighter max-xl:mb-6 max-xl:text-5xl/16 max-lg:text-4xl/10 max-lg:tracking-tight max-md:mb-4 max-md:text-left max-sm:text-3xl/9 max-sm:tracking-tighter"
        >
          Perguntas Frequentes
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-8 text-xl/loose font-light max-lg:text-lg/8 max-sm:text-base/loose"
        >
          <p className="text-primary-100 text-center max-md:text-left max-sm:hidden">
            As perguntas mais comuns sobre o NoteFlow.{" "}
            <br className="max-md:hidden" />
            Tem outras dúvidas?{" "}
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#"
              className="group underline decoration-1 underline-offset-3"
            >
              Fale com nosso time de especialistas
            </motion.a>
          </p>
        </motion.div>

        <motion.ul
          key={`categories-${category}`}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-wrap justify-center gap-x-3 gap-y-4 max-lg:mb-18 max-md:justify-start"
        >
        </motion.ul>

        <motion.div
          key={`faq-${category}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <FAQList
            questions={questionsArr}
            activeQuestion={activeQuestion}
            handleQuestionClick={handleQuestionClick}
          />
        </motion.div>
      </div>
    </motion.section>
  );
}