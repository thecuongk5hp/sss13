<template>
  <div class="d-flex">
    <v-sheet class="mx-auto" width="400">
      <h5>Basic Layout</h5>
      <v-form @submit.prevent>
        <label for="">Name</label>
        <v-text-field
          density="compact"
          aria-placeholder=""
          variant="outlined"
        ></v-text-field>
        <label for="">Company</label>
        <v-text-field density="compact" variant="outlined"></v-text-field>
        <label for="">Email</label>
        <v-text-field density="compact" variant="outlined"></v-text-field>
        <label for="">Phone No</label>
        <v-text-field density="compact" variant="outlined"></v-text-field>
        <label for="">Message</label>
        <v-textarea label="Label" rows="1" variant="outlined"></v-textarea>
        <v-btn color="primary" type="submit" class="btn-send">Send</v-btn>
      </v-form>
    </v-sheet>

    <v-sheet class="mx-auto" width="400">
      <h5>Basic with icons</h5>
      <v-form @submit.prevent>
        <label for="">Name</label>
        <v-text-field
          density="compact"
          variant="outlined"
          prepend-inner-icon="mdi-account"
        ></v-text-field>

        <label for="">Company</label>
        <v-text-field
          density="compact"
          variant="outlined"
          prepend-inner-icon="mdi-briefcase"
        ></v-text-field>

        <label for="">Email</label>
        <v-text-field
          density="compact"
          variant="outlined"
          prepend-inner-icon="mdi-email"
        ></v-text-field>

        <label for="">Phone No</label>
        <v-text-field
          density="compact"
          variant="outlined"
          prepend-inner-icon="mdi-phone"
        ></v-text-field>

        <label for="">Message</label>
        <v-textarea
          label="Label"
          rows="1"
          variant="outlined"
          prepend-inner-icon="mdi-message"
        ></v-textarea>

        <v-btn color="primary" type="submit" class="btn-send">
          <v-icon left>mdi-send</v-icon>
          Send
        </v-btn>
      </v-form>
    </v-sheet>
  </div>
</template>

<script setup></script>

<style>
.btn-send {
  width: 50px;
}
</style>
