<script setup>
    import AboutMeIcon from './AboutMeIcon.vue';
</script>

<template>
    <div class="Content">
        <AboutMeIcon />
        <div class="sentenses">
            About Me
        </div>
    </div>
</template>

<style>
.Content {
    display: flex;
    width: 300px;
    flex-direction: column;
    align-items: center;
    gap: 24px;
}
.sentenses {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    align-self: stretch;
    
    color: #000;
    text-align: center;
    font-family: "Inria Sans";
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 160%; 
}
</style>