<template>
  <div>
    <h1>Progetti</h1>
    <router-link to="/projects/create" class="btn btn-primary">Crea Nuovo Progetto</router-link>
    <table class="table mt-3">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Link</th>
          <th>Azioni</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="project in projects" :key="project.id">
          <td>{{ project.name }}</td>
          <td><a :href="project.link" target="_blank">{{ project.link }}</a></td>
          <td>
            <router-link :to="`/projects/${project.id}/edit`" class="btn btn-warning btn-sm">Modifica</router-link>
            <button @click="deleteProject(project.id)" class="btn btn-danger btn-sm">Elimina</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      projects: [],
    };
  },
  created() {
    this.fetchProjects();
  },
  methods: {
    async fetchProjects() {
      const response = await axios.get("http://127.0.0.1:8000/api/projects");
      this.projects = response.data;
    },
    async deleteProject(id) {
      if (confirm("Sei sicuro di voler eliminare questo progetto?")) {
        await axios.delete(`http://127.0.0.1:8000/api/projects/${id}`);
        this.fetchProjects();
      }
    },
  },
};
</script>
