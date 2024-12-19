<script>
export default{
    name: "StudentFront",
}
</script>

<template>
    <div id="main-container-student-front" class="h-id-long w-id-short outline outline-1 outline-black rounded-xl">
        <div class="relative w-full h-full pt-16">
            <div class="justify-items-center h-36 w-full rounded-md"> <!--Student photo container-->
                <div class="w-36 rounded-md overflow-clip bg-main">
                    <img src="../../../public/id-resources/samplepic.png"/>
                </div>
            </div>
            <span class="absolute left-8 font-black" style="font-size: 0.6rem;">2021-00149</span>
            <span class="text-center w-full absolute bottom-20 font-black text-main">BS CS</span>
            <span class="text-center w-full absolute bottom-16 font-bold text-sm">SHAN KHYLE D. ESTRADA</span>
            <img class="h-8 mt-16 justify-self-center" src="../../../public/id-resources/signature.png"/>
            <span class="text-center w-full absolute bottom-4 font-black" style="font-size: 0.5rem;">Prof. MAHMOR N. EDDING</span>
            <span class="text-center w-full absolute bottom-2 font-bold" style="font-size: 0.445rem;">Director, Student Affairs</span>
        </div>
    </div>
</template>

<style>
#main-container-student-front {
    background-image: url("../../../public/id-resources/student-id/student-id-front-big-clear.png");
    background-repeat: no-repeat;
    background-size: cover;
}
</style>