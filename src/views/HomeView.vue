<script setup>
  data: {

  }
</script>

<script>
export default {
  methods: {
    getIDForm() {
        this.$router.push("/getidform");
    },
  }
}
</script>

<template>
  <div class="h-viewport-minus-navbar content-center lg:pl-28 lg:justify-items-start justify-items-center lg:bg-[url('../../public/homeBackground.png')] lg:bg-cover bg-[url('../../public/upress-transparent.png')] bg-contain bg-no-repeat bg-center bg-origin-border">
    <h1 class="mb-6 font-extrabold text-7xl text-center">CRIMSON IDentify</h1>
    <p class="text-3xl lg:text-left text-center">The official ID system of <br/> Western Mindanao State University</p>
    <button type="button" class="mt-6 font-bold rounded-md bg-main hover:bg-hovColBut active:bg-actColBut px-6 py-3 text-2xl text-secondary drop-shadow" @click="getIDForm">GET ID NOW!</button>
  </div>
</template>

<style>
</style>