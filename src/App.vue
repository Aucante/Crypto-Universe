<template>
  <v-app>
    <div>
      <v-container fluid class="bg"> <Navbar /></v-container>
      <video-background
        :src="require('./assets/background/backgroundVideo.mp4')"
        style="max-height: 1097px; height: 100vh"
      >
        <router-view></router-view>
      </video-background>
    </div>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
  },
  data: () => ({
    //
  }),
};
</script>

<style scoped>
.bg {
  background-color: #010717;
  height: 200px;
}
</style>
