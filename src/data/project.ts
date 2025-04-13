//image
import pagev2Component from "src/assets/images/rjsf.png";
import cinemaApp from "src/assets/images/management-cinema.png";
import toyShopApp from "src/assets/images/toy-shop-e-commerce.png";
import discordApp from "src/assets/images/discord.png";
import footballApp from "src/assets/images/football.png";
import organicApp from "src/assets/images/organic.png";

import { IProject } from "src/interfaces/project";

const projects: IProject[] = [
  {
    role: "Full Stack",
    right: true,
    image: pagev2Component,
    width: 800,
    name: "Page v2 Component Development",
    description:
      "Page v2 is a component for website management that allows users to create, organize, and customize sections with ease, including drag-and-drop functionality and the ability to copy or reference sections from other pages. It is built using ReactJS and integrated into the company's PHP-based CMS system.",
    technologies: [
      "ReactJS",
      "Phalcon",
      "Postgres",
      "Gorm",
      "Beatiful Dnd",
      "RJSF",
    ],
    fe_link: "",
    be_link: "",
    figma: "",
    demo: "",
  },

  {
    role: "Full Stack",
    right: false,
    image: cinemaApp,
    width: 800,
    name: "Cinema Facility & Showtimes Management System",
    description:
      "This system is designed to manage the operations of a cinema chain, including its branches, screening rooms, facilities, ticket pricing, and movie showtimes. It supports four distinct roles: Admin, Manager, Supervisor, and Staff, each with specific permissions and responsibilities.",
    technologies: [
      "ReactJS",
      "NodeJS",
      "Bootstrap",
      "MySQL",
      "Chartjs",
      "Figma",
    ],
    fe_link: "https://github.com/thuytrang10072001/CinemaManagement",
    be_link: "https://github.com/thuytrang10072001/CinemaManagement",
    figma:
      "https://www.figma.com/design/8BEC1n8fvbR0l1IW3pfTFv/ManageCinema?node-id=0-1",
    demo: "https://www.youtube.com/watch?v=6xstsOxaIpk/",
  },

  {
    role: "Full Stack",
    right: true,
    image: toyShopApp,
    width: 400,
    name: "Toy Shop E-Commerce",
    description:
      "The Toy Shop E-Commerce System is a cross-platform application built for both web and mobile to manage orders, products, and shopping carts. It allows users to browse and purchase products, while administrators can manage product listings and track orders. The system is designed to provide a seamless and convenient shopping experience for customers on both web and mobile platforms.",
    technologies: [
      "ReactJS",
      "React Native",
      "NodeJS",
      "Datatable",
      "SQL Server",
      "Figma",
    ],
    fe_link: "https://github.com/thuytrang10072001/android_toy_shop",
    be_link: "https://github.com/thuytrang10072001/android_toy_shop",
    figma:
      "https://www.figma.com/design/I8WwjFcIVMNwhW6dhe9vMM/Toy-Shop?node-id=0-1",
    demo: "https://www.youtube.com/watch?v=HccU2Sn2tHU",
  },
];

export default projects;
