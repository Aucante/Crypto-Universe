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
            <v-toolbar-title>CRYPTO UNIVERSE</v-toolbar-title>

            <v-spacer></v-spacer>
            <v-menu left bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
              </template>

              <v-list>
                <v-list-item v-for="n in 5" :key="n" @click="() => {}">
                  <v-list-item-title>Option {{ n }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-app-bar>
        </div>
      </v-col>
    </v-row>
  </nav>
</template>
