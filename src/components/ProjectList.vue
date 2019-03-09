<template>
  <b-list-group>
    <b-list-group-item
      v-for="project in projects"
      v-bind:key="project.id"
      class="d-flex justify-content-between align-items-center mb-2"
    >
      <div>
        <h2 class="h5">{{project.name}}</h2>
        <div class="text-secondary text-size-1">
          Created at: {{(new Date(project.created_at)).toLocaleString('en-GB')}}
          <br>
          Last updated: {{(new Date(project.updated_at)).toLocaleString('en-GB')}}
        </div>
      </div>
      <div>
        <b-button variant="outline-primary" @click="selectProject(project.name)">Detail</b-button>
      </div>
    </b-list-group-item>
  </b-list-group>
</template>

<script>
export default {
  props: ["projects"],
  methods: {
    selectProject(projectid) {
      this.$emit("selectProject", {
        projectid
      });
    }
  }
};
</script>
