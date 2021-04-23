<template>
    <div >
        <b-card class="notif-card">
            <b-card-text class="title">{{notif.title}}</b-card-text>
            <b-card-text class="desc">{{notif.desc}}</b-card-text>
            <b-card-text class="time">{{notif.time}}</b-card-text>
            <div class="bottom-border"></div>
        </b-card>
    </div>
</template>

<script>
export default {
    name: "CardOrder",
    props: ["notif"],
}
</script>

<style scoped>
.notif-card{
    text-align: left;
    border: none;
}

.bottom-border{
    width: 100%;
    height: 0px;
    border: 1px solid #F5F5F5;
}

.title{
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    color: #000000;
}

.desc{
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    color: #000000;
}

.time{
    text-align: right;
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 10px;
    line-height: 15px;
    color: rgba(0, 0, 0, 0.5);
}
</style>