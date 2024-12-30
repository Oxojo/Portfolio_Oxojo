<script setup>
    import SNSButtons from './SNSButtons.vue';
</script>

<template>
    <div class="Top">
        <img class="AboutmeTopIcon" src="../../Oxojo_icon.png" alt="">
        <SNSButtons />
    </div>
</template>

<style>
.AboutmeTopIcon {
    display: flex;
    width: 205px;
    height: 205px;
    justify-content: center;
    align-items: center;
}
.Top {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
}
@media screen and (max-width: 500px) {
    .Top {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 30px;
    }
}
</style>