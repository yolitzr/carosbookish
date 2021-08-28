<template>
    <div>
        <Hero 
            titleHero="Caro's Bookish"
            subTitleHero="Compulsive Reader, Book Blogger and Reviewer"
            :image="imgHero"
            hero="hero-img"
            titleStyle="text-6xl sm:text-8xl lg:text-9xl text-center text-book-light"
            subtitleStyle="mt-4 sm:text-base text-center italic tracking-wide text-book-light"
        />
        <main class="container mx-auto p-6 lg:py-10 lg:px-14">
            <section class="py-12">
                <h3 class="mt-6 text-3xl text-center md:text-4xl font-bold uppercase tracking-wider text-book-main">
                    {{titleReleases}}
                </h3>
            </section>
             <loader-cover :count="8" v-if="loading"/>
             <div v-else class="grid md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-4">
                 <div v-for="bookItem in listReleases">
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
                                    <div class="mt-2">
                                        <span class="mr-2 ml-3 font-semibold text-book-light">Publication Date:</span>
                                        <span class="font-semibold text-book-light">{{$moment(bookItem  .published.date).format("Do MMM YYYY")}}</span>
                                    </div>
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
        </main>
    </div>
</template>
<script>
import api from '~/assets/js/api'
import Hero from '~/components/UI/Hero'
import LoaderCover from '~/components/Skeleton/LoaderCover'

export default {
    name: 'Releases',
    components: {
        Hero,
        LoaderCover,
    },

    data() {
        return {
            titleReleases: 'The Most-Anticipated Upcoming Book Releases 2021',
            titleWebsite: `Caro's Bookish`,
            listReleases: [],
            staticUrl: 'http://admin.carosbookish.com/',
            textButton: 'Read More',
            loading: false,
            imgHero: require('~/assets/img/hero.jpg'),
        }
    },

    created() {
        this.bookReleases();
    },

    methods: {
        bookReleases() {
            this.loading = true;
            const body = {
				"order": {
					"field": "book.id",
					"dir": "desc"
				},
				"search": [
					{
                        "field":["book.published"], 
                        "operator":">=", 
                        "value":"2021-01-01",
                    }
				],
			}
            
            api.booksInfo(body)
            .then((res) => {
                this.listReleases = res.results;
                this.loading = false;
            })
            .catch(error => {
				console.error(error)
				this.loading = false;
			})
        }
    },

    trackers() {
        this.$ga.page({
            page: `${this.$route}`,
            title: `${this.titleWebsite} - ${this.titleReleases}`,
            location: window.location.href
        })
    },

    head() {
        return {
            title: `${this.titleWebsite} - ${this.tittleReleases}`,
            meta: [
                {
                    hid: 'description',
                    name: `${this.titleWebsite} - ${this.tittleReleases}`,
                }
            ]
        }
    },

}
</script>