import ArrowSwap from "../components/icons/ArrowSwap";
import CardSlash from "../components/icons/CardSlash";
import Cloud from "../components/icons/Cloud";
import DollarCircle from "../components/icons/DollarCircle";
import Import from "../components/icons/Import";
import Integrate from "../components/icons/Integrate";
import MagicPen from "../components/icons/MagicPen";
import Microphone from "../components/icons/Microphone";
import Note from "../components/icons/Note";
import Organization from "../components/icons/Organization";
import Search from "../components/icons/Search";
import Slack from "../components/icons/Slack";
import SMSNotification from "../components/icons/SMSNotification";
import TwoUsers from "../components/icons/TwoUsers";
import Lock from "../components/icons/Lock";

const navigationLinks = [
  {
    id: 1,
    link: "Início",
    href: "inicio",
  },
  {
    id: 2,
    link: "Sobre",
    href: "sobre",
  },
  {
    id: 3,
    link: "FAQ",
    href: "faq",
  },
  {
    id: 4,
    link: "Testemunhas",
    href: "testemunhas",
  },
];

const reviews = [
  {
    id: 1,
    src: new URL("../assets/headshots/img-11.webp", import.meta.url),
    alt: "Rachel Foster",
  },
  {
    id: 2,
    src: new URL("../assets/headshots/img-7.webp", import.meta.url),
    alt: "Emily Thompson",
  },
  {
    id: 3,
    src: new URL("../assets/headshots/img-5.webp", import.meta.url),
    alt: "Daniel Harris",
  },
  {
    id: 4,
    src: new URL("../assets/headshots/img-9.webp", import.meta.url),
    alt: "Sarah Lee",
  },
  {
    id: 5,
    src: new URL("../assets/headshots/img-15.webp", import.meta.url),
    alt: "Lucas King",
  },
];

const logos = [
  {
    id: 1,
    src: new URL("../assets/logos/Netflix.webp", import.meta.url),
    alt: "Logo da Netflix",
  },
  {
    id: 2,
    src: new URL("../assets/logos/ExxonMobile.webp", import.meta.url),
    alt: "Logo da Exxon Mobile",
  },
  {
    id: 3,
    src: new URL("../assets/logos/Microsoft.webp", import.meta.url),
    alt: "Logo da Microsoft",
  },
  {
    id: 4,
    src: new URL("../assets/logos/Vice.webp", import.meta.url),
    alt: "Logo da Vice",
  },
  {
    id: 5,
    src: new URL("../assets/logos/Walmart.webp", import.meta.url),
    alt: "Logo da Walmart",
  },
  {
    id: 6,
    src: new URL("../assets/logos/Chase.webp", import.meta.url),
    alt: "Logo da Chase",
  },
  {
    id: 7,
    src: new URL("../assets/logos/Visa.webp", import.meta.url),
    alt: "Logo da Visa",
  },
  {
    id: 8,
    src: new URL("../assets/logos/Amazon.webp", import.meta.url),
    alt: "Logo da Amazon",
  },
];

const frequentlyAskedQuestions = [
  {
    id: 1,
    questions: [
      {
        id: 1,
        alt: "Ícone de Nota",
        Icon: Note,
        question: "O que é o NoteFlow?",
        answer:
          "NoteFlow é um aplicativo de anotações com IA projetado para ajudar indivíduos e equipes a organizar, gerenciar e recuperar anotações com facilidade.",
      },
      {
        id: 2,
        alt: "Ícone de Caneta Mágica",
        Icon: MagicPen,
        question: "Como o NoteFlow usa IA para melhorar as anotações?",
        answer:
          "O NoteFlow usa IA para categorizar, resumir e marcar automaticamente suas anotações, facilitando encontrar o que você precisa. Sua funcionalidade de busca inteligente ajuda a localizar informações por contexto, palavras-chave ou temas, garantindo que suas anotações estejam sempre organizadas e acessíveis.",
      },
      {
        id: 3,
        alt: "Ícone de Dois Usuários",
        Icon: TwoUsers,
        question: "O NoteFlow pode ser usado para colaboração em equipe?",
        answer:
          "Com certeza! O NoteFlow foi projetado para suportar tanto usuários individuais quanto colaboração em equipe. Você pode compartilhar anotações, colaborar em tempo real, atribuir tarefas e acompanhar o progresso dentro da plataforma. Isso a torna uma solução perfeita para uso pessoal e profissional.",
      },
      {
        id: 4,
        alt: "Ícone de Nuvem",
        Icon: Cloud,
        question: "Posso acessar o NoteFlow em vários dispositivos?",
        answer:
          "Sim, você pode acessar o NoteFlow de qualquer dispositivo, incluindo computador, tablet e smartphone. Nosso aplicativo sincroniza perfeitamente entre plataformas, então suas anotações estão sempre atualizadas e disponíveis quando você precisar.",
      },
    ],
  }
];

