<script>
export default{
    name: "StudentBack",
}
</script>

<template>
    <div id="main-container-student-back" class="relative h-id-long w-id-short outline outline-1 outline-black rounded-xl">
        <div class="w-full absolute top-16 h-20 mt-2">
            <span class="absolute text-center w-full text-xs font-bold mt-3">GILDA D. ESTRADA</span>
            <span class="absolute top-7 text-center w-full font-md mt-1" style="font-size: 0.6rem;">San Roque Gil S. Estrada Compound Z.C. </span>
            <span class="absolute top-12 text-center w-full font-bold mt-1" style="font-size: 0.7rem;">0906-174-0947</span>
            <div class="pl-3 items-center grid grid-cols-1 absolute top-24 w-full" style="top: 7rem; height: 4.2rem;">
                <span class="font-bold" style="font-size: 0.3rem;">2024-2025</span>
                <span class="font-bold" style="font-size: 0.3rem;">2025-2026</span>
                <span class="font-bold" style="font-size: 0.3rem;">2026-2027</span>
                <span class="font-bold" style="font-size: 0.3rem;">2027-2028</span>
            </div>
            <div class="absolute h-12 w-full content-center" style="top: 11.5rem;">
                <img class="h-10 justify-self-center self-center" src="../../../public/id-resources/signature.png"/>
            </div>
            
        </div>
    </div>
</template>

<style>
#main-container-student-back {
    background-image: url("../../../public/id-resources/student-id/student-id-back-big.png");
    background-repeat: no-repeat;
    background-size: cover;
}
</style>