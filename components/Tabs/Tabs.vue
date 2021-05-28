<template>
    <article>
        <header class="tabs w-full">
            <ul class="flex justify-end p-0 list-none mb-2 border-b-2 border-book-main">
                <li v-for="(tab, index) in tabs" :key="index">
                    <div class="px-4 py-2 nav-item cursor-pointer hover:text-book-white hover:bg-book-main hover:opacity-75 text-base text-book-dark"
                    :class="{'is_active' : tab.isActive}"
                    @click="selectTab(tab)">
                        {{ tab.name }}
                    </div>
                </li>
            </ul>
        </header>
        <section class="tabs-details mt-5 p-4">
            <slot></slot>
        </section>
    </article>

</template>

<script>
export default {
    data() {
        return {
            tabs: []
        }
    },

    methods: {
        selectTab(selectedTab) {
            this.tabs.forEach(tab => {
                tab.isActive = tab.name === selectedTab.name;
            });
        }
    },

    created() {
        this.tabs = this.$children
    }

}
</script>

<style scoped>
.is_active {
    @apply bg-book-main; 
    @apply text-book-white;
}
</style>