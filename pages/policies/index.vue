<template>
    <div>
        <Hero 
            titleHero="Caro's Bookish"
            subTitleHero="Compulsive Reader, Book Blogger and Reviewer"
        />
        <main class="container mx-auto p-6 lg:py-10 lg:px-14">
            <section class="py-16">
                <Tabs>
                    <Tab name="Web Policy" selected="true" class="">
                        <p v-html="webPolicy"></p>
                    </Tab>
                    <Tab name="Review Policy" class="">
                        <p v-html="reviewPolicy"></p>
                    </Tab>
                </Tabs>    
            </section>
        </main>
    </div>
</template>
<script>
import Hero from '~/components/UI/Hero'
import Tab from '~/components/Tabs/Tab';
import Tabs from '~/components/Tabs/Tabs';

export default {
    name: 'Policies',
    components:{
        Hero,
        Tab, 
        Tabs,
    },

    data() {
        return {
            titlePolicy: 'Web and Review Policies',
            titlewebsite: `Caro's Bookish`,
            webPolicy: `
                <strong><em>Caro’s Bookish</strong> is a literary website that was created to shared information about book releases and reviews.</em> This website is not a place to download books.
                <br/>
                <br/>
                This site reserves the right to accept or refuse comments. That is, any comments made here will be monitored by the admin. This is done with the purpose of avoiding comments abusive, offensive or that create discomfort to the other visitors of the website. In addition to avoiding post comments that contain emails or links that the admin considers as passive advertising.
                <br/>
                <br/>
                Each review will be written by the author of the website, not taken for other blogs o site. in case it appears any opinion of another site or person, the link of the site/blog from which the information or notice of the name of the person was taken will be given, although this in reviews is something that did NOT happen. The information in the author’s biographies is original from Goodreads or the publisher’s website.
                <br/>
                <br/>
                If you are an author or publisher who wants to collaborate with the site, you can contact me via the email <em><u>info@carosbookish.com</u></em>. Also, if you are a visitor of the blog you want to contact me for suggestions, help or anything else, you can do it by the same means mentioned above.
            `,

            reviewPolicy: `
                ¡Hi! Thank you for visiting my website. First of all, I want to tell you that right now I am only agreeing to review NetGalley’s ARC or that it belongs to my favourite authors or publishers. If after reading my politic you are interested in requesting a review, you can contact me by email <em><u>info@carosbookish.com</em></u>.
                <br/>
                <br/>
                I clarify that most of the books reviewed and for reviewing are books that I have bought because they call me to attention or some special case of a request to some publisher.
                <br/>
                <br/>
                As a book reviewer, I currently have a slow pace so I can take a maximum of ten (10) days to read and critique the book. In case it takes a little longer for any reason I will notify the author or publisher. If you want the review at a specific time you must notify it to re-organize my reading priorities. Netgalley reviews will always be available the day the book is published, they will never be available before unless requested by the publisher.
                <br/>
                <br/>
                In case of not finishing the book, I will send first an email to the author/publisher explaining my reasons and if they decide I will publish my review of what I read and why I could not finish it.
                <br/>
                <br/>
                <strong><u>My style of reviews</u></strong>
                <br/>
                <br/>
                As a rule, when I write my reviews, I try not to go that far. For me, a short, eye-catching review works better than many meaningless words repeating the same thing. Of course, there will always be a hype moment in which it will be almost inevitable not to extend myself and speak a thousand wonders of history. But, mostly it will have between 1500 and 3000 characters.
                <br/>
                <br/>
                I will always make a small summary (without spoiler) of the book, I will try to make it different to the synopsis, so the reader gets a clearer idea of what can be found within the story. In addition to that, I will explain a little about the plot and what it seemed to me and finally my feelings about the whole reading.
                <br/>
                <br/>
                <strong><u>My rating system</u></strong>
                <br/>
                <br/>
                <i class="fas fa-star"></i> -  I didn’t like it, probably won’t even finish it.
                <br/>
                <i class="fas fa-star"></i><i class="fas fa-star"></i> - It took me a bit, I couldn’t connect with the plot or characters, but I got to the end and that’s a great achievement.
                <br/>
                <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i> - A good read. Entertaining but missing something. I would recommend it to others at their own risk.
                <br/>
                <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i> -  An excellent book. I would definitely recommend it whenever I can.
                <br/> 
                <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i> - Reading required for all readers.
                <br/>
                <br/>
                Now, a very important topic when sending a digital or printed book. My favourite genders and that I always read.
                <br/>
                <br/>
                My readings are mostly in the Adult, Young Adult, New Adult, and Middle Grade genre, and include the following:
                <br/>
                <br/>
                <i class="fas fa-heart"></i> Romantic Suspense
                <br/>
                <i class="fas fa-heart"></i>  Thriller / Psychological Thriller / Mystery Thriller
                <br/>
                <i class="fas fa-heart"></i>  Crime
                <br/>
                <i class="fas fa-heart"></i>  Retelling
                <br/>
                <br/>
                Books outside the aforementioned theme will surely not be accepted unless it is Horror, which I could evaluate and accept if the cover and synopsis call my attention.
                <br/>
                <br/>
                And this is all… See ya!
            `
        }
    },

    methods: {
        trackers() {
            this.$ga.page({
                page: `${this.$route}`,
                title: `${this.titleWebsite}` - `${this.titlePolicy}`,
                location: window.location.href
            })
        }
    },

    head(){
        return {
            title: `${this.titleWebsite}` - `${this.titlePolicy}`,
            meta: [
                {
                    hid: 'description',
                    name: `${this.titleWebsite} - ${this.titlePolicy}`,
                }
            ]
        }
    }
}
</script>