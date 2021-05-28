<template>
    <div class="sm:grid sm:grid-cols-3 sm:gap-4">
        <div v-for="n in count" :key="n" class="relative">
            <Skeleton width="100%" height="250" />
        </div>
    </div>
</template>
<script>
import Skeleton from '~/components/Skeleton/Skeleton'

export default {
    name: 'LoaderFeatured',
    components: {
        Skeleton
    },

    props: {
        count: {
            type: Number,
            default: 1,
        }
    }
}
</script>