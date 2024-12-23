<template>
    <div class="relative"> 
        <button @click="profileToggle" class="md:outline md:outline-main md:outline-2 xsm:outline-none flex items-center text-sm px-3 py-1 font-medium text-main rounded-md bg-white md:hover:bg-gray-600 xsm:hover:bg-none dark:hover:text-blue-500 md:me-0 dark:focus:ring-gray-700 dark:text-white md:drop-shadow-md xsm:drop-shadow-none" type="button">
            <span class="sr-only">Open user menu</span>
            <img class="w-10 h-10 me-2 rounded-full drop-shadow-xl outline outline-2 focus:ring-black" src="../../../public/id-resources/samplepic.png" alt="user photo">
            <div class="md:block xsm:hidden">
                <p>Shan Khyle Estrada</p> <!--Name of the authenticated user (admin)-->
                <p class="text-xs font-bold">Admin</p> <!--Role of the authenticated user-->
            </div>
        </button>
        
        <!-- Dropdown menu -->
        <div v-show="profileToggled" class="mt-2 md:w-full xsm:right-0 z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
            <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
                <div class="font-medium ">Shan Khyle Estrada</div>
                <div class="truncate">Admin</div>
            </div>
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton">
                <li>
                    <RouterLink class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" to="/account">
                        My Profile
                    </RouterLink>
                </li>
            </ul>
            <div class="py-2">

                <RouterLink
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    to="/login">
                    Logout
                </RouterLink>
            </div>
        </div>
            
    </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router';    
    export default {
        name: "Profile",
        data() {
            return{
                profileToggled: false,
            };
        },
        methods: {
            profileToggle() {
                this.profileToggled = !this.profileToggled;
            },
        },   
    }
    
</script>