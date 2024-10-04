<template>
  <div>
    <v-btn @click="handleClick">Click me</v-btn>

    <v-combobox v-model="city" label="city"
    ></v-combobox>

    <h3>Thanh pho: {{ city }}</h3>
  </div>
</template>

<script setup>
import { ref } from "vue";
const city = ref("");
const cities = reactive([
  "California",
  "Colorado",
  "Florida",
  "Georgia",
  "Texas",
  "Wyoming",
]);

const handleClick = () => {
  console.log("clicked");
};
</script>

<style></style>
