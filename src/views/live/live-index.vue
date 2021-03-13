<template>
    <div class="body">
        <header style="position: sticky; top: 0px">
            <van-icon
                v-show="storeList.length > 5"
                class="moreStore"
                name="arrow"
            />
            <van-icon
                v-show="storeList.length > 5"
                class="moreStore"
                style="left: 0"
                name="arrow-left"
            />
            <p style="font-size: 0.3rem; padding: 0.3rem">关注的直播</p>
            <div class="staredStore">
                <div
                    class="storeComponent"
                    v-for="index in storeList"
                    :key="index"
                >
                    <van-image
                        round
                        fit="cover"
                        width="0.8rem"
                        height="0.8rem"
                        src="https://img.yzcdn.cn/vant/cat.jpeg"
                    />
                    <p>商家{{ index }}</p>
                </div>
            </div>
        </header>
        <main class="mainView">
            <van-tabs color="green" v-model="active" swipeable sticky animated>
                <van-tab
                    v-for="index in 4"
                    :key="index"
                    :title="'选项 ' + index"
                >
                    <van-grid :border="false" :column-num="2">
                        <van-grid-item v-for="subindex in 8" :key="subindex">
                            <router-link to="/live-detail">
                                <van-image
                                    src="https://img.yzcdn.cn/vant/apple-1.jpg"
                                />{{ index }}.{{ subindex }}
                            </router-link>
                        </van-grid-item>
                    </van-grid>
                </van-tab>
            </van-tabs>
        </main>
        <footer>
            <footer_tabBar :active="1"></footer_tabBar>
        </footer>
    </div>
</template>

<script>
import footer_tabBar from "../../components/footer-tabBar";
export default {
    name: "live-index",
    data() {
        return {
            storeList: [1, 2, 3, 4, 5, 6, 7, 8, 9],
            active: "",
        };
    },
    components: { footer_tabBar },
};
</script>

<style scoped>
.body {
    background: #fafafa;
}
.moreStore {
    z-index: 10;
    position: absolute;
    font-size: 0.3rem;
    bottom: 40%;
    right: 0;
}
.staredStore {
    font-size: 0.2rem;
    text-align: center;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    height: 2rem;
    overflow: scroll;
}
.staredStore > * {
    padding: 0.25rem;
}
.mainView {
    height: 100vh;
    margin-top: 0.2rem;
}
</style>