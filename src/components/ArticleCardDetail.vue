<script>
import ArticleCardDate from './ArticleCardDate.vue';
import ArticleCardSite from './ArticleCardSite.vue';

export default {
    components: {
        ArticleCardDate,
        ArticleCardSite
    },
    props: {
        title: String,
        date: String,
        link: String
    }
};
</script>

<template>
    <div class="Detail">
        <div class="Title_text">{{ title }}</div>
        <ArticleCardDate :date="date" />
        <ArticleCardSite :link="link" />
    </div>
</template>

<style>
.Detail {
    display: flex;
    width: 260px;
    height: 80px;
    padding: 10px 20px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    border-radius: 0 0 6px 6px;
    border-top: 1px solid #FFD130;
    background: white;
}
.Title_text {
    color: #000;
    font-family: "Inria Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 160%;
}
</style>