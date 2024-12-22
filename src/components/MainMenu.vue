<template>
    <div class="Menu">
        <router-link to="/comingsoon" class="Contents">About Me</router-link>
        <router-link to="/comingsoon" class="Contents">Works</router-link>
        <router-link to="/comingsoon" class="Contents">Articles</router-link>
    </div>
</template>

<style>
.Menu {
    display: flex;
    gap: 20px;
    align-items: center;
    flex-shrink: 0;
}
.Contents {
    color: #000;
    font-family: "Inria Sans";
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    padding: 10px 5px;
}
</style>