<script>
import { reactive } from "vue";

export default {
  name: "App",
  components: {  },
  data() {
    const initData = reactive({

    });

    return {
      initData,
    };
  },
};
</script>

<template>
  <RouterView :initData="initData"/>
</template>

<style scoped>

</style>
