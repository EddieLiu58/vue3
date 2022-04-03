<template>
  <v-app>
    <v-main>
      <div v-for="item in data" :key="item.id" :id="item.id">
        <card :item="item"></card>
      </div>
    </v-main>
  </v-app>
</template>

<script>
  import json from "../demo.json";
  import card from "./components/v-card/misc-media-width-text.vue";
  export default {
    name: "App",

    components: {
      card,
    },

    data: () => ({
      data: [],
      uri: "",
    }),
    mounted() {
      if (process.env.VUE_APP_ENV === "dev") {
        this.uri = process.env.VUE_APP_API_ENDPOINT_DEV;
        this.axios
          .get(`${this.uri}`)
          .then((response) => {
            this.data = response.data.attractions;
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        this.data = json.attractions;
      }
    },
    methods: {},
  };
</script>
<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
