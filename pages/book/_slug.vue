<template>
    <div>
        <div class="flex relative h-96 bg-center bg-no-repeat bg-cover blur" :style="{ backgroundImage: `url(${staticUrl+bookDetails.image_main.path})` }">
            <div class="flex md:flex-col justify-center items-center mx-auto w-full p-4 z-10">
                <div class="flex flex-col justify-center w-full h-auto py-4 px-5 mt-16 lg:px-40">
                    <h2 class="text-3xl font-bold text-center text-book-light lg:text-4xl">{{bookDetails.title}}</h2>
                    <h3 class="mt-4 text-2xl font-semibold text-center text-book-light lg:text-3xl">{{bookDetails.author.name}} {{bookDetails.author.surname}}</h3>
                    <h4 class="mt-2 text-xl text-center text-book-light">{{bookDetails.editorial}}</h4>
                    <span class="mt-4 block text-center italic text-book-light">{{bookDetails.summary}}</span>
                </div>
            </div>
        </div>
        <main class="container mx-auto px-6 py-10 lg:px-16">
            <section>
                <section class="grid lg:grid-cols-12 lg:mt-12">
                    <!-- Synopsis and Review -->
                    <div class="height-custom flex flex-col lg:col-span-8 shadow-lg">
                        <div class="p-6 md:py-6 md:px-10">
                            <article class="rounded-b-lg">
                                <Tabs>
                                    <Tab name="Sinopsys" selected="true">
                                        <p class="text-base" v-html="bookDetails.synopsis"></p>
                                    </Tab>
                                    <Tab name="My Review" v-if="bookDetails.review">
                                        <p class="text-base" v-html="bookDetails.review.description"></p>
                                    </Tab>
                                </Tabs>
                            </article>
                            <div class="mt-8">
                                <img :src="separadorImg" class="w-full">
                            </div>
                        </div>
                        <!-- About Author -->
                        <aside class="info-author mt-4 py-8 px-5 rounded-xl">
                            <div class="w-full">
                                <h3 class="text-5xl text-center leading-6 text-book-main sm:mt-8 sm:text-8xl">About the Author</h3>
                            </div>
                            <div class="flex flex-col justify-center items-center mt-10 py-8 bg-book-lighter sm:flex-row sm:py-8 px-4">
                                <figure class="mt-4">
                                    <img :src="staticUrl+bookDetails.author.image.path" class="w-52 rounded-full sm:w-full sm:rounded-none">
                                </figure>
                                <div class="mt-8 w-full sm:ml-5">
                                    <h3 class="text-5xl text-center leading-6 tracking-wide text-book-main sm:text-6xl">{{bookDetails.author.name}} {{bookDetails.author.surname}}</h3>
                                    <p class="py-6 px-2 mb-0" v-html="bookDetails.author.description"></p>
                                    <div class="flex justify-center items-center">
                                        <a v-for="iconSocial in bookDetails.author.social_networks" :key="iconSocial.id" :href="iconSocial.url" class="w-10 h-10 mr-3 rounded-full bg-book-main text-book-white">
                                            <i :class="iconSocial.icon" class="flex justify-center mt-1 text-lg"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                    <!-- Cover and Info -->
                    <div class="height-custom w-full mt-10 p-6 rounded-xl bg-book-light sm:flex sm:justify-center sm:mt-16 sm:rounded-xl lg:flex-col lg:justify-start lg:col-span-4 lg:ml-5 lg:mt-0 lg:bg-none">
                        <div class="sm:flex-col sm:justify-center">
                            <figure>
                                <img :src="staticUrl+bookDetails.image_main.path" :alt="bookDetails.title" class="w-full sm:w-72 lg:w-full">
                            </figure>
                            <div v-if="bookDetails.review" class="flex justify-around items-center mt-3 px-12">
                                <span v-for="star in bookDetails.review.stars" class="fa-2x text-book-main">
                                    <i  class="fas fa-star"></i>
                                </span>
                            </div>
                        </div>
                        <div class="w-full mt-10 sm:mt-0 sm:flex sm:flex-col sm:justify-center sm:ml-5 lg:ml-0 lg:py-8 lg:px-7 lg:rounded-md lg:bg-book-light">
                            <div class="mt-2 sm:mt-0">
                                <div class="flex items-center">
                                    <i class="fas fa-barcode"></i>
                                    <span class="font-bold mr-2 ml-3">ISBN:</span>
                                    <span class="text-base">{{bookDetails.isbn}}</span>
                                </div>
                                <div class="flex items-center mt-1">
                                    <i class="far fa-building"></i>
                                    <span class="font-bold mr-2 ml-3">Editorial:</span>
                                    <span class="text-base">{{bookDetails.editorial}}</span>
                                </div>
                                <div class="flex items-center mt-1">
                                    <i class="fas fa-layer-group"></i>
                                    <span class="font-bold mr-2 ml-3">Serie:</span>
                                    <span class="text-base">{{bookDetails.serie}}</span>
                                </div>
                                <div class="flex items-center mt-1">
                                    <i class="far fa-calendar-alt"></i>
                                    <span class="font-bold mr-2 ml-3">Date:</span>
                                    <span class="text-base">{{$moment(bookDetails.published.date).format("Do MMM YYYY")}}
                                        
                                    </span>
                                </div>
                                <div class="flex items-center mt-1">
                                    <i class="far fa-file"></i>
                                    <span class="font-bold mr-2 ml-3">N. pages:</span>
                                    <span class="text-base">{{bookDetails.pages}}</span>
                                </div>
                            </div>
                            <div class="mt-8">
                                <h4 class="text-2xl font-bold text-book-dark">Find this book on:</h4>
                                <div class="flex items-center">
                                    <div v-for="(purchase, index) in bookDetails.purchases" :key="index">
                                        <a :href="purchase.url" class="flex items-center px-3 py-3 mt-4 mr-2 bg-book-main text-book-white rounded-full text-sm tracking-wide hover:opacity-75 uppercase" target="_blank">
                                            <i :class="purchase.icon" class="fa-lg"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

               <!-- Share and Comment -->
                <section class="relative">
                    
                    <!-- Share  -->
                    <div class="mt-12">
                        <h4 class="text-center text-book-main text-2xl font-bold uppercase">Share this book</h4>
                        <div class="flex justify-center items-center mt-5">
                            <a href="" class="w-10 h-10 bg-book-main text-book-white rounded-full mr-3">
                                <i class="fab fa-twitter mt-3 mx-3"></i>
                            </a>
                            <a href="" class="w-10 h-10 bg-book-main text-book-white rounded-full mr-3">
                                <i class="fab fa-pinterest-p mt-3 mx-3"></i>
                            </a>
                            <a href="" class="w-10 h-10 bg-book-main text-book-white rounded-full">
                                <i class="fab fa-facebook-f mt-3 mx-4"></i>
                            </a>
                        </div>
                    </div>

                    <!-- Comments -->
                    <div class="mt-10 px-2 py-4">
                        <h5 class="font-semibold text-center text-book-dark">¡Dare to comment! Blogs feed on comment and I would be happy to read your opinion about this book. Please remember not to spam, so I won't have to delete your comment. ¡I hope to read you soon!</h5>
                        <div class="mt-10">
                             <Disqus shortname='caros-bookish' />
                        </div>
                    </div>
                </section>
            </section>
        </main>
    </div>
