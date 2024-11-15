import { createRouter, createWebHistory } from 'vue-router';
import Home from "../views/Home.vue";
import ProjectList from "../views/ProjectList.vue";
import TypeList from "../views/TypeList.vue";
import TechnologyList from "../views/TechnologyList.vue";

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/projects", name: "projects", component: ProjectList },
  { path: "/types", name: "types", component: TypeList },
  { path: "/technologies", name: "technologies", component: TechnologyList },
];
const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
