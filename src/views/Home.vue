<template>
  <div>
    <InputForm v-on:submit="onSubmit"></InputForm>
  </div>
</template>

<script>
import InputForm from "../components/InputForm.vue";

export default {
  name: "Home",
  components: {
    InputForm
  },
  methods: {
    onSubmit({ username }) {
      this.$router.push({ name: "user", params: { userid: username } });
    }
  }
};
</script>