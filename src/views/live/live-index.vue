<template>
    <div>
        <header>Live</header>
        <main></main>
        <footer>
            <footer_tabBar :active=1></footer_tabBar>
        </footer>
    </div>
</template>

<script>
import footer_tabBar from '../../components/footer-tabBar'
export default {
    name: "live-index",
    data() {
        return {
        };
    },
    components:{footer_tabBar}
};
</script>

<style scoped>
</style>