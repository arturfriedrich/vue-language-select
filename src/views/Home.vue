<script>
export default {
  name: "Home",
  props: ["initData", "contents"],
  computed: {
    content() {
      return this.contents;
    }
  },
};
</script>

<template>
  <div class="container py-5">
    <div class="row">
      <div class="col-md-8 offset-md-2">
        <h1 class="mb-4">{{ content.title }}</h1>
        <span v-html="content.txt" class="mb-3 d-block"></span>
        <p class="text-muted">{{ content.author }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 600;
}
span {
  font-size: 1.1rem;
}
p {
  font-size: 0.9rem;
}
</style>
