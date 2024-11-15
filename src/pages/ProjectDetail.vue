<template>
  <div class="container mt-5">
    <div v-if="project" class="card">
      <div class="card-header">
        <h2>{{ project.name }}</h2>
      </div>
      <div class="card-body">
        <div class="mb-3">
          <strong>Link: </strong>
          <a :href="project.link" target="_blank">{{ project.link }}</a>
        </div>
        <div class="mb-3">
          <strong>Data di inizio: </strong>
          {{ project.start_date }}
        </div>
        <div class="mb-3">
          <strong>Data di fine: </strong>
          {{ project.end_date || 'Non specificata' }}
        </div>
        <div class="mb-3">
          <strong>Tipologia: </strong>
          {{ project.type?.name || 'Non specificata' }}
        </div>
        <div class="mb-3">
          <strong>Tecnologie: </strong>
          <span v-if="project.technologies.length">
            <ul>
              <li v-for="tech in project.technologies" :key="tech.id">{{ tech.name }}</li>
            </ul>
          </span>
          <span v-else>Non specificate</span>
        </div>
        <div class="mb-3">
          <strong>Immagine: </strong>
          <div v-if="project.image">
            <img :src="`http://127.0.0.1:8000/storage/${project.image}`" alt="Immagine progetto" class="img-fluid">
          </div>
          <div v-else>Non disponibile</div>
        </div>
      </div>
    </div>
    <div v-else class="text-center">
      <p>Caricamento del progetto in corso...</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

export default {
  name: "ProjectDetail",
  setup() {
    const route = useRoute();
    const project = ref(null);

    const fetchProject = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/projects/${route.params.id}`
        );
        project.value = response.data;
      } catch (error) {
        console.error("Errore durante il caricamento del progetto:", error);
      }
    };

    onMounted(fetchProject);

    return {
      project,
    };
  },
};
</script>

<style scoped>
.container {
  max-width: 800px;
}

.card img {
  max-width: 100%;
  height: auto;
  border-radius: 5px;
}
</style>
