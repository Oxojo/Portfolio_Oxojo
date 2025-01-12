<template>
    <div class="PageContents">
        <div class="BaseInfo">
            <div class="BaseInfoImg">
                <img src="../../Oxojo.dev_ogp.png" alt="">
            </div>
            <div class="BaseInfoText">
                <div class="Name">Oxojo.dev</div>
                <div class="date">制作期間 : 2024/12~</div>
            </div>
        </div>
        <div class="Comment">
            <div class="CommentTitle">Comment</div>
            <div class="CommentText">
                ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ
            </div>
        </div>
    </div>
</template>

<style>
.PageContents {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 80px;
}
.BaseInfo {
    margin-top: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
}
@media screen and (max-width: 800px) {
    .BaseInfo {
        margin-top: 80px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }
}
.BaseInfoImg {
    width: 300px;
    height: 157.5px;
}
.BaseInfoImg img {
    width: 100%;
    height: 100%;
    border-radius: 6px;
    border: 1px solid black;
}
.BaseInfoText {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
@media screen and (max-width: 800px) {
    .BaseInfoText {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
}
.Name {
    color: #D9A90E;
    font-family: "Inria Sans";
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 160%;
}
.date {
    color: #000;
    font-family: "Inria Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
}
.Comment {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}
.CommentTitle {
    color: #000;
    font-family: "Inria Sans";
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 160%;
}
.CommentText {
    width: 80%;
    color: #000;
    text-align: center;
    font-family: "Inria Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
}
</style>