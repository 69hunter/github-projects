<template>
  <div>
    <b-breadcrumb :items="items"/>
    <b-alert
      :show="showAlert"
      variant="danger"
      class="d-flex justify-content-between align-items-center"
    >
      <div>Project details not found</div>
      <b-button variant="outline-danger" @click="$router.go(-1)">Back</b-button>
    </b-alert>
    <div v-if="!showAlert">
      <h1 class="h2">{{this.$route.params.projectid}}</h1>
      <div v-html="content"></div>
    </div>
  </div>
</template>

<script>
import ApiGithub from "../api/api-github";

export default {
  name: "Project",
  data: function() {
    return {
      items: [
        {
          text: "Home",
          to: { name: "home" }
        },
        {
          text: "User",
          to: { name: "user", userid: this.$route.params.userid }
        },
        {
          text: "Project",
          active: true
        }
      ],
      showAlert: true,
      content: ""
    };
  },
  created() {
    this.getProjectDetails(
      this.$route.params.userid,
      this.$route.params.projectid
    );
  },
  beforeRouteUpdate(to, from, next) {
    this.getProjectDetails(to.params.userid, to.params.projectid);
    next();
  },
  methods: {
    getProjectDetails(userid, projectid) {
      ApiGithub.getProjectDetails(userid, projectid)
        .then(response => {
          console.log(response);
          return response;
        })
        .then(response => {
          this.showAlert = false;
          this.content = response;
        })
        .catch(err => {
          this.showAlert = true;
          this.content = "";
        });
    }
  }
};
</script>