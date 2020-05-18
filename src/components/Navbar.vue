<template>
    <div class="navbar">
        <div class="navbar__title"><h2>Site work wiht node-server and sql</h2></div>
        <nav ref="nav" class="navbar__nav">
            <router-link to="/">Home</router-link>
            <router-link to="/users">Users</router-link>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style lang="scss" scoped>

.navbar {
    width: 100%;
    height: 100px;
    background-color: rgb(216, 230, 211);
    position: fixed;
    top: 0;
    left: 0;

    &__title {
        height: 50px;
        line-height: 50px;

        h2 {
            margin: 0;
            padding: 0;
        }
    }

    &__nav {
        height: 50px;

        a {
            text-decoration: none;
            font-family: sans-serif;
            font-size: 18pt;
            margin: 0 10px;
            color: rgb(100, 100, 100);
            transition: color .2s;

            &:hover {
                color: rgb(80, 165, 123);
            }
        }
        .router-link-exact-active {
            color: rgb(80, 165, 123);
        }
    }
}

</style>