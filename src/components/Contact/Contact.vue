<template>
  <v-container fluid>
    <v-row>
      <v-col
        cols="10"
        md="8"
        lg="6"
        xl="6"
        offset="1"
        offset-md="2"
        offset-lg="3"
        offset-xl="3"
      >
        <h1 class="grey--text text-h4 font-weight-thin">Let's work together</h1>
        <v-card class="mt-15" color="transparent" outlined>
          <v-row>
            <v-col
              cols="12"
              sm="12"
              md="12"
              lg="8"
              xl="8"
              class="d-flex align-center"
            >
              <v-card-text>
                <p class="display-1 white--text text-uppercase">
                  sebastien.aucante.pro@gmail.com
                </p>
              </v-card-text>
            </v-col>
            <v-col cols="3" sm="3" md="3" lg="1" xl="1">
              <v-card-text>
                <a
                  href="mailto:sebastien.aucante.pro@gmail.com"
                  class="linkNone"
                  ><v-icon size="70" color="white">mdi-email</v-icon></a
                >
              </v-card-text>
            </v-col>
            <v-col cols="3" sm="3" md="3" lg="1" xl="1">
              <v-card-text>
                <a
                  href="https://www.linkedin.com/in/s%C3%A9bastien-aucante-180a37207/"
                  class="linkNone"
                  ><v-icon size="70" color="white">mdi-linkedin</v-icon></a
                >
              </v-card-text>
            </v-col>
            <v-col cols="3" sm="3" md="3" lg="1" xl="1">
              <v-card-text>
                <a href="https://gitlab.com/Saucante" class="linkNone"
                  ><v-icon size="70" color="white">mdi-gitlab</v-icon></a
                >
              </v-card-text>
            </v-col>
            <v-col cols="3" sm="3" md="3" lg="1" xl="1">
              <v-card-text>
                <a href="https://github.com/Aucante" class="linkNone"
                  ><v-icon size="70" color="white">mdi-github</v-icon></a
                >
              </v-card-text>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.linkNone {
  text-decoration: none;
}
</style>