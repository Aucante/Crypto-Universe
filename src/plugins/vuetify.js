import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: '#010717', // #E53935
            secondary: '#0B2F63', // #FFCDD2
            accent: colors.blueGrey.base, // #3F51B5
            card: '#1558B4',
          },
        },
      },
});
