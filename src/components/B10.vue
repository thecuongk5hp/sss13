<template>
  <div>
    <h1>Item</h1>
    <v-data-table :headers="headers" :items="vegetables">
      <template v-slot:item.fat="slotProps">
        <v-chip :color="getColor(slotProps.value)">
          {{ slotProps.value }}
        </v-chip>
      </template>
    </v-data-table>
  </div>
</template>

<script setup>
import { ref } from "vue";

const headers = [
  { title: "Name", key: "name" },
  { title: "Status", key: "fat" },
  { title: "Project Name", key: "calories" },
  { title: "Post", key: "carbs" },
  { title: "Budget", key: "protein" },
];

const vegetables = ref([
  {
    name: "Spinach",
    calories: "Spinach",
    fat: "Active",
    carbs: 3.6,
    protein: 2.9,
    iron: "15%",
  },
  {
    name: "Kael",
    calories: "Kael",
    fat: "Active",
    carbs: 8.8,
    protein: 4.3,
    iron: "16%",
  },
  {
    name: "Broccoli",
    calories: "Broccoli",
    fat: "Pending",
    carbs: 6.6,
    protein: 2.8,
    iron: "6%",
  },
  {
    name: "Brussels Sprouts",
    calories: "Brussels Sprouts",
    fat: "Pending",
    carbs: 8.9,
    protein: 3.4,
    iron: "9%",
  },
  {
    name: "Avocado",
    calories: "Avocado",
    fat: "Pending",
    carbs: 9,
    protein: 2,
    iron: "3%",
  },
  {
    name: "Sweet Potato",
    calories: "Sweet Potato",
    fat: "Completed",
    carbs: 20.1,
    protein: 1.6,
    iron: "3%",
  },
  {
    name: "Corn",
    calories: "Corn",
    fat: "Completed",
    carbs: 21,
    protein: 3.4,
    iron: "2%",
  },
  {
    name: "Potato",
    calories: "Potato",
    fat: "Completed",
    carbs: 17.5,
    protein: 2,
    iron: "8%",
  },
  {
    name: "Butternut Squash",
    calories: "Butternut Squash",
    fat: "Cancel",
    carbs: 11.7,
    protein: 1,
    iron: "4%",
  },
  {
    name: "Beetroot",
    calories: "Beetroot",
    fat: "Cancel",
    carbs: 10,
    protein: 1.6,
    iron: "6%",
  },
  {
    name: "Parsnip",
    calories: "Parsnip",
    fat: "Cancel",
    carbs: 18,
    protein: 1.2,
    iron: "4%",
  },
  {
    name: "Yam",
    calories: "Yam",
    fat: "Active",
    carbs: 27.9,
    protein: 1.5,
    iron: "4%",
  },
  {
    name: "Acorn Squash",
    calories: "Acorn Squash",
    fat: "Active",
    carbs: 10,
    protein: 1,
    iron: "5%",
  },
  {
    name: "Artichoke",
    calories: "Artichoke",
    fat: "Completed",
    carbs: 10.5,
    protein: 3.3,
    iron: "7%",
  },
  {
    name: "Peas",
    calories: "Peas",
    fat: "Pending",
    carbs: 14.5,
    protein: 5.4,
    iron: "25%",
  },
  {
    name: "Green Beans",
    calories: "Green Beans",
    fat: "Cancel",
    carbs: 6.9,
    protein: 1.8,
    iron: "8%",
  },
  {
    name: "Red Bell Pepper",
    calories: "Red Bell Pepper",
    fat: "Pending",
    carbs: 6.0,
    protein: 1.0,
    iron: "3%",
  },
  {
    name: "Cauliflower",
    calories: 25,
    fat: 0.1,
    carbs: 5.0,
    protein: 1.9,
    iron: "4%",
  },
  {
    name: "Zucchini",
    calories: 17,
    fat: 0.3,
    carbs: 3.1,
    protein: 1.2,
    iron: "3%",
  },
  {
    name: "Asparagus",
    calories: 20,
    fat: 0.1,
    carbs: 3.9,
    protein: 2.2,
    iron: "16%",
  },
  {
    name: "Eggplant",
    calories: 25,
    fat: 0.2,
    carbs: 6,
    protein: 1,
    iron: "1%",
  },
  {
    name: "Pumpkin",
    calories: 26,
    fat: 0.1,
    carbs: 6.5,
    protein: 1,
    iron: "4%",
  },
  {
    name: "Celery",
    calories: 16,
    fat: 0.2,
    carbs: 3,
    protein: 0.7,
    iron: "1%",
  },
  {
    name: "Cucumber",
    calories: 15,
    fat: 0.1,
    carbs: 3.6,
    protein: 0.7,
    iron: "2%",
  },
  {
    name: "Leek",
    calories: 61,
    fat: 0.3,
    carbs: 14.2,
    protein: 1.5,
    iron: "12%",
  },
  {
    name: "Fennel",
    calories: 31,
    fat: 0.2,
    carbs: 7,
    protein: 1.2,
    iron: "6%",
  },
  {
    name: "Green Peas",
    calories: 81,
    fat: 0.4,
    carbs: 14.5,
    protein: 5.4,
    iron: "25%",
  },
  {
    name: "Okra",
    calories: 33,
    fat: 0.2,
    carbs: 7.5,
    protein: 1.9,
    iron: "3%",
  },
  {
    name: "Chard",
    calories: 19,
    fat: 0.2,
    carbs: 3.7,
    protein: 1.8,
    iron: "22%",
  },
  {
    name: "Collard Greens",
    calories: 32,
    fat: 0.6,
    carbs: 5.4,
    protein: 3,
    iron: "2%",
  },
]);

const getColor = (status) => {
  if (status === "Pending") return "orange";
  else if (status === "Cancel") return "red";
  else if (status === "Active") return "green";
  else if (status === "Completed") return "blue";
};
</script>

<style scoped></style>
