<template>
  <nav>
    <v-row>
      <v-col
        cols="10"
        offset="1"
        md="8"
        lg="8"
        xl="6"
        offset-md="2"
        offset-lg="2"
        offset-xl="3"
      >
        <div>
          <v-app-bar color="#010717" class="my-15" dark outlined>
            <v-toolbar-title
              ><router-link to="/"
                ><v-img
                  src="./../assets/logo/logo.png"
                  height="80"
                  width="250"
                ></v-img></router-link
            ></v-toolbar-title>

            <v-spacer></v-spacer>
            <v-menu left bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
              </template>

              <v-list tile>
                <v-list-item
                  v-for="(option, i) in options"
                  :key="i"
                  router
                  :to="{ name: option.link }"
                  @click="() => {}"
                >
                  <v-list-item-title>{{ option.name }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-app-bar>
        </div>
      </v-col>
    </v-row>
  </nav>
</template>


<script>
export default {
  data() {
    return {
      options: [
        { name: "Home", link: "Home" },
        { name: "Stacking", link: "Stacking" },
        { name: "Contact", link: "Contact" },
      ],
    };
  },
};
</script>

