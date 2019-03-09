import VueRouter from 'vue-router';
import Home from './views/Home.vue';
import User from './views/User.vue';
import Project from './views/Project.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/:userid',
    name: 'user',
    component: User,
  },
  {
    path: '/:userid/:projectid',
    name: 'project',
    component: Project
  },
  {
    path: '*',
    redirect: { name: 'home' }
  }
];

const router = new VueRouter({
  routes
});

export default router;