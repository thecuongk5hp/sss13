<template>
  <div>
    <v-alert
      v-model="alert"
      close-label="Close Alert"
      title="Xác nhận"
      variant="tonal"
      closable
    >
      Bạn có chắc chắn muốn xóa tài khoản này không?
    </v-alert>
  </div>
</template>

<script setup>
import { ref } from "vue";

const alert = ref(true);
</script>

<style></style>
