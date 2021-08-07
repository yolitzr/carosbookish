<template>
    <header>
        <div :class="hero" :style="bgHero">
            <div class="flex md:flex-col justify-center items-center mx-auto w-full p-4 z-10">
                <div class="flex flex-col justify-center w-full h-auto py-4 px-5 mt-16 lg:px-40">
                    <h2 :class="titleStyle">{{titleHero}}</h2>
                    <h4 :class="subtitleStyle">{{subTitleHero}}</h4>
                    <h3 :class="authorStyle">{{authorFullName}}</h3>
                    <h4 class="mt-2 text-xl text-center text-book-light">{{editorial}}</h4>
                    <span class="mt-4 block text-center italic text-book-light">{{summary}}</span>
                </div>
            </div>
        </div>
    </header>
</template>
<script>
export default {
    name: 'Hero',
    props: {
        titleHero: String,
        subTitleHero: String,
        authorFullName: String,
        editorial: String,
        summary: String,
        image: String,
        hero: String,
        titleStyle: String,
        subtitleStyle: String,
        authorStyle: String,
        editorialStyle: String,
        summaryStyle: String,
    },

    computed: {
        bgHero() {
            return {backgroundImage: `url(${this.image})`}
        },
    }
}
</script>