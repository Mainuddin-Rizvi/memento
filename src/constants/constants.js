import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  mongodb,
  git,
  docker,
  isg,
  iimt,
  carrent,
  jobit,
  tripguide,
  java,
  springboot,
  postgres,
  wildfly,
  graphql,
  terraform,
  kubernetes,
  jenkins,
  harshit,
  maaz,
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
    title: "Backend Devlopment",
    icon: backend,
  },
  {
    title: "Front End Development",
    icon: web,
  },
  {
    title: "Devops Practice",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Springboot",
    icon: springboot,
  },
  {
    name: "Graphql",
    icon: graphql,
  },
  {
    name: "Wildlfy",
    icon: wildfly,
  },
  {
    name: "Postgres",
    icon: postgres,
  },
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Jenkins",
    icon: jenkins,
  },
  {
    name: "Terraform",
    icon: terraform,
  },
  {
    name: "Kubernetes",
    icon: kubernetes,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "In-Solutions Glabal",
    icon: isg,
    iconBg: "#383E56",
    date: "June 2023 - Current",
    points: [
      "Developing and maintaining backend services using Spring Boot, Spring Security, and related technologies.",
      "Implementing authentication and authorization with OAuth2 and JWT.",
      "Collaborating with cross-functional teams to deliver scalable applications.",
      "Working with PostgreSQL for efficient data storage and retrieval.",
      "Deploying and managing applications on WildFly in Linux environments.",
      "Integrating Kafka and Redis for messaging and caching.",
      "Designing and maintaining microservices architecture with Zipkin and Sleuth.",
      "Applying AOP principles for modularity and reusability.",
      "Writing and maintaining code in Java 8-21.",
      "Using Docker for containerization.",
      "Understanding DevOps practices with Kubernetes, Terraform, and Jenkins.",
      "Participating in code reviews and providing constructive feedback.",
      "Utilizing Hibernate/JPA for ORM and database interaction.",
      "Documenting and testing RESTful APIs using Swagger/OpenAPI.",
      "Monitoring applications with Spring Boot Actuator.",
      "Implementing CI/CD pipelines with Jenkins or other CI/CD tools.",
    ],
  },
  {
    title: "College Project",
    company_name: "IIMT University",
    icon: iimt,
    iconBg: "#383E56",
    date: "During BCA & MCA",
    points: [
      "Developed and maintained web applications using React.js, Redux, and Context API in college projects.",
      "Built responsive and dynamic UIs with HTML5, CSS, Sass, Tailwind, Bootstrap, and Material UI (MUI) for projects.",
      "Implemented asynchronous operations and managed state using JavaScript Promises and Redux in college projects.",
      "Created clones of popular applications like Spotify and YouTube during college projects.",
      "Worked with MongoDB for handling data storage and retrieval in college projects.",
      "Used Git and GitHub for version control and collaboration during college projects.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our project in college, but Mainuddin proved me wrong.",
    name: "Harshit Verma",
    designation: "Software Engineer",
    company: "Unthinkable Solutions",
    image: harshit,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their optimization' like Mainuddin  does.",
    name: "Maaz Alam",
    designation: "Software Engineer",
    company: "Proeffico Solutions",
    image: maaz,
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
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
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
