<template>
  <div>
    <h1>Modifica Progetto</h1>
    <form @submit.prevent="updateProject">
      <div class="mb-3">
        <label for="name" class="form-label">Nome</label>
        <input v-model="project.name" type="text" id="name" class="form-control" required>
      </div>
      <div class="mb-3">
        <label for="link" class="form-label">Link</label>
        <input v-model="project.link" type="url" id="link" class="form-control">
      </div>
      <button type="submit" class="btn btn-primary">Salva Modifiche</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      project: {
        name: "",
        link: "",
      },
    };
  },
  created() {
    this.fetchProject();
  },
  methods: {
    async fetchProject() {
      const response = await axios.get(`http://127.0.0.1:8000/api/projects/${this.$route.params.id}`);
      this.project = response.data;
    },
    async updateProject() {
      await axios.put(`http://127.0.0.1:8000/api/projects/${this.$route.params.id}`, this.project);
      this.$router.push("/"); // Torna alla lista
    },
  },
};
</script>
