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
          <v-app-bar color="#010717" dark outlined>
            <v-toolbar-title class="text-h5">CRYPTO UNIVERSE</v-toolbar-title>

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
        { name: "Documentation", link: null },
        { name: "Stacking", link: null },
        { name: "Contact", link: null },
      ],
    };
  },
};
</script>

