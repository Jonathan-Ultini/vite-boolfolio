<template>
  <div class="container mt-5">
    <h1>Lista delle Tecnologie</h1>
    <ul class="list-group">
      <li v-for="tech in technologies" :key="tech.id" class="list-group-item">
        {{ tech.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import { ref, onMounted } from "vue";

export default {
  name: "TechnologyList",
  setup() {
    const technologies = ref([]);

    const fetchTechnologies = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/technologies");
        technologies.value = response.data;
      } catch (error) {
        console.error("Errore durante il caricamento delle tecnologie:", error);
      }
    };

    onMounted(fetchTechnologies);

    return {
      technologies,
    };
  },
};
</script>
