<script setup>
    import WorksIcon from './WorksIcon.vue';
</script>

<template>
    <div class="Content">
        <WorksIcon />
        <div class="sentenses">
            <div class="title">Works</div>
            <div class="detail">今までに製作した作品や, 参加したプロジェクトなどをまとめました.</div>
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