</template>
<script>
import api from '~/assets/js/api';
import Tab from '~/components/Tabs/Tab';
import Tabs from '~/components/Tabs/Tabs';

export default {
    name: 'BookDetails',
    components: {
        Tab,
        Tabs,
    },

    data() {
        return {
            titleWebsite: `Caro's Bookish`,
            staticUrl: 'http://admin.carosbookish.com/',
            loading: false,
            separadorImg: require('~/assets/img/separator.png'),
            bookDetails: {
                id: "",
                isbn: "",
                title: "",
                summary: "",
                editorial: "",
                serie: "",
                published: {
                    date: null,
                    timezone_type: null,
                    timezone: null,
                },
                pages: "",
                translator: "",
                language: "",
                format: "",
                synopsis: "",
                purchases: [],
                create_at: null,
                updated_at: null,
                image_main: {
                    id: "",
                    name: "",
                    strategy: "",
                    extension: "",
                },
                author: {
                    name: "",
                    surname: "",
                    social_networks: [],
                    image: {
                        id: "",
                        name: "",
                        strategy: "",
                        extension: "",
                    }
                },
                review: {
                    id: '',
                    description: '',
                    stars: '',
                }
            },
        }
    },

    created() {
        this.bookSlug() 
    },

    methods: {
        bookSlug() {
			this.loading = true;
			api.bookDetails(this.$route.params.slug)
			.then((res) => {
                this.bookDetails = res;
				this.loading = false;
			})
			.catch(error => {
				console.error(error)
				this.loading = false;
			})
		},

        trackers() {
            this.$ga.page({
                page: `${this.$route.params.slug}`,
                title: `${this.titleWebsite} - ${this.bookDetails.title}`,
                location: window.location.href
            })
        }
    },

    head(){
        return {
            title: `${this.titleWebsite} - ${this.bookDetails.title}`,
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: this.bookDetails.summary,
                }
            ]
        }
    }
}
</script>
<style scoped>
.blur {
    height: 75vh;
}

.blur:after {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: '';
    background-color: rgba(0, 0, 0, 0.7);
}

.height-custom {
    height: fit-content;
}

.info-author h3 {
    font-family: 'Signatria'
}
</style>