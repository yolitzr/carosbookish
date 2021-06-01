<template>
    <div class="grid gap-4 justify-items-center sm:grid-cols-2 lg:grid-cols-4">
        <div v-for="n in count">
            <div class="mb-10">
                <Skeleton width="300" height="380"/>
                <div class="flex flex-col justify-center items-center h-56">
                    <Skeleton width="70%" height="10" margin="15"/>
                    <Skeleton width="80%" height="10"/>
                    <Skeleton width="80%" height="10"/>
                    <Skeleton width="80%" height="10"/>
                </div>
                <div class="flex justify-around items-cente mt-5">
                    <Skeleton width="30%" height="10"/>
                    <Skeleton width="10%" height="10"/>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Skeleton from '~/components/Skeleton/Skeleton'

export default {
    name: 'LoaderArticle',
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