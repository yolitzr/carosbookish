<template>
    <div class="skeleton" :style="_styles"></div>
</template>

<script>
export default {
    name: 'Skeleton',
    props: {
        width: {type: [String, Number], default: '100%'},
        height: {type: [String, Number], default: 10 },
        margin: {type: [String, Number], default: 5 },
        corner: {type: [String, Number], default: 1 },
    },

    methods: {
        isNumeric(value) {
            return /^\d+$/.test(value)
        },
    },

    computed: {
        _styles() {
            return {
                width: this._width,
                height: this._height,
                margin: this._margin,
                borderRadius: this._corner,
            }
        },
        _width() {
            return this.isNumeric(this.width) ? this.width + 'px': this.width;
        },
        _height() {
            return this.isNumeric(this.height) ? this.height + 'px': this.height;
        },
        _margin() {
            return this.isNumeric(this.margin) ? this.margin + 'px': this.margin;
        },
        _corner() {
            return this.isNumeric(this.corner) ? this.corner + 'px': this.corner;
        },
    }
}
</script>

<style scoped>
.skeleton {
    position: relative;
    background: 0 0/300% 300% linear-gradient(-61deg, rgba(0, 0, 0, 0.05) 40%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.05) 60%);
    animation: loader-card-gradient 1.3s ease infinite;
    overflow: hidden;
}

.skeleton:after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: 0 0/300% 300% linear-gradient(-61deg, rgba(0, 0, 0, 0.05) 40%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.05) 60%);
	animation: loader-card-gradient 1.3s ease infinite;
}

@keyframes loader-card-gradient {
    0% {
        background-position: 100% 50%;
    }
    40% {
        background-position: 0% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}
</style>