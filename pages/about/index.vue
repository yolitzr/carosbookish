<template>
    <div>
        <Hero 
            titleHero="Caro's Bookish"
            subTitleHero="Compulsive Reader, Book Blogger and Reviewer"
        />
        <main class="container mx-auto p-6">
            <section class="py-16">
                <h3 class="text-4xl font-bold text-center leading-6 uppercase tracking-wide text-book-main">{{tittleAbout}}</h3>
                <div class="flex flex-wrap justify-center items-center">
                    <figure class="mt-12">
                        <img :src="urlImg" alt="Yolit Zacarias" class="w-64 border-4 border-book-dark rounded-full">
                    </figure>
                    <div>
                        <p v-html="descriptionAbout" class="text-book-gray mt-6">
                        </p>
                        <div class="flex justify-center items-center gap-4 mt-8">
                            <div v-for="netgalley in imgNetgalley" :key="netgalley">
                                <img :src="netgalley.imgUrl" :alt="netgalley.imgAlt" class="w-auto">
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </div>
</template>
<script>
import Hero from '~/components/UI/Hero'

export default {
    name: 'AboutMe',
    components: {
        Hero,
    },
    
    data() {
        return {
            tittleAbout: 'About Me',
            titleWebsite: `Caro's Bookish`,
            urlImg: require('~/assets/img/me.jpg'),
            descriptionAbout: `¡Hi!, I am Yolit , a girl Venezuelan and lover of books, I’ve been passionate about reading for years, the books have been my warm refuge, that place where I can enjoy a thousand emotions. I always read romantic novels, in all their subgenres, erotic, suspense, etc. I am also very fond of Thriller and Noir Novel. Little by little I have been testing with other genres, such as Young Adult, New Adult and Fantasy.
            <br/>
            <br/>
            For a long time I have liked to share my reviews of the books I have read, but I have always written them in Spanish, now as I am studying English, I encouraged not only to share my reviews in this language but to read those books I have always wanted and review them.
            <br/>
            <br/>
            I hope everyone feels comfortable in my new little blog and please forgive me if I have any mistakes in my grammar, I am still learning and looking forward to improving.
            `,
            imgNetgalley: [
                {
                    imgUrl: require('~/assets/img/pro_reader.png'),
                    imgAlt: 'Professional Reader' 
                },

                {
                    imgUrl: require('~/assets/img/favorited_reviews.png'),
                    imgAlt: 'Reviews Published' 
                },

                {
                    imgUrl: require('~/assets/img/reviews_10.png'),
                    imgAlt: '10 Book Reviews' 
                },
            ],
        }
    },

    methods: {
        trackers() {
            this.$ga.page({
                page: `${this.$route}`,
                title: `${this.titleWebsite} - ${this.tittleAbout}`,
                location: window.location.href,
            })
        }
    },

    head() {
        return {
            title: `${this.titleWebsite} - ${this.tittleAbout}`,
            meta: [
                {
                    hid: 'description',
                    name: `${this.titleWebsite} - ${this.tittleAbout}`,
                }
            ]
        }
    }    
}
</script>