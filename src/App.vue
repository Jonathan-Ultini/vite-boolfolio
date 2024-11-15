<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
      <div class="container">
        <a class="navbar-brand" href="#">Boolfolio</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/" class="nav-link" active-class="active" exact>Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/projects" class="nav-link" active-class="active">Progetti</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container">
      <router-view></router-view>
    </div>
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
