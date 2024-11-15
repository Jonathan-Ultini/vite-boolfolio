<template>
  <div class="container mt-5">
    <h1>Lista delle Tipologie</h1>
    <ul class="list-group">
      <li v-for="type in types" :key="type.id" class="list-group-item">
        {{ type.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import { ref, onMounted } from "vue";

export default {
  name: "TypeList",
  setup() {
    const types = ref([]);

    const fetchTypes = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/types");
        types.value = response.data;
      } catch (error) {
        console.error("Errore durante il caricamento delle tipologie:", error);
      }
    };

    onMounted(fetchTypes);

    return {
      types,
    };
  },
};
</script>
