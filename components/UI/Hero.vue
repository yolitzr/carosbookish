<template>
    <header>
        <div class="flex bg-cover bg-center bg-no-repeat hero-img" :style="{ backgroundImage: `url(${imgHero})` }">
            <div class="flex items-center relative mx-auto p-4 z-10">
                <div class="flex flex-col justify-center py-4 px-5 mt-10 mb-5">
                    <h2 class="text-6xl sm:text-8xl lg:text-9xl text-center text-book-light">{{titleHero}}</h2>
                    <h4 class="mt-4 text-sm sm:text-base text-center italic tracking-wide text-book-light">{{subTitleHero}}</h4>
                </div>
            </div>
        </div>
    </header>
</template>
<script>
export default {
    name: 'Hero',
    data() {
        return {
            imgHero: require('~/assets/img/hero.jpg'),
        }
    },

    props: {
        titleHero: String,
        subTitleHero: String,
    }
}
</script>
<style scoped>
.hero-img h2 {
    font-family: 'Signatria'
}

.hero-img p {
    font-family: 'Redressed', cursive;
}
</style>