<template>
    <div class="sm:grid sm:grid-cols-3 sm:gap-1">
        <div v-for="book in limitBooks(0, 3)" class="relative my-5 w-11/12 mx-auto md:my-0 blur-featured transition-all duration-200 transform hover:translate-y-1 hover:shadow-xl hover:scale-105">
            <img :src="staticUrl+book.image_main.path" class="w-full h-44 md:h-64 lg:h-80 object-cover" />
            <div class="absolute bottom-0 ml-6 mb-6 z-10">
                <h2 class="text-lg lg:text-3xl font-bold leading-6 tracking-wider text-book-white">{{book.title}}</h2>
                <h3 class="text-lg lg:text-2xl font-bold leading-6 tracking-wider text-book-white mt-1">{{book.author.name}} {{book.author.surname}}</h3>
                <nuxt-link :to="/book/+book.slug" class="inline-block mt-2 md:mt-4 py-2 px-3 text-xs md:text-sm uppercase tracking-wider text-book-white bg-book-second hover:bg-book-neutral hover:text-book-light">
                    {{textButton}}
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'featured-reviews',
    props: {
        featured: Array,
        textButton: String,
    },

    data() {
        return {
            staticUrl: 'http://admin.carosbookish.com/',
        }
    },

    methods: {
        limitBooks: function(min, max) {
            return this.featured.slice(min, max);
        },
    },
}
</script>
<style scoped>
.blur-featured::after {
    content: '';
    position: absolute;
    top: 0; 
    width: 100%;
    height: 100%;
    background-image: linear-gradient(360deg, #86425f 0%, #352F4496 100%);
}
</style>