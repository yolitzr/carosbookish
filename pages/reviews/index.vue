<template>
    <div>
        <Hero 
            titleHero="Caro's Bookish"
            subTitleHero="Compulsive Reader, Book Blogger and Reviewer"
            hero="hero-img"
            :image="imgHero"
            titleStyle="text-6xl sm:text-8xl lg:text-9xl text-center text-book-light"
            subtitleStyle="mt-4 sm:text-base text-center italic tracking-wide text-book-light"
        />
        <main class="container mx-auto p-6 lg:py-10 lg:px-14">
            <section class="py-16">
                <h3 class="mt-6 text-3xl text-center md:text-4xl font-bold uppercase tracking-wider text-book-main">
                    {{titleReview}}
                </h3>
                <div class="px-2 py-4 mt-6 lg:mt-12">
                    <div class="bg-book-light flex items-center rounded-full">
                        <input v-model="search" @keyup.enter="searchData" class="bg-book-light rounded-l-full w-full py-2 px-6 text-book-dark leading-tight focus:outline-none" id="search" type="text" placeholder="Search">
                        <div class="p-2">
                            <button @click="searchData" class="bg-book-main text-book-white rounded-full p-2 hover:bg-book-second focus:outline-none w-10 h-10 flex items-center justify-center">
                                <i class="fas fa-search"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <loader-cover :count="8" v-if="loading"/>
                <div v-else class="grid md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-4">
                    <div v-for="bookItem in listReviews">
                        <div class="content mt-8 md:mt-4 transition-all duration-200 transform hover:translate-y-1 hover:shadow-xl hover:scale-95">
                            <div class="content-overlay"></div>
                            <div class="p-1">
                                <img :src="staticUrl+bookItem.image_main.path"  class="w-full height-cover"/>
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
                <!-- <div class="py-2 flex justify-center">
					<nav class="block">
						<ul class="flex pl-0 rounded list-none flex-wrap">
							<li>
								<span @click="onChangePage( pageCurrent -= 1)" class="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-book-second bg-book-white text-book-second">
								<i class="fas fa-chevron-left -ml-px"></i>
								</span>
							</li>
							<li v-for="pageOption in [5, 10, 15, 20, 25]" :key="pageOption">
								<span class="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-book-second bg-book-second text-book-white">
									{{pageCurrent}}
								</span>
							</li>
							<li>
								<span @click="onChangePage( pageCurrent += 10)" class="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-book-second bg-book-white text-book-second">
								<i class="fas fa-chevron-right -mr-px"></i>
								</span>
							</li>
						</ul>
					</nav>
				</div> -->
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
            titleWebsite: `Caro's Bookish`,
            listReviews: [],
            search: '',
            staticUrl: 'http://admin.carosbookish.com/',
            textButton: 'Read More',
            loading: false,
            imgHero: require('~/assets/img/hero.jpg'),
        }
    },

    created() {
        this.bookReviews();
	},

	methods: {
		bookReviews() {			
			this.loading = true;

			const params = {
				'page': this.pageCurrent,
			}

			const body = {
                length: 8,
				"order": {
					"field": "book.id",
					"dir": "desc"
				},
				"search": [
					{
						"field":["review.id"], 
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

        searchBooks() {
            this.loading = true;

            const params = {
				'page': this.pageCurrent,
			}

            const body = {
				"search": [
                    {
                        "field": ["book.title"],
						"operator":"=", 
						"value": this.search,
                    }
				],
			}

            api.bookReviews(params, body)
            .then(res => res.results)
            .then(res => {
                this.listReviews = res;
                this.loading = false;
            })
			.catch(error => {
				console.error(error)
				this.loading = false;
			});
        },

        searchData() {
            this.pageCurrent = 1
            this.searchBooks();
            
            if (this.search == '') {
                this.bookReviews()
            }
        },

        trackers() {
            this.$ga.page({
                page: `${this.$route}`,
                title: `${this.titleWebsite} - ${this.titleReview}`,
                location: window.location.href
            })
        },

		onChangePage(pageCurrent){	
			this.pageCurrent = pageCurrent <= 0 || pageCurrent > this.pagesTotals ? this.pageCurrent : pageCurrent;
			this.bookReviews()
		},
	},

    head() {
        return {
            title: `${this.titleWebsite} - ${this.tittleReview}`,
            meta: [
                {
                    hid: 'description',
                    name: `${this.titleWebsite} - ${this.tittleAbout}`,
                }
            ]
        }
    },
    
}
</script>

