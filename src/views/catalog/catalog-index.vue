<template>
    <div>
        <header>Catalog</header>
        <main></main>
        <footer>
            <footer_tabBar :active=2></footer_tabBar>
        </footer>
    </div>
</template>

<script>
import footer_tabBar from '../../components/footer-tabBar'
export default {
    name: "catalog-index",
    data() {
        return {
        };
    },
    components:{footer_tabBar}
};
</script>

<style scoped>
</style>