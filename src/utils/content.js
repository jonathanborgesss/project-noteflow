import Cloud from "../components/icons/Cloud";
import MagicPen from "../components/icons/MagicPen";
import Note from "../components/icons/Note";
import TwoUsers from "../components/icons/TwoUsers";

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
    src: new URL("../assets/headshots/cris.png", import.meta.url),
    alt: "Cristiano Borges",
  },
  {
    id: 2,
    src: new URL("../assets/headshots/biel.png", import.meta.url),
    alt: "Gabriel Ferraz",
  },
  {
    id: 3,
    src: new URL("../assets/headshots/savio.png", import.meta.url),
    alt: "Savio Pereira",
  },
  {
    id: 4,
    src: new URL("../assets/headshots/ricardo.png", import.meta.url),
    alt: "Ricardo Augusto",
  },
  {
    id: 5,
    src: new URL("../assets/headshots/img-7.webp", import.meta.url),
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
      "Adoro como o NoteFlow se integra a ferramentas como Google Drive e Slack. Isso torna a colaboração com minha equipe tão \
    muito mais suave. Os lembretes contextuais me ajudaram a ficar por dentro dos prazos críticos.",
    src: new URL("../assets/headshots/img-9.webp", import.meta.url),
    name: "Sarah Lee",
    title: "Analista de Negócios",
  },
  {
    id: 4,
    rating: 4,
    description:
      "A organização inteligente das minhas anotações é impressionante. Eu costumava perder tempo procurando informações, mas agora \
    o NoteFlow faz o trabalho pesado, categorizando tudo automaticamente.",
    src: new URL("../assets/headshots/img-4.webp", import.meta.url),
    name: "Jonathan Moore",
    title: "Engenheiro de Software",
  },
  {
    id: 5,
    rating: 4,
    description:
      "O NoteFlow facilitou muito o gerenciamento de vários projetos. Posso acessar e organizar rapidamente minhas anotações, \
    e os lembretes contextuais me mantêm no caminho certo. É a melhor ferramenta que encontrei para me manter organizado.",
    src: new URL("../assets/headshots/img-7.webp", import.meta.url),

    name: "Rachel Foster",
    title: "Gerente de Projetos",
  },
  {
    id: 6,
    rating: 5,
    description:
      "Como alguém que faz malabarismos com várias responsabilidades, o NoteFlow me mantém organizado sem problemas. As integrações perfeitas \
    com ferramentas como Slack e Google Drive, permitimos que minha equipe e eu permaneçamos sincronizados com mais eficiência.",

    src: new URL("../assets/headshots/savio.png", import.meta.url),
    name: "Sávio Pereira",
    title: "Desenvolvedor Back-End",
  },
  {
    id: 7,
    rating: 4,
    description:
      "Tentei muitos aplicativos de anotações, mas nenhum se compara ao NoteFlow. A categorização orientada por IA me ajuda a manter meu \
    ideias de conteúdo organizadas e pesquisáveis, economizando horas todas as semanas. Altamente recomendado!",
    src: new URL("../assets/headshots/img-1.webp", import.meta.url),
    name: "Olivia Carter",
    title: "Estrategista de Conteúdo",
  },
  {
    id: 8,
    rating: 5,
    description:
      "A transcrição de voz para texto é incrivelmente precisa e me economiza muito tempo ao documentar reuniões. \
    Além disso, adoro como ele se integra perfeitamente a ferramentas como Trello e Slack. O NoteFlow é obrigatório para qualquer pessoa em design.",
    src: new URL("../assets/headshots/img-6.webp", import.meta.url),
    name: "Thomas Williams",
    title: "UX/UI Designer",
  },
  {
    id: 9,
    rating: 4,
    description:
      "Eu confio muito em minhas anotações durante as ligações e acompanhamentos dos clientes. A capacidade de receber lembretes automaticamente \
    com base em minhas anotações, tornou meu processo de acompanhamento, sendo um divisor de águas!",
    src: new URL("../assets/headshots/img-8.webp", import.meta.url),
    name: "Jessica Gonzalez",
    title: "Executiva de Vendas",
  },
  {
    id: 10,
    rating: 5,
    description:
      "Não posso dizer o suficiente sobre como as integrações do NoteFlow são úteis. Sincronizando minhas anotações com o Google Drive e outros aplicativos \
    simplificou meus processos de trabalho.",
    src: new URL("../assets/headshots/img-13.webp", import.meta.url),
    name: "Aaron Mitchell",
    title: "Gerente de T.I",
  },
  {
    id: 11,
    rating: 4,
    description:
      "O NoteFlow tem sido um salva-vidas para organizar resumos de reuniões. A organização de IA \
    categoriza tudo, para que eu não precise mais me preocupar em classificar documentos!",
    src: new URL("../assets/headshots/biel.png", import.meta.url),
    name: "Gabriel Ferraz",
    title: "Aluno de ADS",
  },
  {
    id: 12,
    rating: 4,
    description:
      "Estou sempre anotando ideias e anotações para vários projetos de redação. O recurso de voz para texto me permite capturar meus pensamentos \
    enquanto estou fora de casa.",
    src: new URL("../assets/headshots/img-14.webp", import.meta.url),
    name: "Ben Turner",
    title: "Escritor freelancer",
  },
  {
    id: 13,
    rating: 5,
    description:
      "Com o NoteFlow, posso acompanhar ideias, estratégias e feedback sem esforço. Os lembretes contextuais são perfeitos \
    por garantir que eu acompanhe as principais tarefas e prazos.",
    src: new URL("../assets/headshots/img-12.webp", import.meta.url),
    name: "Katherine Evans",
    title: "Diretora de Marketing",
  },
  {
    id: 14,
    rating: 4,
     description:
      "Como fundador de uma startup, meus dias são repletos de reuniões e ideias. O recurso de voz para texto do NoteFlow permite \
    me capturar pensamentos enquanto estou em movimento.",
    src: new URL("../assets/headshots/img-15.webp", import.meta.url),
    name: "Lucas King",
    title: "CEO",
  },
  {
    id: 15,
    rating: 5,
    description:
      "A capacidade do NoteFlow de capturar e organizar minhas anotações de maneira tão detalhada e fácil de usar fez uma enorme diferença \
    no meu processo criativo. Quer eu esteja fazendo um brainstorming ou fazendo anotações de projetos.",
    src: new URL("../assets/headshots/img-2.webp", import.meta.url),
    name: "Natalie James",
    title: "Designer Gráfico",
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