<template>
    <div class="grid sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
        <div v-for="(book, item) in limitBooks(0,4)">
            <div class="content mt-8 transition-all duration-200 transform hover:translate-y-1 hover:shadow-xl hover:scale-95">
                <div class="content-overlay"></div>
                <div class="p-1">
                    <img :src="staticUrl+book.image_main.path" class="w-full"/>
                    <div class="content-details fadeIn-top">
                        <h2 class="text-xl font-bold leading-2 uppercase">
                            <nuxt-link :to="/book/+book.slug" class="text-book-white">
                                {{book.title}}
                            </nuxt-link>
                        </h2>
                        <div class="border-0 text-center inline-block cursor-pointer px-3 py-1 rounded bg-book-second mt-4">
                            <nuxt-link :to="/book/+book.slug" class="text-basse tracking-wide uppercase text-book-white">
                                {{textButton}}
                            </nuxt-link> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Books',
    props: {
        book: Array,
        textButton: String,
    },

    data() {
        return {
            staticUrl: 'http://admin.carosbookish.com/',
        }
    },

    methods: {
        limitBooks: function(min, max) {
            return this.book.slice(min, max)
        }
    }
}
</script>