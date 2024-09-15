<script>
export default {
  name: "Header",
  props: ["initData"],
  emits: ["toggleLanguage"],
};
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Artúr Friedrich</a>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <button @click="$emit('toggleLanguage')" class="btn btn-dark">
              {{ initData.language === 'en' ? 'EN' : 'HU' }}
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.btn-dark {
  background-color: black;
  color: white;
  border: none;
}
.btn-dark:hover {
  background-color: white;
  color: black;
  border: 1px solid black;
}
</style>
