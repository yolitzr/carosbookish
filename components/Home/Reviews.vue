<template>
    <div class="flex justify-center items-center w-full min-h-full pt-6">
        <div class="grid gap-1 sm:grid-cols-2 lg:grid-cols-4">
            <article v-for="(review, item) in limitBooks(0,4)" class="article flex flex-wrap flex-col w-11/12 max-w-sm mx-auto mt-20 mb-12 border-book-light rounded-md bg-book-light">
                <figure>
                    <img :src="staticUrl+review.image_main.path" class="w-full h-64 -mt-20 p-2 object-cover transition duration-500 ease-in-out hover:opacity-95"/>
                </figure>
                <div class="h-44 p-4 flex-shrink-0">
                    <nuxt-link :to="/book/+review.slug">
                        <h2 class="mb-1 text-xl font-bold text-center text-book-main hover:opacity-75">
                            {{review.title}}
                        </h2>
                    </nuxt-link>
                    <nuxt-link :to="/book/+review.slug">
                        <h3 class="mb-1 text-lg font-bold text-center text-book-second hover:opacity-75">
                            {{review.author.name}} {{review.author.surname}}
                        </h3>
                    </nuxt-link>
                    <h4 class="mt-1 text-base font-semibold text-center text-book-neutral">
                        {{review.editorial}}
                    </h4>
                    <div class="article-summary">
                        <p class="mt-6 text-base text-book-gray">{{review.summary}}</p>
                    </div>
                </div>
                <div class="relative flex justify-center items-center mt-16 p-4">
                    <div class="absolute top-4 transition-all duration-200 ease-in-out transform hover:translate-y-1 hover:scale-105">
                        <nuxt-link :to="/book/+review.slug" class="px-4 py-2 text-sm font-bold leading-3 tracking-wider uppercase text-book-white bg-book-second">
                            {{textButton}}
                        </nuxt-link>
                    </div>
                </div>
            </article>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Reviews',
    props: {
        reviews: Array,
        textButton: String,
    },

    data() {
        return {
            staticUrl: 'http://admin.carosbookish.com/',
        }
    },

    methods: {
        limitBooks: function(min, max) {
            return this.reviews.slice(min, max)
        }
    }
}
</script>

<style scoped>
.article figure img {
    height: 450px;
}

.article-summary p {
    max-height: 5.8rem;
    overflow: hidden;
    display: block;
}
</style>