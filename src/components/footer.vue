<template>
    <footer class="bg-main text-secondary dark:bg-gray-900">
        <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <div class="md:flex md:justify-between">
            <div class="mb-6 md:mb-0">
                <a class="flex flex-col items-center">
                    <img src="../../public/upress.png" class="w-48 me-3" alt="University Press Logo" />
                    <span class="mt-5 w-80 self-center text-center text-balance text-md font-semibold whitespace-nowrap dark:text-white">
                        Western Mindanao State University
                        <br/> Normal Rd.,Baliwasan, Zamboanga City
                        Philippines <br/> Tel.No.: (062) 991-7911
                        <br/>Email: upress@wmsu.edu.ph</span>
                </a>
            </div>
            <div class="lg:mt-24 md:mt-24 text-center grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 mt-10">
                <div>
                    <h2 class="mb-4 text-lg font-bold text-white uppercase dark:text-white">NAVIGATION</h2>
                    <ul class="text-gray-500 dark:text-gray-400 font-medium">
                        <li class="mb-4 hover:underline text-white">
                            <RouterLink to="/">Home</RouterLink>
                        </li>
                        <li class="hover:underline mb-4 text-white">
                            <RouterLink to="/about">About Us</RouterLink>
                        </li>
                        <li class="hover:underline mb-4 text-white">
                            <RouterLink to="/tutorial">Tutorial</RouterLink>
                        </li>
                        <button type="button" class="font-bold rounded-md bg-secondary hover:bg-hovColBut active:bg-actColBut pl-2 pr-2 pt-1 pb-1 text-main drop-shadow" @click="getIDForm">GET ID NOW!</button>
                    </ul>
                </div>
                <div>
                    <h2 class="mb-4 text-lg font-bold text-white uppercase dark:text-white">CONTACT US</h2>
                    <ul class="text-gray-500 dark:text-gray-400 font-medium">
                        <li class="mb-4">
                            <p class="text-white">(062) 991-7911</p>
                        </li>
                        <li>
                            <p class="text-white">upress@wmsu.edu.ph</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div>
            <p class="text-sm text-center">Developed by Shan Khyle Estrada and Angelo John Landiao</p>
        </div>
        </div>
    </footer>
</template>

<script>
export default {
  name: "Footer",
  methods: {
    getIDForm() {
        this.$router.push("/getidform");
    },
  }
};
</script>

<script setup>
  import { RouterLink, RouterView } from 'vue-router'
</script>