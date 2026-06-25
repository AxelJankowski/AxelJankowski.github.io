export const linkedInUrl = "https://www.linkedin.com/in/axel-jankowski/";

export const site = {
  name: "Axel Jankowski",
  title: "Software Engineer",
  tagline: "I write software & build things",
  email: "axeljankowskii@gmail.com",
  /** Formspree form ID — free account at https://formspree.io → New Form → copy ID from form URL */
  formspreeFormId: "xykqeoag",
  url: "https://axeljankowski.github.io",
  pageTitle: "Axel Jankowski's Homepage",
  description:
    "Axel Jankowski — software engineer. I build web apps, wrangle APIs, and make things and noise. Side projects, toolkit, and guestbook on my personal homepage.",
  marquee:
    "hey you found my site • still under construction (probably forever) • software engineer • guitar in local band • hit counter 100% legit • films & loud music • netscape recommended • guestbook is down there somewhere • saving Tyria • best on a CRT • amateur pyrotechnician • ",
  social: [
    {
      label: "LinkedIn",
      href: linkedInUrl,
    },
    {
      label: "GitHub",
      href: "https://github.com/AxelJankowski",
    },
  ],
  nav: [
    { id: "welcome", label: "Home" },
    { id: "about", label: "About Me" },
    { id: "education", label: "Alma Mater" },
    { id: "skills", label: "My Toolkit" },
    { id: "projects", label: "My Projects" },
    { id: "contact", label: "Guestbook" },
  ],
} as const;

export const about = {
  intro: "Hello, I'm Axel. I'm a software engineer. I make things and noise.",
  body: "I build web apps, wrangle APIs, and politely argue with cloud providers. My local setup is held together with hope and Docker.",
} as const;

export const guestbook = {
  messagePlaceholder:
    "Say hi, ask a question, roast my site, or tell me Eraserhead changed your life.",
} as const;

/** Skills from LinkedIn / work. All icons are SVG (Devicon). */
export const skills = [
  { name: "JavaScript", icon: "/img/tech/javascript.svg" },
  { name: "PHP", icon: "/img/tech/php.svg" },
  { name: "Node", icon: "/img/tech/nodejs.svg" },
  { name: "React", icon: "/img/tech/react.svg" },
  { name: "Vue", icon: "/img/tech/vue.svg" },
  { name: "Laravel", icon: "/img/tech/laravel.svg" },
  { name: "Flutter", icon: "/img/tech/flutter.svg" },
  { name: "PostgreSQL", icon: "/img/tech/postgresql.svg" },
  { name: "MySQL", icon: "/img/tech/mysql.svg" },
  { name: "Redis", icon: "/img/tech/redis.svg" },
  { name: "Docker", icon: "/img/tech/docker.svg" },
  { name: "Google Cloud", icon: "/img/tech/googlecloud.svg" },
  { name: "AWS", icon: "/img/tech/aws.svg" },
  { name: "Firebase", icon: "/img/tech/firebase.svg" },
  { name: "Tailwind", icon: "/img/tech/tailwind.svg" },
  { name: "WordPress", icon: "/img/tech/wordpress.svg" },
  { name: "HTML", icon: "/img/tech/html.svg" },
  { name: "CSS", icon: "/img/tech/css.svg" },
  { name: "Sass", icon: "/img/tech/sass.svg" },
  { name: "Git", icon: "/img/tech/git.svg" },
] as const;

export const projects = [
  {
    title: "Restauracja Polonia",
    spine: "Restauracja Polonia",
    href: "https://polonia-gdynia.pl",
    image: "/img/polonia-logo.png",
    imageFit: "contain",
    coverBackground:
      "radial-gradient(circle at center, #4a3520 0%, #1f1409 65%, #0a0604 100%)",
    genre: "Restaurant Website",
    emoji: "🍽️",
  },
  {
    title: "44",
    spine: "44",
    image: "/img/44-poster.png",
    genre: "Film Promo",
    emoji: "🎬",
  },
  {
    title: "Płyta na Wiosnę",
    href: "https://open.spotify.com/album/2xNtbGVR23AS3GDS37Pa0V",
    image: "/img/ars-liber.jpg",
    genre: "Ars Liber · Album",
    emoji: "🎸",
  },
  {
    title: "Hunto",
    href: "https://hunto.it",
    image: "/img/hunto-logo.svg",
    imageFit: "contain",
    coverBackground:
      "linear-gradient(155deg, #09090b 0%, #1e1b4b 42%, #312e81 78%, #4338ca 100%)",
    logoInvert: true,
    genre: "Car Alerts · AI",
    emoji: "🚗",
    isNew: true,
  },
] as const;
