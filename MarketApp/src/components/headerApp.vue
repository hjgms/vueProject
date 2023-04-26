<script setup>
//imports
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <main>
        <header>
            <div id="left-header">
                <img src="../assets/logo.svg" alt="logo">
                <h2>Logo</h2>
            </div>
            <div id="right-header">
                <button v-if="false" id="open-menu">
                    <!--icon-->
                </button>
                <nav>
                    <button v-if="false" id="close-menu">
                        <!--icon-->
                    </button>
                    <ul>
                        <li><RouterLink to="/">Home</RouterLink></li>
                        <li><RouterLink to="/">Products</RouterLink></li>
                        <li><RouterLink to="/">More</RouterLink></li>
                    </ul>
                </nav>
            </div>
        </header>
        <RouterView/>
    </main>
</template>

<script>

</script>

<style scoped>
*{
    padding: 0px;
    margin: 0px;
}

header{
    display: flex;
    justify-content: space-between;
    height: 60px;
    width: 100%;
    padding: 10px;
}

#left-header{
    margin-left: 20px;
}
#right-header{
    margin-right: 20px;
}
</style>