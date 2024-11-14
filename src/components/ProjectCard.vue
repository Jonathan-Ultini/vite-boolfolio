<template>
  <div class="project-card">
    <h3>{{ project.name }}</h3>
    <a href="{{ project.link }}">{{ project.link }}</a>
  </div>
</template>

<script>
export default {
  props: {
    project: Object
  }
};
</script>
