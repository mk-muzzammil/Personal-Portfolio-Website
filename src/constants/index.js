import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
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
  DHLogo,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  nextjs,
  flutter,
  person1,
  person2,
  person3,
  challengeWeb,
  GieneWeb,
  dubaiClient,
} from "../assets/index";

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
    title: "Full Stack Web Development",
    icon: web,
  },
  {
    title: "Next.js Development",
    icon: backend,
  },
  {
    title: "Flutter App Development",
    icon: mobile,
  },
  {
    title: "Wordpress Web Development",
    icon: creator,
  },
];

const technologies = [
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
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Flutter",
    icon: flutter,
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
    title: "Full Stack Developer (CTO)",
    company_name: "DH Solutions Inc.",
    icon: DHLogo,
    iconBg: "#ffe3e0",
    date: "Feb 2024 - Jan 2025",
    points: [
      "Led full-stack development of web applications using Next.js and Tailwind CSS, achieving a 40% increase in user retention and 25% engagement growth post-launch.",
      "Designed and deployed scalable AWS backend architectures, improving system reliability and performance for enterprise-grade solutions.",
      "Drove R&D initiatives for AI-powered products, setting industry benchmarks in security and scalability during MENA market expansion.",
      "Collaborated directly with international clients to translate business requirements into technical solutions with iterative improvements.",
      "Mentored cross-functional teams to implement high-performance interfaces and maintain seamless user experiences across platforms.",
    ],
  },
  {
    title: "Frontend Website Developer",
    company_name: "Ozeito",
    icon: shopify,
    iconBg: "#121212",
    date: "Jun 2022 - Aug 2023",
    points: [
      "Developed and maintained high-performance web applications using React.js and Next.js, ensuring seamless user experiences through iterative improvements.",
      "Engineered responsive, client-tailored interfaces with Tailwind CSS, adhering to specific business requirements and design guidelines.",
      "Deployed scalable frontend solutions on PAAS platforms like Vercel and Netlify, optimizing system reliability and load efficiency.",
      "Collaborated closely with clients to translate functional needs into technical implementations, prioritizing performance and usability.",
    ],
  },
  {
    title: "Flutter Application Developer",
    company_name: "TROTECH",
    icon: tesla,
    iconBg: "#ffe3e0",
    date: "Nov 2022 - Mar 2023",
    points: [
      "Designed and developed cross-platform mobile applications using Flutter and Dart, ensuring seamless performance on iOS and Android platforms.",
      "Integrated RESTful APIs and Firebase services for real-time data synchronization and backend functionality.",
      "Optimized app performance through efficient state management (Provider/Bloc) and reduced load times by 25%.",
      "Conducted rigorous testing, debugging, and code reviews to maintain code quality and ensure adherence to best practices.",
    ],
  },
  {
    title: "Wordpress Developer",
    company_name: "DevYaar",
    icon: meta,
    iconBg: "#121212",
    date: "Jan 2022 - Apr 2022",
    points: [
      "Supported maintenance of WordPress websites and content updates.",
      "Built responsive layouts using HTML, CSS, and JavaScript.",
      "Learned modern front-end frameworks through mentored projects",
      "Contributed to small client projects under senior developer supervision.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Dear Muzammil, we appreciate your excellent work and timely delivery. We will look forward to collaborate with you on our upcoming project using ReactJS and Laravel. Your expertise and dedication are highly valued.",
    name: "Muddasir",
    designation: "CEO",
    company: "DH Solutions Inc.",
    image: person1,
  },
  {
    testimonial:
      "Dear Muzammil, your dedication and hard work are truly commendable. We really loved your style to do this project. We highly value your contributions and look forward to a long-term collaboration with you.",
    name: "Muhammad faizan",
    designation: "CEO",
    company: "Ozeito",
    image: person2,
  },
  {
    testimonial:
      "Muzzammil did an amazing job on my project. They really understood what I wanted and added great details to make it look just right. The script is smooth, easy to use, and looks awesome. I am super happy with their work",
    name: "Ebad Furqan",
    designation: "COO",
    company: "TROTECH",
    image: person3,
  },
];

