<script>
import ArticleCardDetail from './ArticleCardDetail.vue';

export default {
    components: {
        ArticleCardDetail
    },
    props: {
        image_url: String,
        title: String,
        date: String,
        url: String,
        link: String
    }
};
</script>

<template>
    <a :href="url" style="text-decoration: none;">
        <div class="Card">
            <div class="CardImage">
                <img :src="image_url" alt="">
            </div>
            <ArticleCardDetail :title="title" :date="date" :link="link" />
        </div>
    </a>
</template>

<style>
.Card {
    width: 300px;
    border: 1px solid #DADADA;
}
.CardImage {
    width: 300px;
    height: 157.5px;
    flex-shrink: 0;
    border-radius: 6px 6px 0 0;
    background-color: #F7F7F7;
}
.CardImage img {
    all: unset;
    width: 99%;
    height: 99%;
    object-fit: contain;
    border: none;
}
</style>