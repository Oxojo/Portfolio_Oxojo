<script>
export default {
    props: {
        link: String
    }
};
</script>

<template>
    <div class="Date">
        <img class="Date_icon" src="../../17989_line.png" alt="">
        <div class="Date_text">{{ link }}</div>
    </div>
</template>

<style>
.Date {
    display: flex;
    padding: 0 10px;
    align-items: center;
    gap: 5px;
    align-self: stretch;
}
.Date_icon {
    width: 17px;
    height: 15px;
}
.Date_text {
    color: #000;
    font-family: "Inria Sans";
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
}
</style>