const projects = [
  {
    name: "KOBII Payroll Educational System",
    description:
      "A comprehensive payroll and educational management system developed for KOBII, an Indonesian organization. Built with Next.js and MySQL, and deployed on AWS, the system streamlines payroll processing, attendance tracking, and class scheduling. It supports multiple user roles, including Admin, Tutor, Mentor, and HR, ensuring efficient workflow management and scalability.",
    tags: [
      {
        name: "Next JS",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "Figma",
        color: "blue-text-gradient",
      },
      {
        name: "AWS",
        color: "pink-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link:
      "https://github.com/mk-muzzammil/KOBII-Education-NextJs-Project.git",
  },
  {
    name: "E-Library",
    description:
      "A full-stack digital library platform enabling users to browse, read, and save their favorite books. Built with the MERN stack and enhanced with Next.js for server-side rendering, the platform features an intuitive user interface and robust functionality. Admins can manage books through a dedicated dashboard, while users can read, download, and organize their collections seamlessly. Cloudinary integration ensures efficient storage and delivery of book assets.",
    tags: [
      {
        name: "React JS",
        color: "blue-text-gradient",
      },
      {
        name: "Next JS",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "Cloudinary",
        color: "blue-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/mk-muzzammil/MERN-E-Book-Backend.git",
  },
  {
    name: "Event Management Website",
    description:
      "A custom event management platform designed for a Dubai-based client to organize and manage events with dedicated stalls. The web application, currently in development, features a user-friendly interface for seamless event and stall management. Built with modern web technologies, it ensures efficient event planning and execution, tailored to the client's specific requirements.",
    tags: [
      {
        name: "React JS",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "Figma",
        color: "blue-text-gradient",
      },
    ],
    image: dubaiClient,
    source_code_link: "https://github.com/mk-muzzammil/MERN-E-Book-Backend.git",
  },
  {
    name: "Chellenge Habit Website",
    description:
      "A habit-building Webiste  developed for an international client using MERN Stack. The app features challenge management, notification settings, and dark/light mode customization. Cloudinary integration ensures efficient handling of images and files, while the app's core functionality focuses on fostering positive habits through daily challenges.",
    tags: [
      {
        name: "React JS",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "Cloudinary",
        color: "blue-text-gradient",
      },
    ],
    image: challengeWeb,
    source_code_link:
      "https://github.com/mk-muzzammil/Challenges-Habit-App-Using-HTML-CSS-JS-.git",
  },
  {
    name: "Study Giene Web App",
    description:
      "i have made this Study Gene web App for the client . Study Gene App, is designed to provide a comprehensive educational experience for students. It incorporates features such as navigation, user authentication, mobile responsiveness, and sections for learning, testimonials, tutorials, subscription plans, and more. Currentl just Worked on the frontend of this project as client only wants frontend of thsi webiste",
    tags: [
      {
        name: "HTML ",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
      {
        name: "React JS",
        color: "blue-text-gradient",
      },
    ],
    image: GieneWeb,
    source_code_link:
      "https://github.com/mk-muzzammil/Challenges-Habit-App-Using-HTML-CSS-JS-.git",
  },
  {
    name: "Challenge Habit Mobile App",
    description:
      "A habit-building mobile application developed for an international client using Flutter and Firebase. The app features challenge management, notification, and dark/light mode customization. Cloudinary integration ensures efficient handling of images and files, while the app's core functionality focuses on fostering positive habits through daily challenges.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "Cloudinary",
        color: "pink-text-gradient",
      },
      {
        name: "Dart",
        color: "blue-text-gradient",
      },
    ],
    image: jobit,
    source_code_link:
      "https://github.com/mk-muzzammil/chellenge_habit_App_Flutter.git",
  },
];

export { services, technologies, experiences, testimonials, projects };
