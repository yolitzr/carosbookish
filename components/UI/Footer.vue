<template>
    <footer class="w-full py-10 px-4 bg-book-main">
        <div class="mt-2">
            <p class="text-sm text-center uppercase tracking-wider text-book-white">
                {{titleFooter}}
            </p>
            <span class="block mt-1 text-sm text-center uppercase text-book-white">
                {{subTitleFooter}} <i class="fas fa-heart"></i>
            </span>
        </div>
    </footer>
</template>
<script>
export default {
    name: 'Footer',
    props: {
        titleFooter: String,
        subTitleFooter: String,
    }
}
</script>