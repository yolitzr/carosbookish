<template>
    <div>
        <NavBar />
        <Nuxt />
        <Footer 
            titleFooter="Caro's Bookish | Copyright ©2021 All rights reserved."
            subTitleFooter="Designed by Yolitzareth Zacarias for CA Designers"
        />
    </div>
</template>
<script>
import NavBar from "~/components/UI/NavBar";
import Footer from "~/components/UI/Footer";

export default {
    components: {
        NavBar,
        Footer,
    },
};
</script>
