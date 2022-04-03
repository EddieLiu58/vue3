<template>
  <v-card class="mx-auto" max-width="400">
    <v-img
      class="align-end text-white"
      height="200"
      :src="item.cover_image"
      cover
    >
      <v-card-title>{{ item.title }}</v-card-title>
    </v-img>
    <v-card-subtitle class="pt-4">{{ item.address }}</v-card-subtitle>

    <v-card-text>
      <div class="visit_hours">{{ item.visit_hours }}</div>
      <div class="traffic_guideline">{{ item.traffic_guideline }}</div>
      <div class="parking_information">{{ item.parking_information }}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn color="orange"> Share </v-btn>

      <v-btn color="orange"> Explore </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
  export default {
    props: ["item"],
  };
</script>
