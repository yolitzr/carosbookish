<template>
    <div>
        <Hero 
            titleHero="Caro's Bookish"
            subTitleHero="Compulsive Reader, Book Blogger and Reviewer"
        />
        <main class="container mx-auto p-6">
            <section class="py-16">
                <h3 class="mt-6 text-3xl text-center md:text-4xl font-bold uppercase tracking-wider text-book-main">
                    {{titleReview}}
                </h3>
                <div class="flex flex-col md:flex-row md:flex-shrink justify-center items-center mt-10">
                    <input type="text" v-model="search" placeholder="search review" class="mt-4 md:mb-6 md:mt-0 p-4 w-full border-b-2 border-book-second text-sm uppercase tracking-wider text-book-main bg-book-lighter focus:outline-none"/>
                </div>
                <loader-cover :count="8" v-if="loading"/>
                <div class="grid md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-4">
                    <div v-for="bookItem in filteredItems" :key="bookItem.id">
                        <div class="content mt-8 md:mt-4 transition-all duration-200 transform hover:translate-y-1 hover:shadow-xl hover:scale-95">
                            <div class="content-overlay"></div>
                            <div class="p-1">
                                <figure>
                                    <img :src="staticUrl+bookItem.image_main.path"  class="w-full h-full">
                                </figure>
                                <div class="content-details fadeIn-top">
                                    <h2 class="text-2xl font-bold leading-2 uppercase">
                                        <nuxt-link :to="/book/+bookItem.slug" class="text-book-white">
                                            {{bookItem.title}}
                                        </nuxt-link>
                                    </h2>
                                    <div class="border-0 text-center inline-block cursor-pointer px-3 py-1 rounded bg-book-second mt-4">
                                        <nuxt-link :to="/book/+bookItem.slug" class="text-basse tracking-wide uppercase text-book-white">
                                            {{textButton}}
                                        </nuxt-link> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </div>    
</template>
<script>
import api from '~/assets/js/api'
import Hero from '~/components/UI/Hero'
import LoaderCover from '~/components/Skeleton/LoaderCover'

export default {
    name: 'Reviews',
    components: {
        Hero,
        LoaderCover,
    },

    data() {
        return {
            titleReview: 'Reviews',
            listReviews: [],
            search: '',
            staticUrl: 'http://admin.carosbookish.com/',
            textButton: 'Read More'
        }
    },

    	created() {
		this.reviewBooks();
	},

	methods: {
		reviewBooks() {			
			this.loading = false;

			const params = {
				'page': this.pageCurrent,
				'search[value]': this.search
			}

			const body = {
                length: 8,
				"order": {
					"field": "book.id",
					"dir": "desc"
				},
				"search": [
					{
						"fields":["review.id"], 
						"operator":"isNotNull", 
						"value":"null"
					},
				],
			}
			
			api.bookReviews(params, body)
            .then(res => res.results)
            .then(res => {
                this.listReviews = res;
                this.loading = false;
            })
			// .then((res) => {
			// 	this.listReviews = res.results;
			// 	this.pagesTotals = res.pages_totals;
			// })
			.catch(error => {
				console.error(error)
				this.loading = false;
			})
		},

		// onChangePage(pageCurrent){	
		// 	this.pageCurrent = pageCurrent <= 0 || pageCurrent > this.pagesTotals ? this.pageCurrent : pageCurrent;
		// 	this.reviewBooks()
		// },
        // {
//             return this.listReviews.filter(bookItem => {
//                 return bookItem.title.toLowerCase().includes(this.search.toLowerCase())
//             })
//         }
	},

    computed: {
        filteredItems() {
            return this.listReviews.filter(bookItem => {
               return bookItem.title.toLowerCase().includes(this.search.toLowerCase())
            })
        }
    },
}
</script>

