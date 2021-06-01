<template>
    <div class="flex flex-col lg:flex-row justify-center items-center max-w-full lg:w-10/12 mx-auto rounded-xl bg-book-light">
        <div class="newsletter-form lg:ml-10">
            <h4 class="px-4 mb-5 text-sm font-bold uppercase leading-5 lg:leading-6 text-center text-book-dark">
                {{titleNewsletter}}
            </h4>
            <div class="flex flex-wrap flex-col justify-center items-center px-4">
                <input 
                    v-model="form.name"
                    id="name"
                    type="name" 
                    name="name" 
                    aria-label="Name"
                    aria-describedby="button-newsletter"
                    placeholder="Enter your name"
                    class="w-full p-3 mb-3 border-b-2 border-book-second text-sm text-book-dark bg-book-light focus:outline-none"
                >
                <input
                    v-model="form.email" 
                    id="email"
                    type="email"
                    name="email"
                    aria-label="Email"
                    aria-describedby="button-newsletter"
                    placeholder="Enter your email"
                    class="w-full p-3 mb-3 border-b-2 border-book-second text-sm text-book-dark bg-book-light focus:outline-none"
                >
            </div>
            <div class="mx-4 my-4">
                <button
                    @click.prevent="validateForm"
                    :class="{disabled: form.sending}"
                    id="button-newsletter"
                    type="submit"
                    class="w-full p-4 rounded-xl text-sm font-semibold uppercase tracking-wider text-book-light bg-book-second hover:opacity-75"
                >
                    {{textButton}}
                </button>
            </div>
        </div>
        <div class="bg-newsletter order-first lg:order-last"></div>
        <transition name="status">
            <div
                v-if="form.errors.length"
                :class="form.success ? 'alert-success' : 'alert-danger'"
                class="alert relative"
            >
                <ul class="flex justify-center">
                    <li
                    v-for="(error, index) in form.errors"
                    class="p-1 text-book-white text-sm font-bold tracking-wide"
                    >
                    {{ error }}
                    </li>
                </ul>
            </div>
      </transition>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    name: 'NewsletterForm',
    props: {
        titleNewsletter: String,
        textButton: String,
    },

    data() {
        return {
            form: {
                email: null,
                name: null,
                errors: [],
                validated: false,
                sending: false,
                success: false,
            },
        }
    },

    methods: {
        validateForm() {
            this.form.success = false;
            this.form.errors = [];

            if (!this.form.name) {
                this.form.errors.push('Name required.');
            } 

            if (!this.form.email) {
                this.form.errors.push('Email required.');
            } else if (!this.validEmail(this.form.email)) {
                this.form.errors.push('Valid email required.');
            }

            if (!this.form.errors.length) {
                this.subscribe();
                return true;
            } else {
                this.closeFormStatus();
            }
        },

        validEmail(email) {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        },

        closeFormStatus() {
            setTimeout(() => {
                this.form.errors = [];
            }, 2500)
        },

        resetFormEmail() {
            setTimeout(() => {
                this.form.email = '';
                this.form.name = '';
            }, 3000)
        },

        async subscribe() {
            this.form.sending = true;
            this.form.errors.push('Sending...');

            try {
                const response = await axios.post('/api/subscribe', {email: this.form.email, name: this.form.name});
                this.form.success = true;
                this.resetFormEmail();
                this.form.errors.push(`Thank you: ${this.form.name} ${response.data}!`);
            } catch(error) {
                this.form.errors.push(`Error (${error.response.data.status}): ${error.response.data.title}`);
            }finally {
                this.closeFormStatus();
                this.form.sending = false;
            }
        },
    }
}
</script>
<style scoped>
.bg-newsletter {
    background-image: url("~assets/img/reading.svg");
	width: 100%;
	height: 400px;
	background-position: center;
	background-repeat: no-repeat;
	background-size: contain;
}

.newsletter-form h4 {
    font-family: 'Source Sans Pro', sans-serif;
}

.alert-danger {
    background-color: #e91e63;
    border: 1px solid #e91e63;
}

.alert-success {
    background-color: #29d2e4;
    border: 1px solid #29d2e4;
}

.alert {
    position: absolute;
    left: 15rem;
    bottom: -7rem;
    padding: 0.2rem 0.2rem;
    margin-bottom: 1rem;
    border: 1px solid transparent;
    border-radius: .25rem;
}
</style>