import { motion } from "framer-motion";
import CaretUp from "../../icons/CaretUp";

export default function FAQ({ question, activeQuestion, handleQuestionClick }) {
  const isActive = activeQuestion === question.id;

  return (
    <motion.li
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      className="shrink-0 grow-0"
    >
      <button
        className="flex w-full cursor-pointer items-center"
        onClick={() => handleQuestionClick(question.id)}
      >
        <div className="border-primary-50 mr-6 rounded-xl border-2 p-3.5 max-sm:mr-4 max-sm:p-3">
          <question.Icon
            width={2}
            className="stroke-primary-50"
            alt={question.alt}
          />
        </div>

        <p className="text-primary-50 mr-auto pr-4 text-left text-xl/loose font-medium tracking-tight max-lg:text-lg/8 max-lg:font-semibold max-sm:text-base/6 max-sm:font-medium">
          {question.question}
        </p>

        <motion.div
          animate={{ rotate: isActive ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex h-12 w-12 shrink-0 items-center justify-center"
        >
          <CaretUp
            className="stroke-primary-50"
            width={2.5}
            alt="Caret Up Icon"
          />
        </motion.div>
      </button>

      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isActive ? 1 : 0,
          height: isActive ? "auto" : 0,
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="text-primary-100 pt-4 pr-14 pl-20 text-lg/8 font-light max-lg:text-base/loose max-sm:pr-0 max-sm:pl-0">
          {question.answer}
        </p>
      </motion.div>
    </motion.li>
  );
}