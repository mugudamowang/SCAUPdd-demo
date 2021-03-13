<template>
    <div>
        <!-- 头部导航 -->
        <header_titleBar title="登录"></header_titleBar>
        <main>
            <div class="logo"><img :src="logo" alt="logo" /></div>

            <!-- 注册表单 -->
            <div v-show="!ONLOGIN" class="register-form">
                <van-form @submit="onRegister">
                    <van-field
                        v-model="emailaddress"
                        name="邮件地址"
                        label="邮件地址"
                        placeholder="邮件地址"
                        :rules="[{ required: true, message: '请填写邮件地址' }]"
                    />
                    <van-field
                        v-model="password"
                        type="password"
                        name="密码"
                        label="密码"
                        placeholder="设置密码"
                        :rules="[{ required: true, message: '请填写密码' }]"
                    />
                    <van-field
                        v-model="validatecode"
                        name="验证码"
                        label="验证码"
                        placeholder="邮件验证码"
                        :rules="[
                            { required: true, message: '请填写邮件验证码' },
                        ]"
                    />

                    <div style="margin: 0.2rem">
                        <van-button
                            :disabled="!isable"
                            @click="getValidateCode"
                            type="primary"
                            round
                            block
                            native-type="button"
                        >
                            获取验证码
                        </van-button>
                        <van-button
                            :disabled="!isable"
                            type="primary"
                            round
                            block
                            native-type="submit"
                        >
                            注册
                        </van-button>
                    </div>
                </van-form>
            </div>

            <!-- 登录表单 -->
            <div v-show="ONLOGIN" class="login-form">
                <van-form @submit="onLogin">
                    <van-field
                        v-model="username"
                        name="用户名"
                        label="用户名"
                        placeholder="用户名"
                        :rules="[{ required: true, message: '请填写用户名' }]"
                    />
                    <van-field
                        v-model="password"
                        type="password"
                        name="密码"
                        label="密码"
                        placeholder="密码"
                        :rules="[{ required: true, message: '请填写密码' }]"
                    />
                    <div style="margin: 0.2rem">
                        <van-button
                            type="primary"
                            round
                            block
                            native-type="submit"
                        >
                            登录
                        </van-button>
                        <van-button
                            v-show="ONLOGIN"
                            @click="getRegister"
                            type="primary"
                            plain
                            block
                            native-type="button"
                            >注册</van-button
                        >
                    </div>
                </van-form>
            </div>
        </main>
    </div>
</template>

<script>
import axios from "axios";
import logo from "../../assets/logo.png";
import header_titleBar from "../../components/header-titileBar";
export default {
    name: "login-index",
    data() {
        return {
            logo: logo,
            username: "",
            emailaddress: "",
            validatecode: "",
            password: "",
            ONLOGIN: true,
            isable: true,
        };
    },
    methods: {
        onRegister(values) {
            this.asyncValidator("value");
            alert("submit");
        },
        onLogin() {
            console.log("login...");
            axios
                .get("http://localhost:3000/api2", {
                    params: {
                        username: this.username,
                        password: this.password,
                    },
                })
                .then((res) => {
                    //跳转my
                    if (res.data) {
                        this.$router.push({ path: "/my" });
                        localStorage.setItem('userOnlogin', this.username);
                    }
                    else{alert("请注册账号")}
                });
        },
        getRegister() {
            this.ONLOGIN = false;
        },
        getValidateCode() {
            alert("send");
        },
        asyncValidator(val) {
            return new Promise((resolve) => {
                this.$toast.loading("验证中...");
                this.isable = false;
                setTimeout(() => {
                    this.$toast.clear();
                    resolve(/\d{6}/.test(val));
                    this.isable = true;
                }, 2000);
            });
        },
    },
    components: { header_titleBar },
};
</script>
<style scoped>
main {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.logo {
    margin: 1rem;
    height: 2rem;
    width: 3rem;
    border: #000000 solid 0.1rem;
}
.logo img {
    object-fit: cover;
    width: 100%;
    height: 100%;
}
.van-form .van-field {
    height: 1.2rem;
}
.van-button {
    margin: 0.1rem;
    width: 5rem;
}
</style>