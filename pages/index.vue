<template>
    <div>
        <Hero 
            titleHero="Caro's Bookish"
            subTitleHero="Compulsive Reader, Book Blogger and Reviewer"
        />
        <main class="container mx-auto p-6 lg:py-10 lg:px-14">
            <section class="py-5 md:py-10 lg:pt-14">
                <loader-featured :count="3" v-if="loading"/>
                <FeaturedReviews
                    v-else
                    :featured="featured"
                    textButton="Read More"               
                />
            </section>
            <section class="py-5 md:py-10">
                <h3 class="mt-6 text-left text-3xl md:text-4xl font-bold uppercase tracking-wider text-book-main">
                    {{titleReviews}}
                </h3>
                <div class="line"></div>
                <loader-article :count="4" v-if="loading"/>
                <Reviews 
                    :reviews="reviews"
                    textButton="Read Review"
                />
            </section>
            <section class="py-5 md:py-10">
                <NewsletterForm 
                    titleNewsletter="Enter your email to receive our newsletter and be up-to date on all news."
                    textButton="Subscribe"
                />
            </section>
            <section class="py-5 md:py-10">
                <h3 class="mt-6 text-left text-3xl md:text-4xl font-bold uppercase tracking-wider text-book-main">
                    {{titleRelease}}
                </h3>
                <div class="line"></div>
                <loader-cover :count="4" v-if="loading"/>
                <Books
                    v-else 
                    :book="books"
                    textButton="Read More"
                />
            </section>
        </main>
    </div>
</template>
<script>
import api from '~/assets/js/api.js'
import Hero from "~/components/UI/Hero";
import FeaturedReviews from '~/components/Home/FeaturedReviews';
import Reviews from '~/components/Home/Reviews';
import NewsletterForm from '~/components/Home/NewsletterForm';
import Books from '~/components/Home/Books';
import LoaderCover from '~/components/Skeleton/LoaderCover'
import LoaderArticle from '~/components/Skeleton/LoaderArticle'
import LoaderFeatured from '~/components/Skeleton/LoaderFeatured'

export default {
    name: 'Home',
    
    components: {
        Hero,
        FeaturedReviews,
        Reviews,
        NewsletterForm,
        Books,
        LoaderCover,
        LoaderArticle,
        LoaderFeatured
    },

    data() {
        return {
            books: [],
            reviews: [],
            featured: [],
            loading: true,
            titleReviews: 'Lastet Reviews',
            titleRelease: 'Upcoming Releases in 2021',
            languaje: 'Spanish',
            titleWebsite: `Caro's Bookish`,
        }
    },

    created() {
        this.bookReviews();
        this.featuredBooks();
        this.releaseBooks();
    },

    methods: {
        featuredBooks() {
             this.loading = true;
             const body = {
				"order": {
					"field": "book.id",
					"dir": "desc"
				},
				"search": [
					{
						"field":["book.is_featured"], 
						"operator":"=", 
						"value": true
					},
				],
			}

            api.booksInfo(body)
            .then((res) => {
                this.featured= res.results;
                this.loading = false;
            })
            .catch(error => {
				console.error(error)
				this.loading = false;
			})

        },

        bookReviews() {
            this.loading = true;
            const body = {
                length: this.limit,
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

            api.booksInfo(body)
            .then((res) => {
                this.reviews = res.results;
                this.loading = false;
            })
            .catch(error => {
				console.error(error)
				this.loading = false;
			})
        },

        releaseBooks() {
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
                        "value":"2021-01-01"
                    }
				],
			}

            api.booksInfo(body)
            .then((res) => {
                this.books = res.results;
                this.loading = false;
            })
            .catch(error => {
				console.error(error)
				this.loading = false;
			})
        },

        trackers() {
            this.$ga.page({
                page: `${this.$route}`,
                title: `${this.titleWebsite}`,
                location: window.location.href
            })
        },

    },

    head() {
        return {
            title: `${this.titleWebsite}`,
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