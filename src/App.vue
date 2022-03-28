<template>
  <ul>
    <li>123</li>
  </ul>
</template>

<script>
export default {

  name: 'App',
  components: {
    
  },
  data() {
    return {
      data:[],
    }
  },
  mounted() {
    this.axios
      .get('')
      .then(response => {
        console.log(response)
        // this.data = response.data
        }).catch(error => {
          console.log(error)
        });
  },
  methods: {

  }
}
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
