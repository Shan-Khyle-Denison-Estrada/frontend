<script>
export default{
    name: "EmployeeFront",
}
</script>

<template>
    <div id="main-container-employee-front" class="h-id-short w-id-long outline outline-1 outline-black rounded-xl">
        <div class="flex relative w-full" style="height: 9.6rem; margin-top: 3.15rem;"> <!--Container for all ID-Front info-->
            <div class="bg-red-900 absolute outline outline-1 top-2 outline-white ml-4" style="width: 7.65rem; height: 7.65rem;"> <!--Employee Photo Container-->
                <img src="../../../public/id-resources/samplepic.png"/>
            </div>
            <div class="pl-1 pt-3 grid grid-cols-1 absolute text-center right-0.5 content-end" style="min-width: 11.5rem; max-width: 11.5rem; height: auto;">
                <span class="text-sm font-medium leading-tight">SHAN KHYLE D. ESTRADA</span>
                <span class="font-medium leading-tight" style="font-size: 0.7rem;">University Professor</span>
                <span class="font-medium leading-relaxed" style="font-size: 0.6rem;">College of Computing Studies</span>
            </div>
            <div class="pb-0.5 grid grid-cols-1 absolute bottom-0 right-2.5 mr-2 justify-center text-center" style="">
                <img class="h-9 absolute bottom-2 justify-self-center" src="../../../public/id-resources/signature.png"/>
                <span class="font-bold line leading-tight" style="font-size: 0.55rem;">MA. CARLA A. OCHOTORENA, RN, Ph.D</span>
                <span class="font-medium leading-tight" style="font-size: 0.5rem;">President</span>
            </div>
            <div class="absolute bottom-0 ml-12">
                <span class="font-bold leading-tight" style="font-size: 0.7rem;">123456</span>
            </div>
        </div>
    </div>
</template>

<style>
#main-container-employee-front {
    background-image: url("../../../public/id-resources/employee-id/CoE_&_CCS_clear.png");
    background-repeat: no-repeat;
    background-size: cover;
}
</style>