import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Projects from '../pages/Projects.vue';
import ProjectDetail from '../pages/ProjectDetail.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/projects',
    name: 'projects',
    component: Projects
  },
  {
    path: '/projects/:id',
    name: 'project-detail',
    component: ProjectDetail,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
