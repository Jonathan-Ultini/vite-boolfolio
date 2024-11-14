<template>
  <div>
    <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
  </div>
</template>

<script>
import axios from 'axios';
import ProjectCard from './components/ProjectCard.vue';

export default {
  components: { ProjectCard },
  data() {
    return {
      projects: []
    };
  },
  mounted() {
    axios.get('http://127.0.0.1:8000/api/projects')
      .then(response => {
        this.projects = response.data;
      })
      .catch(error => {
        console.error(error);
      });
  }
};
</script>