const testimonials = [
  {
    id: 1,
    rating: 5,
    description:
      "O NoteFlow revolucionou completamente a maneira como gerencio minhas anotações de trabalho,\
    facilitando muito encontrar o que preciso, mesmo semanas depois.",
    src: new URL("../assets/headshots/cris.png", import.meta.url),
    name: "Cristiano Borges",
    title: "CEO AirClean Borges",
  },
  {
    id: 2,
    rating: 4,
    description:
      "Como aluno, preciso de uma ferramenta que me ajude a acompanhar as sessões de brainstorming. A \
    transcrição de voz para texto do NoteFlow é um divisor de águas!",
    src: new URL("../assets/headshots/ricardo.png", import.meta.url),
    name: "Ricardo Augusto",
    title: "Aluno de ADS",
  },
  {
    id: 3,
    rating: 5,
    description:
      "I love how NoteFlow integrates with tools like Google Drive and Slack. It makes collaboration with my team so \
    much smoother. The contextual reminders have helped me stay on top of critical deadlines.",
    src: new URL("../assets/headshots/img-9.webp", import.meta.url),
    name: "Sarah Lee",
    title: "Business Analyst",
  },
  {
    id: 4,
    rating: 4,
    description:
      "The smart organization of my notes is impressive. I used to waste time searching for information, but now \
    NoteFlow does the heavy lifting, automatically categorizing everything. It’s an indispensable part of my workflow.",
    src: new URL("../assets/headshots/img-4.webp", import.meta.url),
    name: "Jonathan Moore",
    title: "Software Engineer",
  },
  {
    id: 5,
    rating: 4,
    description:
      "NoteFlow has made managing multiple projects so much easier. I can quickly access and organize my notes, \
    and the contextual reminders keep me on track. It’s the best tool I’ve found for staying organized.",
    src: new URL("../assets/headshots/img-15.webp", import.meta.url),

    name: "Rachel Foster",
    title: "Project Manager",
  },
  {
    id: 6,
    rating: 5,
    description:
      "As a startup founder, my days are packed with meetings and ideas. NoteFlow’s voice-to-text feature lets \
    me capture thoughts while I’m on the move. Plus, the cloud storage sync keeps everything safe and easily accessible.",
    src: new URL("../assets/headshots/savio.png", import.meta.url),
    name: "Sávio Pereira",
    title: "Desenvolvedor back-end",
  },
  {
    id: 7,
    rating: 4,
    description:
      "I’ve tried many note-taking apps, but none compare to NoteFlow. The AI-driven categorization helps me keep my \
    content ideas organized and searchable, saving me hours every week. Highly recommended!",
    src: new URL("../assets/headshots/img-1.webp", import.meta.url),
    name: "Olivia Carter",
    title: "Content Strategist",
  },
  {
    id: 8,
    rating: 5,
    description:
      "The voice-to-text transcription is incredibly accurate and saves me so much time when documenting meetings. \
    Plus, I love how seamlessly it integrates with tools like Trello and Slack. NoteFlow is a must-have for anyone in design.",
    src: new URL("../assets/headshots/img-6.webp", import.meta.url),
    name: "Thomas Williams",
    title: "UX/UI Designer",
  },
  {
    id: 9,
    rating: 4,
    description:
      "I rely heavily on my notes during client calls and follow-ups. The ability to automatically receive reminders \
    based on my notes has made my follow-up process much smoother and more efficient. NoteFlow has been a game-changer!",
    src: new URL("../assets/headshots/img-8.webp", import.meta.url),
    name: "Jessica Gonzalez",
    title: "Sales Executive",
  },
  {
    id: 10,
    rating: 5,
    description:
      "I can’t say enough about how helpful NoteFlow’s integrations are. Syncing my notes with Google Drive and other apps \
    has streamlined my work processes. It’s helped me stay organized and efficient in an ever-changing environment.",
    src: new URL("../assets/headshots/img-13.webp", import.meta.url),
    name: "Aaron Mitchell",
    title: "Customer Support",
  },
  {
    id: 11,
    rating: 4,
    description:
      "NoteFlow has been a lifesaver for organizing meeting summaries. The AI organization \
    categorizes everything, so I no longer have to worry about sorting through piles of documents!",
    src: new URL("../assets/headshots/biel.png", import.meta.url),
    name: "Gabriel Ferraz",
    title: "Aluno de ADS",
  },
  {
    id: 12,
    rating: 4,
    description:
      "I’m always jotting down ideas and notes for various writing projects. The voice-to-text feature lets me capture my thoughts \
    while I’m out and about.",
    src: new URL("../assets/headshots/img-14.webp", import.meta.url),
    name: "Ben Turner",
    title: "Freelance Writer",
  },
  {
    id: 13,
    rating: 5,
    description:
      "With NoteFlow, I’m able to keep track of ideas, strategies, and feedback effortlessly. The contextual reminders are perfect \
    for ensuring I follow up on key tasks and deadlines. It’s become an essential part of my daily routine.",
    src: new URL("../assets/headshots/img-12.webp", import.meta.url),
    name: "Katherine Evans",
    title: "Marketing Director",
  },
  {
    id: 14,
    rating: 4,
    description:
      "As someone who juggles multiple responsibilities, NoteFlow keeps me organized without any hassle. The seamless integrations \
    with tools like Slack and Google Drive allow my team and I to stay in sync and work more efficiently.",
    src: new URL("../assets/headshots/img-15.webp", import.meta.url),
    name: "Lucas King",
    title: "CEO",
  },
  {
    id: 15,
    rating: 5,
    description:
      "NoteFlow's ability to capture and organize my notes in such a detailed yet easy-to-use way has made a huge difference \
    in my creative process. Whether I'm brainstorming or taking project notes, it’s my go-to app for staying organized.",
    src: new URL("../assets/headshots/img-2.webp", import.meta.url),
    name: "Natalie James",
    title: "Graphic Designer",
  },
];

