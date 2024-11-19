<template>
  <div>
    <h1>Crea Nuovo Progetto</h1>
    <form @submit.prevent="createProject" nctype="multipart/form-data">
      <div class="mb-3">
        <label for="name" class="form-label">Nome</label>
        <input v-model="project.name" type="text" id="name" class="form-control" required>
      </div>
      <div class="mb-3">
        <label for="link" class="form-label">Link</label>
        <input v-model="project.link" type="url" id="link" class="form-control">
      </div>
      <div class="mb-3">
        <label for="start_date" class="form-label">Data di Inizio</label>
        <input v-model="project.start_date" type="date" id="start_date" class="form-control" required>
      </div>



      <button type="submit" class="btn btn-primary">Salva</button>
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
  methods: {
    async createProject() {
      try {
        const response = await axios.post("http://127.0.0.1:8000/api/projects", this.project);
        console.log("Progetto creato:", response.data);
        this.$router.push("/");
      } catch (error) {
        console.error("Errore durante la creazione del progetto:", error.response?.data || error.message);
      }
    },
  },

};
</script>
