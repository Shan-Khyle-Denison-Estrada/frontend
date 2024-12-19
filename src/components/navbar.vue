<script setup>
  import { RouterLink, RouterView } from 'vue-router'
</script>

<!-- Notice the two sets of script tags, this is done in order to avoid errors due to the "setup" and "export default" -->

<script>
export default {
  name: "NavBar",
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
    handleOutsideClick(event) {
      const menu = this.$refs.navbarMenu;
      const button = this.$refs.navbarToggle;
      if (menu && button && !menu.contains(event.target) && !button.contains(event.target)) {
        this.closeMenu();
      }
    },
    getIDForm() {
        this.$router.push("/getidform");
    },
  },
  mounted() {
    document.addEventListener("click", this.handleOutsideClick);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.handleOutsideClick);
  },
};
</script>


<template>
  <nav class="bg-main dark:bg-gray-900 pl-4 pr-4 pt-4 pb-4 text-secondary">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-0">
      <div class="flex items-center space-x-3 rtl:space-x-reverse drop-shadow">
        <img src="../../public/wmsu-logo.png" class="h-8" alt="WMSU Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">University Press</span>
      </div>
      <button
        ref="navbarToggle"
        @click="toggleMenu"
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        :aria-expanded="isMenuOpen.toString()"
      >
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
        </svg>
      </button>
      <div
        ref="navbarMenu"
        :class="{
          'hidden': !isMenuOpen,
          'block': isMenuOpen
        }"
        class="w-full md:block md:w-auto"
        id="navbar-default"
      >
        <div class="font-normal text-lg flex flex-col md:p-0 mt-4 px-4 pt-2 pb-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <RouterLink
            class="self-center block py-2 px-3 text-white focus:underline hover:text-hovColText md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            to="/"
          >Home</RouterLink>
          <RouterLink
            class="self-center block py-2 px-3 text-white focus:underline hover:text-hovColText md:hover:bg-transparent md:border-0  md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            to="/about"
          >About Us</RouterLink>
          <RouterLink
            class="self-center block py-2 px-3 text-white focus:underline hover:text-hovColText md:hover:bg-transparent md:border-0  md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            to="/tutorial"
          >Tutorial</RouterLink>
          <button type="button" class="font-bold rounded-md bg-secondary hover:bg-hovColBut active:bg-actColBut pl-2 pr-2 pt-1 pb-1 text-main drop-shadow" @click.prevent="getIDForm">GET ID NOW!</button>
        </div>
      </div>
    </div>
  </nav>
</template>


<style>
</style>