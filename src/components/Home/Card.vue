<template>
  <v-card
    v-scroll.self="onScroll"
    color="transparent"
    class="overflow-y-auto overflow-x-hidden"
    max-height="1150"
  >
    <v-row>
      <v-col
        cols="10"
        md="8"
        lg="6"
        xl="4"
        offset="1"
        offset-md="2"
        offset-lg="3"
        offset-xl="4"
      >
        <h1 class="white--text text-h4 font-weight-light mt-10">STACKING</h1>
        <v-card
          v-for="(crypto, c) in cryptocurrency"
          :key="c"
          class="rounded-0 my-15"
        >
          <v-img
            :aspect-ratio="16 / 9"
            class="d-flex align-center"
            src="./../../assets/background/backgroundCard.png"
          >
            <v-row>
              <v-col cols="8">
                <v-card-text class="ml-5">
                  <p class="text-h5 text-uppercase ml-n2">
                    {{ crypto.name }}
                  </p>
                  <v-row>
                    <v-col cols="4">
                      <v-avatar
                        class="profile mb-8 ml-n2 rounded-lg"
                        color="grey"
                        size="90"
                        tile
                      >
                        <v-img :src="crypto.avatar"></v-img>
                      </v-avatar>
                    </v-col>
                    <v-col cols="8">
                      <div class="text-h2 text--primary mt-4 ml-7">
                        {{ crypto.code }}
                      </div>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="6">
                      <p class="overline mb-n2">Stacking</p>
                      <p class="overline mb-n2">APR</p>
                      <p class="overline">Liquidity</p>
                    </v-col>
                    <v-col cols="6">
                      <p v-if="crypto.stacking != null" class="overline mb-n2">
                        {{ crypto.stacking }} days
                      </p>
                      <p v-else class="overline mb-n2">Flexible</p>
                      <p class="overline mb-n2">{{ crypto.apr }} %</p>
                      <p class="overline">{{ crypto.liquidity }} $</p>
                    </v-col>
                  </v-row>
                </v-card-text>
                <v-card-actions class="d-flex align-end">
                  <v-btn
                    color="secondary"
                    class="white--text rounded-0 ml-7"
                    @click="openCard"
                  >
                    {{ btn }}
                  </v-btn>
                </v-card-actions>
              </v-col>
            </v-row>
          </v-img>
          <v-expand-transition>
            <v-card
              v-if="reveal"
              class="transition-fast-in-fast-out v-card--reveal"
              style="height: 100%"
            >
              <v-img
                :aspect-ratio="16 / 9"
                class="d-flex align-center"
                src="./../../assets/background/backgroundCard.png"
              >
                <v-row>
                  <v-col cols="8">
                    <v-card-text class="pb-0">
                      <p class="text-h4 text--primary pb-10">
                        {{ crypto.name }}
                      </p>
                      <p>
                        late 16th century (as a noun denoting a place where alms
                        were distributed): from medieval Latin eleemosynarius,
                        from late Latin eleemosyna ‘alms’, from Greek eleēmosunē
                        ‘compassion’
                      </p>
                    </v-card-text>
                    <v-card-actions class="pt-10 ml-n5">
                      <v-btn
                        color="secondary"
                        class="white--text rounded-0 ml-7"
                        @click="closeCard"
                      >
                        Close
                      </v-btn>
                    </v-card-actions>
                  </v-col>
                </v-row>
              </v-img>
            </v-card>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      cryptocurrency: [
        {
          id: 1,
          name: "Solana",
          code: "SOL",
          stacking: 30,
          apr: 9,
          liquidity: 22000500,
          avatar: require("./../../assets/avatar/solana.png"),
        },
        {
          id: 2,
          name: "Ripple",
          code: "XRP",
          stacking: 90,
          apr: 5,
          liquidity: 43070500,
          avatar: require("./../../assets/avatar/xrp.jpg"),
        },
      ],
      btn: "Learn More",
      reveal: false,
      scrollInvoked: 0,
    };
  },
  methods: {
    openCard: function () {
      this.reveal = true;
    },
    closeCard: function () {
      this.reveal = false;
    },
    onScroll() {
      this.scrollInvoked++;
    },
  },
  computed: {
    revealClose: function () {
      return this.reveal;
    },
  },
};
</script>


<style>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>
