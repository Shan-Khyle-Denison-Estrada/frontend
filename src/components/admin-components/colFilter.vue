<script>
export default {
    data() {
        return {
            isFilterVisible: false // Default state of filter (hidden)
        }
    },
    methods: {
        toggleFilter() {
            this.isFilterVisible = !this.isFilterVisible;
        }
    },
}
</script setup>

<script setup>
</script>

<template>
    <div class="flex justify-center items-center">
    <!--Container for all column filters (client type, transaction type, status)-->
        <button @click="toggleFilter" class=""><!--Toggle for filters-->
            <svg v-if="isFilterVisible" class="w-7 h-7 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M5.05 3C3.291 3 2.352 5.024 3.51 6.317l5.422 6.059v4.874c0 .472.227.917.613 1.2l3.069 2.25c1.01.742 2.454.036 2.454-1.2v-7.124l5.422-6.059C21.647 5.024 20.708 3 18.95 3H5.05Z"/>
            </svg>
            <svg v-else class="w-7 h-7 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-width="1.6" d="M18.796 4H5.204a1 1 0 0 0-.753 1.659l5.302 6.058a1 1 0 0 1 .247.659v4.874a.5.5 0 0 0 .2.4l3 2.25a.5.5 0 0 0 .8-.4v-7.124a1 1 0 0 1 .247-.659l5.302-6.059c.566-.646.106-1.658-.753-1.658Z"/>
            </svg>
        </button>
        <div v-if="isFilterVisible" class="z-10 gap-2 absolute top-28 justify-self-center xsm:inset-x-6 bg-white flex flex-col outline rounded-lg outline-1 p-4"><!--Container for all filters-->
            <fieldset class="flex flex-row"><!--Container for client type filter-->
                <div>
                    <p class="font-medium mb-1">Client Type:</p>
                    <div class="flex flex-row justify-items-center gap-2">
                        <div class="flex items-center">
                            <input checked id="all" type="radio" value="all" name="client-type" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" @change="filter">
                            <label for="all" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">All</label>
                        </div>
                        <div class="flex items-center">
                            <input id="default-radio-2" type="radio" value="student" name="client-type" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" @change="filter">
                            <label for="default-radio-2" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Student</label>
                        </div>
                        <div class="flex items-center">
                            <input id="default-radio-2" type="radio" value="employee" name="client-type" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" @change="filter">
                            <label for="default-radio-2" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Employee</label>
                        </div>
                    </div>
                </div>        
            </fieldset>
            <!-- <fieldset class="flex flex-row">
                <div>
                    <p class="font-medium mb-1">Staff type:</p>
                    <div class="flex flex-row justify-items-center gap-2">
                        <div class="flex items-center">
                            <input checked id="all" type="radio" value="all" name="staff-type" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="all" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">All</label>
                        </div>
                        <div class="flex items-center">
                            <input id="default-radio-2" type="radio" value="teaching" name="staff-type" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="default-radio-2" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Teaching</label>
                        </div>
                        <div class="flex items-center">
                            <input id="default-radio-2" type="radio" value="non-teaching" name="staff-type" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="default-radio-2" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Non-teaching</label>
                        </div>
                    </div>
                </div>
            </fieldset> -->
            <!-- <fieldset class="flex flex-row">
                <div>
                    <p class="font-medium mb-1">Transaction Type:</p>
                    <div class="flex flex-row justify-items-center gap-2">
                        <div class="flex items-center">
                            <input checked id="default-radio-1" type="radio" value="all" name="transaction-type" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="default-radio-1" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">All</label>
                        </div>
                        <div class="flex items-center">
                            <input id="default-radio-2" type="radio" value="new" name="transaction-type" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="default-radio-2" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">New</label>
                        </div>
                        <div class="flex items-center">
                            <input id="default-radio-2" type="radio" value="replacement" name="transaction-type" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="default-radio-2" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Replacement</label>
                        </div>
                        <div class="flex items-center">
                            <input id="default-radio-2" type="radio" value="lost" name="transaction-type" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="default-radio-2" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Lost</label>
                        </div>
                    </div>
                </div>
            </fieldset> -->
            <!-- <fieldset class="flex flex-row">
                <div>
                    <p class="font-medium mb-1">Status:</p>
                    <div class="flex flex-row justify-items-center gap-2">
                        <div class="flex items-center">
                            <input checked id="default-radio-1" type="radio" value="all" name="status" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="default-radio-1" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">All</label>
                        </div>
                        <div class="flex items-center">
                            <input id="default-radio-2" type="radio" value="pending" name="status" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="default-radio-2" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Pending</label>
                        </div>
                        <div class="flex items-center">
                            <input id="default-radio-2" type="radio" value="print ready" name="status" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="default-radio-2" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Print ready</label>
                        </div>
                        <div class="flex items-center">
                            <input id="default-radio-2" type="radio" value="printed" name="status" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="default-radio-2" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Printed</label>
                        </div>
                    </div>
                </div>
            </fieldset> -->
            <!-- <div class="mt-3 mb-1 flex justify-center w-full">
                <button class="items-center flex flex-row font-bold px-4 py-1 rounded-md bg-main text-white shadow-md"><span class="mr-1">Filter</span>
                    <svg class="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24">
                        <path d="M5.05 3C3.291 3 2.352 5.024 3.51 6.317l5.422 6.059v4.874c0 .472.227.917.613 1.2l3.069 2.25c1.01.742 2.454.036 2.454-1.2v-7.124l5.422-6.059C21.647 5.024 20.708 3 18.95 3H5.05Z"/>
                    </svg>
                </button>
            </div> -->
        </div>
    </div>
</template>