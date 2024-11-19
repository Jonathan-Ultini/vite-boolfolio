import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Projects from '../pages/Projects.vue';
import ProjectDetail from '../pages/ProjectDetail.vue';
import ProjectCreate from '../pages/ProjectCreate.vue';
import ProjectEdit from '../pages/ProjectEdit.vue';
import TypeList from "../pages/TypeList.vue";
import TechnologyList from "../pages/TechnologyList.vue";

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/projects", name: "projects", component: Projects },
  { path: '/projects/:id', name: 'project-detail', component: ProjectDetail, props: true },
  { path: "/projects/create", name: "project-create", component: ProjectCreate },
  { path: "/projects/:id/edit", name: "project-edit", component: ProjectEdit },
  { path: "/types", name: "types", component: TypeList },
  { path: "/technologies", name: "technologies", component: TechnologyList },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
