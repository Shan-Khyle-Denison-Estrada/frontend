<script>
    import GraphCard from "../../components/admin-components/barGraph.vue";
    import Table from "../../components/admin-components/dashTable.vue"

    export default {
        components: {
            GraphCard,
            Table,
        }
    };
</script>

<template>
    <div class="px-4 mb-4 mt-1"> <!--Main container for all dashboard components/parts/widgets-->
        <div class="h-1/4 grid-template-rows:auto w-full grid md:grid-cols-3 md:grid-rows-1 xsm:grid-rows-3 xsm:grid-cols-1 gap-4  rounded-lg"> <!--The top part (display of numbers)-->
            <div class="h-full bg-white rounded-md items-center justify-items-center place-content-center drop-shadow-lg py-4 outline outline-main outline-2">
                <h4 class="font-medium text-xl">New</h4>
                <p class="text-main text-7xl font-extrabold">690</p>
            </div>
            <div class="h-full bg-white rounded-md items-center justify-items-center place-content-center drop-shadow-lg py-4 outline outline-main outline-2">
                <h4 class="font-medium text-xl">Replacement</h4>
                <p class="text-main text-7xl font-extrabold">420</p>
            </div>
            <div class="h-full bg-white rounded-md items-center justify-items-center place-content-center drop-shadow-lg py-4 outline outline-main outline-2">
                <h4 class="font-medium text-xl">Lost</h4>
                <p class="text-main text-7xl font-extrabold">327</p>
            </div>
        </div>
        <div class="mt-4 flex md:flex-row xsm:flex-col rounded-lg"> <!--The bottom part (graph and table)-->
            <div class="basis-1/2 md:mr-2 xsm:m-0">
                <GraphCard/>
            </div>
            <div class="basis-1/2 md:ml-2 md:m-0 xsm:mt-4">
                <Table/>
            </div>
        </div>
    </div>
</template>