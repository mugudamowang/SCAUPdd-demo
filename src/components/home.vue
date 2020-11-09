<template>
    <div>
        <header class="headerNav">
            <img class="logo" src="../assets/logo.png" />
            <div class="centerFix">
                <van-search
                    style="height: 100%"
                    input-align="center"
                    v-model="value"
                    @click="goSearch"
                    disabled
                    placeholder="商品搜索"
                />
            </div>
        </header>
        <main>
            <p class="desText">聚优惠</p>
            <div class="swiper">
                <van-swipe height="180" class="my-swipe" :autoplay="3000">
                    <van-swipe-item
                        class="van-swipe-item"
                        v-for="(image, index) in images"
                        :key="index"
                    >
                        <img width="100%" v-lazy="image" />
                    </van-swipe-item>
                </van-swipe>
            </div>
            <p class="desText">爆款推荐</p>
            <div
                v-for="(info, index) in productList"
                :key="index"
                class="productList"
            >
                <van-card
                    num="2"
                    tag="标签"
                    price="2.00"
                    desc="描述信息"
                    title="商品标题"
                    thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
                    origin-price="10.00"
                />
            </div>
        </main>
        <footer class="footer">
            <van-tabbar v-model="active">
                <van-tabbar-item icon="home-o">首页</van-tabbar-item>
                <van-tabbar-item icon="video-o">直播</van-tabbar-item>
                <van-tabbar-item icon="more-o">分类</van-tabbar-item>
                <van-tabbar-item badge="5" icon="comment-o"
                    >聊天</van-tabbar-item
                >
                <van-tabbar-item dot icon="manager-o">我的</van-tabbar-item>
            </van-tabbar>
        </footer>
    </div>
</template>

<script>
export default {
    name: "home",
    data() {
        return {
            value: "",
            images: [
                require("../assets/discount.png"),
                require("../assets/kill.png"),
                require("../assets/free.png"),
            ],
            productList: [{}, {}, {}],
            active: "",
        };
    },
    methods: {
        goSearch() {
            console.log("点击搜索框");
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.desText {
    font-size: 0.2rem;
    padding: 0.2rem 0 0 0.1rem;
    color: grey;
    background-color: #fafafa;
}
.productList * {
    margin: 0 0 0.1rem 0;
    border-radius: 0.1rem;
}
.headerNav {
    position: sticky;
    display: flex;
    align-self: flex-start;
}
.logo {
    width: 0.8rem;
    height: 0.8rem;
    display: inline-block;
    margin: 0.1rem 0 0 0.1rem;
}
.centerFix {
    flex-grow: 1;
}
.swiper {
    margin: 0.1rem;
}

.my-swipe .van-swipe-item {
    color: #000000;
    font-size: 0.1rem;
    line-height: 0.2rem;
    text-align: center;
}
@media screen and (min-width: 600px) {
    .my-swipe{
        height: 450px;
    }
}
</style>
