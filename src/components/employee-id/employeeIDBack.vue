<script>
export default{
    name: "EmployeeBack",
}
</script>

<template>
    <div id="main-container-employee-back" class="relative h-id-short w-id-long outline outline-1 outline-black rounded-xl">
        <div class="absolute outline outline-1 w-full top-20 h-7"> <!--Address container-->
            <div class="outline outline-1 h-full w-72 content-center justify-self-center text-center">
                <span class="font-medium text-xs">SAN ROQUE, ZAMBOANGA CITY</span>
            </div>
        </div>
        <div class="left-14 absolute outline outline-1 grid grid-cols-2" style="height: 31.5px; width: 113px; bottom: 63.5px"> <!--Other details container-->
            <div class="grid grid-cols-1 text-center outline outline-1 h-full" style="width: 46px;">
                <span class="font-bold" style="font-size: 4px;">03/27/03</span>
                <span class="font-bold" style="font-size: 4px;">0945-183-0519</span>
            </div>
            <div class="grid grid-cols-1 text-center outline h-full place-self-end" style="width: 32px;">
                <span class="font-bold self-center" style="font-size: 4px;">O</span>
                <span class="font-bold self-center" style="font-size: 4px;">S</span>
            </div>
        </div>
        <div class="absolute outline outline-1" style="left: 15px; width: 155px; bottom: 7px; height: 51px;"> <!--Client signature container-->
            <img class="mt-2 h-8 justify-self-center" src="../../../public/id-resources/signature.png"/>
        </div>
        <div class="items-center grid grid-cols-1 text-center absolute bottom-2 outline outline-1" style="height: 69px; width: 133px; right: 15px;"> <!--Emergency info container-->
            <span class="font-bold leading-tight" style="font-size: 10px;">GILDA D. ESTRADA</span>
            <span class="font-bold leading-tight" style="font-size: 10px;">SAN ROQUE, ZAMBOANGA CITY</span>
            <span class="font-bold leading-tight" style="font-size: 10px;">0906-164-8926</span>
        </div>
    </div>
</template>

<style>
#main-container-employee-back {
    background-image: url("../../../public/id-resources/employee-id/EMPLOYEE-ID-BACK.png");
    background-repeat: no-repeat;
    background-size: cover;
}
</style>