<template>
    <div>
        <div class="search-bar">
            <van-icon @click="onBackward" id="goback" name="arrow-left" />
            <van-search
                v-model="value"
                show-action
                placeholder="请输入搜索关键词"
                @search="onSearch"
                @clear="onClear"
            >
                <template #action>
                    <div @click="onSearch">搜索</div>
                </template>
            </van-search>
        </div>
        <van-dropdown-menu v-show="SEARCHED">
            <van-dropdown-item v-model="value1" :options="option1" />
            <van-dropdown-item v-model="value2" :options="option2" />
        </van-dropdown-menu>
        <div
            v-for="(item, index) in productList"
            :key="index"
            class="productList"
        >
            <router-link to="/product-detail">
                <van-card
                    :tag="item.tags[0]"
                    :price="item.price"
                    :desc="item.des"
                    :title="item.name"
                    thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
                    :origin-price="item.originprice"
                />
            </router-link>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "search",
    data() {
        return {
            value: "",
            SEARCHED: false,
            productList: [],
            value1: 0,
            value2: "a",
            option1: [
                { text: "全部商品", value: 0 },
                { text: "新款商品", value: 1 },
                { text: "活动商品", value: 2 },
            ],
            option2: [
                { text: "默认排序", value: "a" },
                { text: "好评排序", value: "b" },
                { text: "销量排序", value: "c" },
            ],
        };
    },
    methods: {
        onSearch() {
            if (this.SEARCHED == false) this.SEARCHED = true;
            axios
                .get("http://localhost:3000/api1", {
                    params: {
                        pattern: this.value, //传参
                    },
                })
                .then((res) => {
                    // 直接修改索引项vue无法检测到
                    // for (let index in res.data) {
                    //     this.productList[index] = res.data[index];
                    // }
                    console.log(res.data[0].name);
                    if (res.data[0].name == "还没有输入~") {
                        alert("还没有输入~");
                    }else if(res.data[0].name == "没有该商品信息~") {
                        alert("没有该商品信息~");
                    }
                    else {
                        this.productList = res.data;
                    }

                    console.log(this.productList);
                });
        },
        onClear() {
            this.value = "";
        },
        onBackward() {
            //编程式导航
            this.$router.go(-1);
        },
    },
};
</script>

<style scoped>
.search-bar {
    display: flex;
    align-items: center;
}
.search-bar > #goback {
    font-size: 0.5rem;
}
.search-bar .van-search {
    flex: 2;
    padding-left: 0;
}
.productList * {
    margin: 0 0 0.1rem 0;
    border-radius: 0.1rem;
}
</style>