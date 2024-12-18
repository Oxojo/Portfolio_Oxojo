<script setup>
import IconImage from './IconImage.vue';
</script>

<template>
    <div class="Home">
        <IconImage />
        <div class="Moji">Oxojo.dev</div>
    </div>
</template>

<style>
.Home {
    display: flex;
    align-items: center;
    gap: 10px;
}
.Moji {
    color: #000;
    font-family: "Inria Sans";
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 160%; /* 38.4px */
}
</style>