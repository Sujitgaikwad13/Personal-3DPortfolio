import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  wordPublishing,
  firecart,
  videostuff,
  techsg,
  cryptoverse,
  weather,
  shopper,
  blog,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React JS Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "Javascript Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Tester",
    company_name: "Word Publishing",
    icon: wordPublishing,
    iconBg: "#E6DEDD",
    date: "November 2021 - October 2022",
    points: [
      "Conducted comprehensive testing of Adobe Illustrator to identify and address defects, resulting in a Bug catcher and Tester of the Month.",
      "Collaborated with cross-functional teams to develop and execute test plans for Adobe Illustrator.",
      "Executed Manual Testing, Integration testing, Regression testing, User Experience (UX) Testing to ensure the quality and reliability of Adobe Illustrator.",
      "Documented and reported software defects, working closely with developers to facilitate prompt resolution.",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "Word Publishing",
    icon: wordPublishing,
    iconBg: "#E6DEDD",
    date: "November 2022 to Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Sujit proved me wrong.",
    name: "Sourav Wankhede",
    designation: "React.js Developer",
    company: "Tech Solutions",
    image:
      "https://media.licdn.com/dms/image/D4D03AQHvDUBaUGigSA/profile-displayphoto-shrink_800_800/0/1691550335257?e=1706140800&v=beta&t=vQqbvcAb7blsav2_sjqsmtpTT6O9AAulySltYYJRirM",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Sujit does.",
    name: "Rahul Parte",
    designation: "Assistant Manager",
    company: "Axis Bank",
    image:
      "https://media.licdn.com/dms/image/D4D03AQENvucPBpvtkQ/profile-displayphoto-shrink_800_800/0/1682782064240?e=1706140800&v=beta&t=Uapmn_FbtWAKqc2PyyTIuJrC4GPojz9vZhEKI0F3Oxc",
  },
  {
    testimonial:
      "After Sujit optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Mukul Bajaj",
    designation: "QA Analyst",
    company: "Decisions",
    image:
      "https://media.licdn.com/dms/image/D4D03AQGoVThdUBxB_w/profile-displayphoto-shrink_800_800/0/1687326618332?e=1706140800&v=beta&t=DiZ2ehamwqSgIn4VWmoBOvPPpmhaDrIJ45xEx7A1NeA",
  },
];

const projects = [
  {
    name: "FireCart",
    description:
      "Web-based platform that allows users to search, Macbook, and Shoes from various providers.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: firecart,
    source_code_link: "https://github.com/Sujitgaikwad13/firecart",
  },
  {
    name: "Video-stuff",
    description:
      "Welcome to Visionary Video stuff – the ultimate destination for all your video needs! Whether you're a content creator, an avid viewer, or someone looking to explore the world of dynamic visuals.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: videostuff,
    source_code_link: "https://github.com/Sujitgaikwad13/Video-stuff",
  },
  {
    name: "TechSG",
    description:
      "Introducing TechSG, the cutting-edge Integration Platform that revolutionizes the way businesses connect and collaborate across their digital ecosystem. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
    ],
    image: techsg,
    source_code_link: "https://github.com/Sujitgaikwad13/TechSG",
  },
  {
    name: "CryptoVerse",
    description:
      "Welcome to the future of decentralized finance with CryptoVerse . CryptoVerse is more than just a cryptocurrency; it's a transformative digital asset that empowers individuals and businesses with secure, efficient, and borderless transactions. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
    ],
    image: cryptoverse,
    source_code_link: "https://github.com/Sujitgaikwad13/CryptoVerse",
  },
  {
    name: "WeatherApp",
    description:
      "Stay ahead of the weather with our powerful and user-friendly weather app. Whether you're planning a weekend getaway, commuting to work, or just curious about the current conditions, our app has you covered.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: weather,
    source_code_link: "https://github.com/Sujitgaikwad13/react-weather-app",
  },
  {
    name: "Shopper",
    description:
      "Welcome to Shopper, your all-in-one destination for a seamless and personalized online shopping experience. Discover a world of endless possibilities as you explore a curated selection of products, enjoy exclusive deals, and embrace the convenience of modern e-commerce.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
    ],
    image: shopper,
    source_code_link:
      "https://github.com/Sujitgaikwad13/SHOPPER-E-commerce-app",
  },
  {
    name: "AppwriteBlog",
    description:
      "Welcome to Shopper, your all-in-one destination for a seamless and personalized online shopping experience. Discover a world of endless possibilities as you explore a curated selection of products, enjoy exclusive deals, and embrace the convenience of modern e-commerce.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "appwrite",
        color: "pink-text-gradient",
      },
    ],
    image: blog,
    source_code_link: "https://github.com/Sujitgaikwad13/My-Blog",
  },
];

export { services, technologies, experiences, testimonials, projects };
