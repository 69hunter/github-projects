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
        <div>Project details not found</div>
        <b-button variant="outline-danger" @click="$router.go(-1)">Back</b-button>
      </b-alert>
      <div v-if="!showAlert">
        <h1 class="h2">{{this.$route.params.projectid}}</h1>
        <div v-html="content"></div>
      </div>
    </template>
  </div>
</template>

<script>
import ApiGithub from "../api/api-github";

export default {
  name: "Project",
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
          to: { name: "user", userid: this.$route.params.userid }
        },
        {
          text: "Project",
          active: true
        }
      ],
      showAlert: false,
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
    this.loading = true;
    this.content = "";
    this.showAlert = false;
    this.getProjectDetails(to.params.userid, to.params.projectid);
    next();
  },
  methods: {
    getProjectDetails(userid, projectid) {
      ApiGithub.getProjectDetails(userid, projectid)
        .then(response => {
          this.content = response;
        })
        .catch(err => {
          this.showAlert = true;
        })
        .finally(()=>{
          this.loading = false;
        });
    }
  }
};
</script>