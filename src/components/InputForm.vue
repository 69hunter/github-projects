<template>
  <b-form @submit="onSubmit" @reset="onReset">
    <b-form-group id="username" label="Github username:" label-for="username">
      <b-form-input
        id="username"
        v-model="name"
        trim
        type="text"
        placeholder="Enter Github username"
        required
      />
    </b-form-group>
    <div class="d-flex justify-content-center">
      <b-button class="mx-1" variant="primary" type="submit">Search</b-button>
      <b-button class="mx-1" variant="outline-primary" type="reset">Reset</b-button>
    </div>
  </b-form>
</template>

<script>
export default {
  name: "InputForm",
  data: function() {
    return {
      name: ""
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      if (this.name) {
        this.$emit("submit", {
          username: this.name
        });
      }
    },
    onReset(e) {
      e.preventDefault();
      this.name = "";
    }
  }
};
</script>
