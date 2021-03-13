<template>
    <div>
        <header>
            <van-image
                id="avatar"
                round
                fit="cover"
                width="2rem"
                height="2rem"
                src="https://img.yzcdn.cn/vant/cat.jpeg"
            />
            <label for="avatar">
                {{ username }}<br />
                <van-icon name="edit" />
            </label>
            <van-icon class="setting-van-icon" name="setting-o" />
        </header>

        <main>
            <div class="myOrderlist">
                <div
                    style="position: relative; padding: 0 0.2rem 0.2rem 0.2rem"
                >
                    <span class="moduleTitle">我的订单</span>
                    <span class="moduleTitle right">查看全部 ></span>
                </div>
                <van-grid :border="false" clickable :column-num="5">
                    <van-grid-item icon="home-o" text="待付款" to="/" />
                    <van-grid-item icon="home-o" text="待分享" to="/" />
                    <van-grid-item icon="home-o" text="待发货" to="/" />
                    <van-grid-item icon="home-o" text="待收货" to="/" />
                    <van-grid-item icon="home-o" text="待评价" to="/" />
                </van-grid>
            </div>

            <p class="divider"></p>
            <div class="functionModule">
                <van-grid clickable :column-num="2" square>
                    <van-grid-item icon="home-o" text="商品收藏" to="/" />
                    <van-grid-item icon="home-o" text="历史浏览" to="/" />
                    <van-grid-item icon="home-o" text="退款售后" to="/" />
                    <van-grid-item icon="home-o" text="收货地址" to="/" />
                </van-grid>
            </div>
            <p class="divider"></p>
        </main>

        <footer>
            <footer_tabBar :active="4"></footer_tabBar>
        </footer>
    </div>
</template>

<script>
import footer_tabBar from "../../components/footer-tabBar";
export default {
    name: "my-index",
    data() {
        return {
            username: "",
        };
    },
    mounted(){
            this.username = localStorage.getItem("userOnlogin")
    },
    components: { footer_tabBar },
};
</script>

<style scoped>
.myOrderlist {
    padding: 0.3rem 0;
}
.divider {
    background-color: #a1a1a1;
    width: 100%;
    height: 0.1rem;
}
#avatar {
    padding: 0.1rem;
    margin: 0.15rem;
    background-color: #ffffff;
    box-shadow: 0 0 0.1rem green ;
}
header {
    display: flex;
    justify-content: baseline;
    align-items: center;
    background-color: #a1a1a1;
    background-image: url("../../assets/logo.png");
    background-size: cover;
    background-position: center;
}
header:not(#avatar) {
    font-family: Helvetica;
    color: #FFFFFF;
    font-size: 0.4rem;
    text-shadow: 1px 1px 2px green;
}

.setting-van-icon {
    position: absolute;
    right: 0.5rem;
    font-size: 0.6rem;
}
.moduleTitle {
    z-index: 10;
    position: absolute;
    font-size: 0.3rem;
    color: #000000;
    font-weight: bold;
}
.right {
    font-size: 0.2rem;
    color: grey;
    right: 0.1rem;
}
</style>