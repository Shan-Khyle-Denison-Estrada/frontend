<script setup>
const props = defineProps({
    id: Number
})
</script>

<template>
    <div>
        <button>
            EDIT
        </button>
        <button>
            DELETE
        </button>
        <!-- <a :href="`/users/${id}/edi`" class="text-indigo-600 hover:text-indigo-500">EDIT</a> -->
    </div>
</template>