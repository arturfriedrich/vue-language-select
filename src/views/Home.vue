<script>
export default {
  name: "Home",
  props: ["initData", "contents"],
  data() {
    return {

    }
  },
  computed: {
    content() {
      return this.contents;
    }
  },
};
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h1>{{ content.welcome }}</h1>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
