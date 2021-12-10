<template>
  <v-row>
    <v-col cols="6" offset="3">
      <v-card
        color="transparent"
        class="d-flex align-center justify-center marginTop"
        outlined
      >
        <v-card-text class="d-flex justify-center display-3 white--text">
          <p>DISCOVER CRYPTO UNIVERSE</p>
        </v-card-text>
      </v-card>
      <v-card
        color="transparent"
        class="d-flex align-center justify-center"
        outlined
      >
        <v-btn
          x-large
          color="white"
          class="secondary--text rounded-0"
          router
          :to="{ name: 'Stacking' }"
          dark
        >
          ENTER IN THE UNIVERSE
        </v-btn>
      </v-card>
    </v-col>
  </v-row>
</template>

<style scoped>
.marginTop {
  margin-top: 200px;
}
</style>