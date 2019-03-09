<template>
  <div>
    <b-breadcrumb :items="items"/>
    <div v-if="loading" class="text-center">
      <b-spinner variant="primary"/>
    </div>
    <template v-else>
      <b-alert
        :show="showAlert"
        variant="danger"
        class="d-flex justify-content-between align-items-center"
      >
        <div>User not found</div>
        <b-button variant="outline-danger" @click="$router.go(-1)">Back</b-button>
      </b-alert>
      <div v-if="!showAlert">
        <h1 class="h2">{{this.$route.params.userid}}</h1>
        <ProjectList v-bind:projects="projects" v-on:selectProject="routeToDetail"></ProjectList>
      </div>
    </template>
  </div>
</template>

<script>
import ProjectList from "../components/ProjectList.vue";
import ApiGithub from "../api/api-github";

export default {
  name: "User",
  components: {
    ProjectList
  },
  data: function() {
    return {
      loading: true,
      items: [
        {
          text: "Home",
          to: { name: "home" }
        },
        {
          text: "User",
          active: true
        }
      ],
      showAlert: false,
      projects: [],
      user: {}
    };
  },
  created() {
    this.getProjects(this.$route.params.userid);
  },
  beforeRouteUpdate(to, from, next) {
    this.loading = true;
    this.projects = [];
    this.showAlert = false;
    this.getProjects(to.params.userid);
    next();
  },
  methods: {
    getProjects(username) {
      ApiGithub.getProjects(username)
        .then(response => {
          this.projects = response;
        })
        .catch(err => {
          this.showAlert = true;
        })
        .finally(() => {
          this.loading = false;
        });
    },
    routeToDetail({ projectid }) {
      this.$router.push({
        name: "project",
        params: { userid: this.$route.params.userid, projectid }
      });
    }
  }
};
</script>