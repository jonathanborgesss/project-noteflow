import { motion } from "framer-motion"; // CORREÇÃO: Import correto
import FAQ from "./FAQ";

export default function FAQList({
  questions,
  activeQuestion,
  handleQuestionClick,
}) {
  return (
    <motion.ul
      className="m-auto flex max-w-[51.625rem] flex-col gap-y-14 max-lg:gap-y-12"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
          },
        },
      }}
    >
      {questions.map((question) => (
        <FAQ
          key={question.id}
          question={question}
          activeQuestion={activeQuestion}
          handleQuestionClick={handleQuestionClick}
        />
      ))}
    </motion.ul>
  );
}