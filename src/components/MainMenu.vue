<template>
    <div class="Menu">
        <div class="Contents">About Me</div>
        <div class="Contents">Works</div>
        <div class="Contents">Articles</div>
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