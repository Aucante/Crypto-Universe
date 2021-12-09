<template>
  <v-app>
    <div>
      <video-background
        :src="require('./assets/background/backgroundVideo.mp4')"
        style="max-height: 1347px; height: 100vh"
      >
        <router-view></router-view>
      </video-background>
    </div>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
  data: () => ({
    //
  }),
};
</script>

<style scoped>
.bg {
  background-color: #010717;
  height: 150px;
}
</style>
