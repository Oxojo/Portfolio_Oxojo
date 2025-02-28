<script>
export default {
    props: {
        image_url: String,
        title: String
    }
};
</script>

<template>
    <a :href="url" style="text-decoration: none;">
        <div class="Card">
            <div class="CardImage">
                <img :src="image_url" alt="">
            </div>
            <div class="Title_text">{{ title }}</div>
        </div>
    </a>
</template>

<style>
.Card {
    width: 300px;
    border: 1px solid #DADADA;
}
.CardImage img {
    all: unset;
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-style: none;
}
.CardImage {
    width: 300px;
    height: 157.5px;
    flex-shrink: 0;
    border-radius: 6px 6px 0 0;
    background-color: #F7F7F7;
}
.Title_text {
    color: #000;
    font-family: "Inria Sans";
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 200%;
    display: flex;
    width: 260px;
    height: 40px;
    padding: 10px 20px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    border-radius: 0 0 6px 6px;
    border-top: 1px solid #FFD130;
    background: white;
}
</style>