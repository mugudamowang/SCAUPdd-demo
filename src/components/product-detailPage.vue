<template>
    <div>
        <van-icon @click="onBackward" name="arrow-left" />
        <main>
            <div class="banner-image">
                <van-swipe class="my-swipe">
                    <van-swipe-item
                        class="van-swipe-item"
                        v-for="(image, index) in images"
                        :key="index"
                    >
                        <img v-lazy="image" />
                    </van-swipe-item>
                </van-swipe>
            </div>
            <div class="info showboard">
                <p class="price">￥{{ goods.price }}</p>
                <p class="title">{{ goods.name }}</p>
                <div style="display: flex; margin-top: 0.1rem">
                    <van-tag
                        v-for="(tag, index) in goods.tags"
                        :key="index"
                        color="#7232dd"
                        >{{ tag }}</van-tag
                    >
                </div>
            </div>

            <div class="divider"></div>

            <div class="team">
                <div class="team-title">
                    <p class="title" style="left: 0">加入拼团</p>
                    <p class="title" style="right: 0">更多</p>
                </div>
                <div class="team-list">
                    <van-image
                        id="avatar"
                        round
                        fit="cover"
                        width="1rem"
                        height="1rem"
                        src="https://img.yzcdn.cn/vant/cat.jpeg"
                    />
                    <van-image
                        id="avatar"
                        round
                        fit="cover"
                        width="1rem"
                        height="1rem"
                        src="https://img.yzcdn.cn/vant/cat.jpeg"
                    />
                    <van-image
                        id="avatar"
                        round
                        fit="cover"
                        width="1rem"
                        height="1rem"
                        src="https://img.yzcdn.cn/vant/cat.jpeg"
                    />
                </div>
            </div>

            <div class="divider"></div>

            <div class="comment">
                <div class="team-title">
                    <p class="title" style="left: 0">评价</p>
                    <p class="title" style="right: 0">查看全部</p>
                </div>
                <div class="comment-list">
                    <p>五星好评五星好评五星好评五星好评</p>
                    <p>五星好评五星好评五星好评五星好评</p>
                    <p>五星好评五星好评五星好评五星好评</p>
                </div>
            </div>

            <div class="divider"></div>

            <div class="detail">
                <van-image
                    id="avatar"
                    fit="cover"
                    width="100%"
                    height="100%"
                    src="https://img.yzcdn.cn/vant/cat.jpeg"
                />
                <van-image
                    id="avatar"
                    fit="cover"
                    width="100%"
                    height="100%"
                    src="https://img.yzcdn.cn/vant/cat.jpeg"
                />
                <van-image
                    id="avatar"
                    fit="cover"
                    width="100%"
                    height="100%"
                    src="https://img.yzcdn.cn/vant/cat.jpeg"
                />
            </div>
        </main>
        <footer>
            <van-goods-action>
                <van-goods-action-icon icon="chat-o" text="客服" />
                <van-goods-action-icon icon="shop-o" text="店铺" />
                <van-goods-action-button
                    color="#49B259"
                    type="warning"
                    text="单独购买"
                />
                <van-goods-action-button
                    color="#69FF80"
                    type="danger"
                    text="发起拼团购买"
                />
            </van-goods-action>
        </footer>
    </div>
</template>
<script>
export default {
    name: "product-detailPage",
    data() {
        return {
            goods: {
                price: 200,
                name: "商品标题 goods.name",
                tags: ["包邮", "正品"],
            },
            images: [
                require("../assets/discount.png"),
                require("../assets/kill.png"),
                require("../assets/free.png"),
            ],
        };
    },
    methods: {
        onBackward() {
            this.$router.go(-1);
        },
    },
};
</script>
<style scoped>
.divider {
    height: 0.1rem;
    width: 100%;
    background: #b3b3b369;
}
.price {
    padding: 0.1rem;
    color: red;
    font-size: 0.5rem;
}
.team-title {
    display: flex;
    position: relative;
    width: 100%;
    justify-content: space-between;
}
.team-list {
    text-align: center;
}

.comment-list p {
    font-size: 0.3rem;
    padding: 0.5rem;
}

.detail {
    margin-bottom: 2rem;
}
.title {
    color: #000000;
    font-weight: bold;
    font-size: 0.3rem;
    margin: 0.1rem;
}

/* override Vant-ui */
.van-tag {
    margin: 0.1rem;
}
.van-icon {
    font-size: 0.6rem;
    background: #59595949;
    color: #eeeeee;
    border-radius: 50%;
    position: absolute;
    z-index: 10;
    margin: 0.2rem;
}
.my-swipe .van-swipe-item {
    height: 7rem;
}

.van-swipe-item > img {
    object-fit: cover;
    height: 100%;
    width: 100%;
}
</style>