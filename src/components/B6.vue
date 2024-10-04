<template>
  <v-dialog max-width="500">
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn
        v-bind="activatorProps"
        color="surface-variant"
        text="Xác nhận"
        variant="flat"
      ></v-btn>
    </template>

    <template v-slot:default="{ isActive }">
      <v-card>
        <v-card-title>
          <v-icon class="ml-auto" color="primary">mdi-clock</v-icon>
          <span>Xác nhận</span>
        </v-card-title>

        <v-card-text>
          Bạn có xác nhận làm mới dữ liệu không? Nếu có dữ liệu sẽ cập nhật
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn text="Xác nhận" @click="isActive.value = false"></v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script setup></script>

<style scoped>
.ml-auto {
  margin-left: auto;
}
</style>
