<script setup>
import { RouterLink } from 'vue-router';

</script>

<template>
    <div class="flex md:flex-row xsm:flex-col h-screen w-screen bg-gradient-to-r from-hovColText to-main">
        <div class="md:basis-1/2 md:block xsm:hidden justify-items-center content-center p-0">
            <RouterLink to="/" class="md:h-full block justify-items-center content-center">
                <img src="../../../public/upress-shadow.png" class="md:h-3/4" alt="University Press Logo" />
            </RouterLink>
        </div>
        <div class="flex md:basis-1/2 xsm:basis-3/4 justify-items-center content-center">
            <div class="md:basis-3/4 xsm:w-full xsm:px-4 justify-items-center content-center text-white">
                <RouterLink to="/">
                    <img src="../../../public/upress-shadow.png" class="md:hidden xsm:block px-20 py-10" alt="University Press Logo" />
                </RouterLink>
                <h1 class="font-extrabold text-3xl pb-5">ADMIN LOGIN</h1>
                <div class="w-full pb-5">
                    <label for="email" class="text-white block mb-2 text-sm font-medium dark:text-white">Email address</label>
                    <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
                </div> 
                <div class="w-full pb-5">
                    <label for="password" class="text-white block mb-2 text-sm font-medium dark:text-white">Password</label>
                    <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
                </div> 
                <button type="submit" class="text-main font-bold bg-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
            </div>
        </div>
    </div>
</template>