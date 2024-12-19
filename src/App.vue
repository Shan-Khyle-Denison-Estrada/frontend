<script >
import NavBar from './components/navbar.vue';
import Footer from './components/footer.vue';
import AdminNav from './components/admin-components/adminNav.vue';
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
export default {
  name: 'App',
  components: {
    AdminNav,
    NavBar,
    Footer,
  },
  setup() {
    const route = useRoute();
    const currentPage = ref("");

    //Watch route change and update 'currentPage'
    watch(
      () => route.name,
      (newRouteName) => {
        currentPage.value = newRouteName;
      },
      { immediate: true }
    );
    return {
      currentPage,
    };
  },
};
</script>

<template>
  <div>
    <AdminNav :current-page="currentPage"/>
    <NavBar class="hidden"/>
    <main>
      <router-view />
    </main>
    <Footer class="hidden" />
  </div>
</template>

<style>
</style>
