import { motion } from "framer-motion";
import { logos } from "../../utils/content";

export default function Logos() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-top transition-all duration-200 ease-out"
    >
      <div className="m-auto max-w-[90rem] px-24 py-28 max-xl:px-16 max-xl:py-24 max-lg:px-8 max-md:px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-primary-50 last m-auto mb-20 text-center text-xl max-xl:text-lg/8 max-sm:mb-16"
        >
          Organizações que usam{" "}
          <span className="font-bold tracking-tight">NoteFlow</span>
        </motion.p>

        <motion.div 
          className="flex flex-col gap-y-16 max-md:flex-row max-md:items-center max-md:justify-around max-sm:gap-x-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
        >
          <ul className="flex flex-wrap justify-between max-md:flex-col max-md:gap-y-16">
            {logos.slice(0, 4).map((logo, index) => (
              <motion.li
                key={logo.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  className="h-10 max-xl:h-8 max-lg:h-7"
                  src={logo.src}
                  alt={logo.alt}
                />
              </motion.li>
            ))}
          </ul>
          
          <ul className="flex flex-wrap justify-between max-md:flex-col max-md:gap-y-16">
            {logos.slice(4).map((logo, index) => (
              <motion.li
                key={logo.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.4, 
                  delay: (index + 4) * 0.1 
                }}
              >
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  className="h-10 max-xl:h-8 max-lg:h-7"
                  src={logo.src}
                  alt={logo.alt}
                />
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
}