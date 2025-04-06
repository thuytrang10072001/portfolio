import { ISubProject } from "src/interfaces/sub_projects";

const sub_projects: ISubProject[] = [
  {
    title: "Docker, PHP (Phalcon), and Nginx Integration",
    description:
      "In this project, I gained hands-on experience with integrating Docker, PHP (Phalcon), and Nginx for building a web application. The application includes features such as user registration, login, and customer management, allowing administrators to manage a list of customers efficiently.",
    listItem: ["PHP", "Phalcon", "Docker", "Nginx"],
    link: "https://github.com/thuytrang10072001/php-nginx",
  },
  {
    title: "Algorithm LRU",
    description:
      "This algorithm is based on the strategy that whenever a page fault occurs, the least recently used page will be replaced with a new page. So, the page not utilized for the longest time in the memory  gets replaced.",
    listItem: ["C++"],
    link: "https://github.com/thuytrang10072001/algorithm_LRU",
  },
  {
    title: "Recognition Cat Dog",
    description:
      "Convert the input image color to gray with a value from 0 to 255. Compare with what the machine has learned and then output the result that the image is a dog or cat image",
    listItem: ["Python"],
    link: "https://github.com/thuytrang10072001/recognition_cat_dog",
  },
  {
    title: "Cinema Management MVC",
    description:
      "Allowing customers to order ticket, food and cancel ticket 30 minutes before the movie starts show. And staffs can order for customers offline at the theater. Finally, admin manages account, movie, room, food, staff.",
    listItem: ["Java", "Spring MVC"],
    link: "https://github.com/thuytrang10072001/cinema_management_-MVC-",
  },
];

export default sub_projects;
