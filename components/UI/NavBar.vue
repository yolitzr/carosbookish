<template>
    <div id="navbar" class="fixed mt-0 w-full z-20">
        <nav id="navbar-ul" class="flex items-center justify-between flex-wrap mx-auto py-4 px-10 lg:px-32">
            <div class="flex items-center flex-no-shrink text-white">
                <nuxt-link to="/" class="focus:outline-none">
                    <Logo class="w-10 focus:outline-none"/>
                </nuxt-link>
            </div>
            <div class="block lg:hidden">
                <button @click="toggleNavbar" class="flex items-center px-3 py-2 border rounded text-book-light border-teal-light hover:text-white hover:border-white focus:outline-none">
                    <i class="fas fa-bars fa-lg"></i>
                </button>
            </div>
            <ul @click="hideItems" :class="showMenu ? 'block': 'hidden'" class="w-full lg:flex lg:items-center lg:w-auto">
                <li v-for="(link, index) in links" class="flex justify-center items-center">
                    <nuxt-link :to="link.url" class="flex px-3 py-1 my-2 md:my-0 rounded-full sm:px-3 sm:py-2 sm:inline-block sm:mt-0 text-book-light tracking-wide hover:bg-book-light hover:text-book-main">
                        {{ link.name }}
                    </nuxt-link>
                </li>
                <div class="flex justify-center items-center py-6 px-4 sm:py-2 sm:px-1">
                    <div class="mx-1">
                        <a href="#" class="block py-2 px-3 rounded-full transition-all duration-200 transform text-sm text-book-white hover:bg-book-light hover:text-book-main">
                            <i class="fab fa-goodreads-g"></i>
                        </a>
                    </div>
                    <div class="mx-1">
                        <a href="#" class="block py-2 px-3 rounded-full text-sm text-book-white hover:bg-book-light hover:text-book-main">
                            <i class="fab fa-twitter"></i>
                        </a>
                    </div>
                    <div class="mx-1">
                        <a href="#" class="block py-2 px-3 rounded-full text-sm text-book-white hover:bg-book-light hover:text-book-main">
                            <i class="fab fa-instagram"></i>
                        </a>
                    </div>
                    <div class="mx-1">
                        <a href="#" class="block py-2 px-3 rounded-full text-sm text-book-white hover:bg-book-light hover:text-book-main">
                            <i class="fab fa-pinterest-p"></i>
                        </a>
                    </div>
                </div>
            </ul>
        </nav>
    </div>
</template>

<script>
import Logo from "~/assets/img/Logo";
import { NAV_LINKS } from "@/assets/js/navLinks";
export default {
  name: "NavBar",
  components: {
    Logo,
  },
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    toggleNavbar: function () {
        this.showMenu = !this.showMenu;
        if (this.showMenu === true) {
             document.getElementById("navbar-ul").style.background = "#86425f";
        }else {
            document.getElementById("navbar-ul").style.background = "none";
        }
    },

    hideItems(){
        this.showMenu = false;
    },
    /* Shrink Navigation */
    scrollFunction() {
        window.onscroll = () => {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 35) {
                document.getElementById("navbar").style.background = "#86425f";
                document.getElementById("navbar").style.transition = "all 0.5s";
            } else {
                document.getElementById("navbar").style.background = "none";
            }
            }
        },
    },
    mounted () {
        /* Shrink Navigation */
        this.scrollFunction();
    },

  computed: {
    links() {
      return NAV_LINKS;
    },
  },
};
</script>