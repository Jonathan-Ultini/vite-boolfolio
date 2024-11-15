<template>
  <div>
    <h1 class="text-center mb-4">Elenco Progetti</h1>
    <div class="table-responsive">
      <table class="table table-striped">
        <thead class="table-dark">
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Link</th>
            <th>Azioni</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="project in projects" :key="project.id">
            <td>{{ project.id }}</td>
            <td>{{ project.name }}</td>
            <td><a href="{{ project.link }}">{{ project.link }}</a></td>
            <td>
              <router-link :to="{ name: 'project-detail', params: { id: project.id } }" class="btn btn-info btn-sm">
                Dettagli
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  name: 'Projects',
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
