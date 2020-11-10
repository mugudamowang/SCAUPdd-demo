<template>
    <div>
        <header class="headerNav">
            <img class="logo" src="../../assets/logo.png" />
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
            <div class="advertise" >
                <van-grid :column-num="3" icon-size="10px">
                    <van-grid-item icon="smile" text="限时秒杀" />
                    <van-grid-item icon="service" text="限量抢购" />
                    <van-grid-item icon="friends" text="砍价聚惠" />
                </van-grid>
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

        <!--底部导航 -->
        <footer_tabBar :active="0"></footer_tabBar>
    </div>
</template>

<script>
import footer_tabBar from "../../components/footer-tabBar";
export default {
    name: "home-index",
    data() {
        return {
            value: "",
            images: [
                require("../../assets/discount.png"),
                require("../../assets/kill.png"),
                require("../../assets/free.png"),
            ],
            productList: [{}, {}, {}, {}, {}, {}],
        };
    },
    components: { footer_tabBar },
    methods: {
        goSearch() {
            console.log("点击搜索框");
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.advertise{
}
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
    background: #FFFFFF;
    z-index: 10;
    position: sticky;
    top: 0;
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
    .my-swipe {
        height: 450px;
    }
}
</style>
