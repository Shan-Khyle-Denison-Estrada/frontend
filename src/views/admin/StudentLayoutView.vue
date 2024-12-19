<template>
    <div class="flex h-full justify-center items-center">
        <div class="py-4 md:basis-1/2 md:mt-8 md:outline md:outline-main xsm:w-full rounded-lg shadow-xl justify-items-center">
            <div class="flex justify-center mb-4">
                <h1 class="font-bold text-3xl">Student ID</h1>
            </div>
            <div class="grid gap-8 md:grid-cols-2 xsm:grid-cols-1 justify-items-center">
                <studentFront class=""/>
                <studentBack/>
            </div>
            <button class="mt-4 drop-shadow-lg px-2 font-bold rounded-lg text-2xl bg-main text-white">EDIT</button>
        </div>
    </div>
</template>

<script setup>
    import studentFront from '../../components/student-id/studentIDFront.vue'
    import studentBack from '../../components/student-id/studentIDBack.vue'
</script>