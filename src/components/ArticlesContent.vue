<script setup>
    import ArticlesIcon from './ArticlesIcon.vue';
</script>

<template>
    <div class="Content">
        <ArticlesIcon />
        <div class="sentenses">
            <div class="title">Articles</div>
            <div class="detail">各種ブログサイトに掲載されている, Oxojo が書いた記事をまとめました.</div>
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
}
.title {
    color: #000;
    text-align: center;
    font-family: "Inria Sans";
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 160%; 
}
.detail {
    color: #000;
    text-align: center;
    font-family: "Inria Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
}
</style>