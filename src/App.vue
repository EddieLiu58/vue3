<template>
  <div>
    <div v-for="item in data" :key="item.id" :id="item.id">
      <h2>{{ item.title }}</h2>
      <img :src="item.cover_image" width="600" height="300" />
      <div class="address">{{ item.address }}</div>
      <div class="visit_hours">{{ item.visit_hours }}</div>
      <div class="traffic_guideline">{{ item.traffic_guideline }}</div>
      <div class="parking_information">{{ item.parking_information }}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "App",
    components: {},
    data() {
      return {
        data: [],
        uri: "",
      };
    },
    mounted() {
      if (process.env.VUE_APP_ENV === "dev") {
        this.uri = process.env.VUE_APP_API_ENDPOINT_DEV;
      } else {
        this.uri = process.env.VUE_APP_API_ENDPOINT;
      }
      this.axios
        .get(`${this.uri}`,{
   headers: {
          // remove headers
        }
      })
        .then((response) => {
          this.data = response.data.attractions;
        })
        .catch((error) => {
          console.log(error);
        });
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
