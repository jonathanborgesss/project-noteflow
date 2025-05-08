import { motion } from "framer-motion";
import SmartOrganization from "../../assets/graphics/SmartOrganization.webp";
import ContextualReminders from "../../assets/graphics/ContextualReminders.webp";

export default function Features() {
  return (
    <section id="sobre" className="bg-primary-1500 overflow-hidden bg-[url('../src/assets/Noise.webp')] bg-repeat transition-all duration-300">
      <div className="text-primary-50 relative m-auto max-w-[90rem] px-24 py-32 max-xl:px-16 max-xl:py-24 max-lg:px-8 max-md:px-6">
        <div className="bg-primary-1300 absolute top-[50%] left-[100%] h-[62.5rem] w-[62.5rem] -translate-[50%] rounded-full opacity-100 blur-[40rem] max-xl:h-[35rem] max-xl:w-[35rem] max-xl:blur-[10rem] max-lg:left-[90%] max-lg:h-[20rem] max-lg:w-[20rem]" />

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="mb-28 text-center text-6xl/18 font-semibold tracking-tighter max-xl:mb-18 max-xl:text-5xl/16 max-lg:text-4xl/10 max-lg:tracking-tight max-sm:text-3xl/9 max-sm:tracking-tighter"
        >
          Todas as ferramentas para <br />
          <span className="text-primary-500 primary-glow">potencializar </span>
          suas anotações
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-20 grid grid-cols-2 items-center gap-x-16 max-xl:mb-12 max-md:mb-16 max-md:grid-cols-1 max-md:gap-y-10"
        >
          <figure>
            <motion.img
              initial={{ scale: 0.95 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-h-[45rem] max-md:max-w-[90%] max-md:justify-self-center"
              src={SmartOrganization}
              alt="Ilustração de organização inteligente"
            />
          </figure>
          <div className="z-1 max-w-lg justify-self-end max-md:row-start-1 max-md:max-w-max">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-8 text-5xl/16 font-semibold tracking-tighter max-xl:mb-6 max-xl:text-4xl/10 max-lg:mb-4 max-lg:text-3xl/12 max-lg:tracking-tighter max-sm:text-2xl/8 max-sm:tracking-tight"
            >
              Organização Inteligente
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-primary-100 z-1 text-xl/loose font-light max-xl:text-lg/8 max-lg:text-base/loose"
            >
              Categorize e marque suas notas automaticamente usando análise de IA.
              O NoteFlow identifica os principais tópicos e organiza seu conteúdo,
              facilitando encontrar e recuperar suas anotações quando você mais precisa.
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid grid-cols-2 items-center gap-x-16 max-md:grid-cols-1 max-md:gap-y-10"
        >
          <div className="max-w-lg justify-self-start max-md:max-w-max">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-8 text-5xl/16 font-semibold tracking-tighter max-xl:mb-6 max-xl:text-4xl/10 max-lg:mb-4 max-lg:text-3xl/12 max-lg:tracking-tighter max-sm:text-2xl/8 max-sm:tracking-tight"
            >
              Lembretes Contextuais
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-primary-100 text-xl/loose font-light max-xl:text-lg/8 max-lg:text-base/loose"
            >
              Mantenha-se em dia com tarefas importantes usando lembretes com IA
              que se adaptam ao contexto de suas notas. O NoteFlow reconhece prazos,
              acompanhamentos e ações importantes e envia alertas no momento certo
              para que nada passe despercebido.
            </motion.p>
          </div>
          <figure className="z-1">
            <motion.img
              initial={{ scale: 0.95 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-h-[45rem] max-md:max-w-[90%] max-md:justify-self-center"
              src={ContextualReminders}
              alt="Ilustração de lembretes contextuais"
            />
          </figure>
        </motion.div>
      </div>
    </section>
  );
}