const footerCols = [
  {
    id: 1,
    category: "Início",
    links: ["FAQ", "Recursos", "Empresas", "Depoimentos"],
  },
  {
    id: 2,
    category: "Preços",
    links: ["Planos", "Cobrança", "Teste Grátis", "Reembolsos"],
  },
  {
    id: 3,
    category: "Sobre",
    links: ["Carreiras", "Nossa História", "Contato", "Política"],
  },
  {
    id: 4,
    category: "Comunidade",
    links: ["Fórum", "Histórias", "Blog", "Suporte"],
  },
];

const features = {
  SmartOrganization: {
    alt: "Ilustração de Organização Inteligente",
    heading: "Organização Inteligente",
    description:
      "Categorize e marque automaticamente suas anotações usando análise com IA. O NoteFlow identifica inteligentemente tópicos-chave e organiza seu conteúdo, facilitando encontrar e recuperar suas anotações quando você mais precisa.",
  },
  ContextualReminders: {
    alt: "Ilustração de Lembretes Contextuais",
    heading: "Lembretes Contextuais",
    description:
      "Mantenha-se em dia com tarefas importantes usando lembretes com IA que se adaptam ao contexto de suas anotações. O NoteFlow reconhece prazos, acompanhamentos e ações importantes e envia alertas no momento certo para garantir que nada passe despercebido.",
  },
};

export {
  navigationLinks,
  reviews,
  logos,
  frequentlyAskedQuestions,
  testimonials,
  footerCols,
  features,
};


function hidePreloader() {
  const preloader = document.getElementById('preloader');
  const root = document.getElementById('root');
  
  if (preloader && root) {
    preloader.classList.add('opacity-0', 'pointer-events-none');
    
    root.classList.remove('hidden');
    
    setTimeout(() => {
      preloader.style.display = 'none';

      if (typeof initPageAnimations === 'function') {
        initPageAnimations();
      }
    }, 800);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(hidePreloader, 2500);
});

window.addEventListener('load', () => {
  hidePreloader();
});

setTimeout(hidePreloader, 5000);

const scrollTop = document.querySelector('.scroll-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollTop.classList.add('active');
  } else {
    scrollTop.classList.remove('active');
  }
});

scrollTop.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});