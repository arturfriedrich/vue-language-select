<script>
export default {
  name: "Header",
  props: ["initData"],
  emits: ["toggleLanguage"],
};
</script>

<template>
  <nav class="navbar">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Artúr Friedrich</a>
      <div class="navbar-nav">
        <ul class="navbar-nav d-flex flex-row align-items-center">
          <li class="nav-item me-3">
            <span @click="$emit('toggleLanguage')" style="cursor: pointer;">
              {{ initData.language === 'en' ? '🇬🇧' : '🇭🇺' }}
            </span>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>

</style>
