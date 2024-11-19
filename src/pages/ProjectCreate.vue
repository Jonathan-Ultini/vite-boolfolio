<template>
  <div class="container">
    <h1>Crea un Nuovo Progetto</h1>
    <form @submit.prevent="createProject" enctype="multipart/form-data">
      <div class="mb-3">
        <label for="name" class="form-label">Nome Progetto</label>
        <input v-model="project.name" type="text" class="form-control" id="name" required>
      </div>
      <div class="mb-3">
        <label for="link" class="form-label">Link</label>
        <input v-model="project.link" type="url" class="form-control" id="link" required>
      </div>
      <div class="mb-3">
        <label for="start_date" class="form-label">Data di Avvio</label>
        <input v-model="project.start_date" type="date" class="form-control" id="start_date" required>
      </div>
      <div class="mb-3">
        <label for="end_date" class="form-label">Data di Fine</label>
        <input v-model="project.end_date" type="date" class="form-control" id="end_date">
      </div>
      <div class="mb-3">
        <label for="type_id">Tipologia</label>
        <select v-model="project.type_id" id="type_id" class="form-control">
          <option value="">Seleziona una tipologia</option>
          <option v-for="type in types" :key="type.id" :value="type.id">{{ type.name }}</option>
        </select>
      </div>
      <div class="mb-3">
        <h3>Seleziona Tecnologie:</h3>
        <div v-for="technology in technologies" :key="technology.id">
          <input type="checkbox" :value="technology.id" v-model="project.technologies">
          <label>{{ technology.name }}</label>
        </div>
      </div>
      <div class="mb-3">
        <label for="image" class="form-label">Carica Immagine</label>
        <input type="file" class="form-control" id="image" @change="handleImageChange">
      </div>

      <button type="submit" class="btn btn-primary">Salva Progetto</button>
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
        start_date: "",
        end_date: "",
        type_id: "",
        image: null,
        technologies: [],
      },
      types: [],
      technologies: [],
    };
  },
  created() {
    this.fetchTypes();
    this.fetchTechnologies();
  },
  methods: {
    async fetchTypes() {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/types");
        this.types = response.data;
      } catch (error) {
        console.error("Errore durante il caricamento delle tipologie:", error);
      }
    },
    async fetchTechnologies() {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/technologies");
        this.technologies = response.data;
      } catch (error) {
        console.error("Errore durante il caricamento delle tecnologie:", error);
      }
    },
    handleImageChange(event) {
      this.project.image = event.target.files[0]; // Salva il file immagine selezionato
    },
    async createProject() {
      try {
        const formData = new FormData();

        // Aggiungi i campi del progetto a formData
        Object.keys(this.project).forEach(key => {
          if (key === 'technologies') {
            this.project.technologies.forEach(tech => formData.append('technologies[]', tech));
          } else {
            formData.append(key, this.project[key]);
          }
        });

        // Esegui la richiesta POST
        const response = await axios.post("http://127.0.0.1:8000/api/projects", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        console.log("Progetto creato:", response.data);
        this.$router.push("/"); // Torna alla lista dei progetti
      } catch (error) {
        console.error("Errore durante la creazione del progetto:", error.response?.data || error.message);
      }
    },
  },
};
</script>
