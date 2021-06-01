<template>
    <div class="grid sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
        <div v-for="n in count">
            <Skeleton width="100%" height="490" />
        </div>
    </div>
</template>
<script>
import Skeleton from '~/components/Skeleton/Skeleton'
export default {
    name: 'LoaderCover',
    components: {
        Skeleton,
    },
    props: {
        count: {
            type: Number,
            default: 1,
        }
    }
}
</script>