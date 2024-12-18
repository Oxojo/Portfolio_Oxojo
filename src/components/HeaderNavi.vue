<script setup>
import HomeLink from './HomeLink.vue';
import MainMenu from './MainMenu.vue';
</script>

<template>
    <div class="Navi">
        <HomeLink />
        <MainMenu />
    </div>
</template>

<style>
.Navi {
    display: flex;
    width: auto;
    padding: 10px 20px;
    justify-content: space-between;
    align-items: center;
}
@media screen and (max-width: 800px) {
    .Navi {
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: auto;
        padding: 10px 20px;
        justify-content: space-between;
        align-items: center;
    }
}
</style>