<script>
import {reactive} from "vue";
import Header from "@/components/Header.vue";

export default {
  name: "App",
  components: { Header },
  data() {

    const initData = reactive({
      user: {
        language: "en",
      },
      setup: {
        contents: {
          en: {},
          hu: {}
        }
      }
    });

    return {
      initData,
    };
  },
  computed: {
    activeContent() {
      let userLanguage = this.initData.user.language;
      if (userLanguage === null) {
        return null;
      } else {
        return this.initData.setup.contents[userLanguage];
      }
    },
  },
  methods: {
    toggleLanguage() {
      this.initData.user.language = this.initData.user.language === "en" ? "hu" : "en";
    },
    async loadContent() {
      const languages = ["en", "hu"];
      for (const lang of languages) {
        const response = await fetch(`/vue-language-select/content/content_${lang}.json`);
        this.initData.setup.contents[lang] = await response.json();
      }
    }
  },
  created() {
    this.loadContent();
  }
};
</script>

<template>
  <Header :initData="initData" @toggleLanguage="toggleLanguage" />
  <RouterView :initData="initData" :contents="activeContent" />
</template>

<style scoped>

</style>
