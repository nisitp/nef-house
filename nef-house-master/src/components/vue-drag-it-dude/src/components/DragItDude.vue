<template>
	<div
		class="drag-it-dude"
		@touchstart.stop="hang"
		@touchend.stop="drop"
		@mousedown.stop="hang"
		@mouseup.stop="drop"
		
	>
		<slot></slot>
	</div>
</template>

<script>
	/*
	 * Originally made by Esvalirion
	 * Modified by Jacob Watson
	 * Allows for panning around a scaling image
	 */

	export default {
		name: 'drag-it-dude',
		props: {
			width: {
				type: Number,
				default: 0,
			},
			height: {
				type: Number,
				default: 0,
			},
			parentWidth: {
				type: Number,
				default: 0,
			},
			parentHeight: {
				type: Number,
				default: 0,
			},
			scale: {
				type: Number,
				default: 1,
			},
			top: {
				type: Number,
				default: 1,
			},
			left: {
				type: Number,
				default: 1,
			}
        },

        data() {
            return {
                shiftY: null,
                shiftX: null,
                intLeft: this.left,
                intTop: this.top,
                scrollLeft: 0,
                scrollTop: 0,
                tempLeft: 0,
                tempTop: 0,
                maxLeft: 0,
                maxTop: 0,
            }
		},

        computed: {
            isIos() {
                return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
            }
        },

		watch: {
			// When scale is changed, make sure panning does not go outside bounds of image
			scale(newValue, oldValue) {
                var w2 = this.$el.parentNode.offsetWidth / 2;
                var h2 = this.$el.parentNode.offsetHeight / 2

                this.intLeft = (this.intLeft - w2) / oldValue * newValue + w2;
                this.intTop = (this.intTop - h2) / oldValue * newValue + h2;
            },
            left(newValue) {
                this.intLeft = newValue;
                this.maxLeft = Math.min(this.maxLeft - 50, newValue);
            },
            top(newValue) {
                this.intTop = newValue;
                this.maxTop = Math.min(this.maxTop - 50, newValue);
            },
            intLeft(newValue) {
                // newLeft must be <= 0
				// newLeft + offset must not be greater than image's width
				if (newValue > 0) {
					newValue = 0;
				} else if (newValue < this.maxLeft && newValue - this.$el.parentNode.offsetWidth < -1 * this.$el.childNodes[0].offsetWidth - (this.$el.childNodes[0].offsetWidth * (this.scale - 1))) {
					newValue = Math.min(
                        -1 * this.$el.childNodes[0].offsetWidth - (this.$el.childNodes[0].offsetWidth * (this.scale - 1)) + this.$el.parentNode.offsetWidth + 1,
                        this.maxLeft
                    );
				}

                this.$emit('update:left', newValue);
                this.$el.scrollLeft = newValue * -1;
                this.intLeft = newValue;
            },
            intTop(newValue) {
                // newTop must be >= 0
				// newTop + offset must not be greater than image's height
				if (newValue > 0) {
					newValue = 0;
				} else if (newValue < this.maxTop && newValue - this.$el.parentNode.offsetHeight < -1 * this.$el.childNodes[0].offsetHeight - (this.$el.childNodes[0].offsetHeight * (this.scale - 1))) {
					newValue = Math.min(
                        -1 * this.$el.childNodes[0].offsetHeight - (this.$el.childNodes[0].offsetHeight * (this.scale - 1)) + this.$el.parentNode.offsetHeight + 1,
                        this.maxTop
                    );
                }

                this.$emit('update:top', newValue);
                this.$el.scrollTop = newValue * -1;
                this.intTop = newValue;
            },
            scrollLeft(newValue) {
                this.$el.scrollLeft = newValue * -1;
            },
            scrollTop(newValue) {
                this.$el.scrollTop = newValue * -1;
            }
		},

		// Functions that can be called
		methods: {
            handleScroll(e) {
                this.scrollTop = this.intTop = this.$el.scrollTop * -1;
                this.scrollLeft = this.intLeft = this.$el.scrollLeft * -1;
            },

			// Element has become active
			// e: event
			hang(e) {
				this.$emit('activated');

				// If available use coordinates of click to decide starting point for drag
				// If not available, use last known coordinates to decide
				this.shiftX = typeof e.pageX != 'undefined' ? e.pageX : e.changedTouches[0].pageX;
				this.shiftY = typeof e.pageY != 'undefined' ? e.pageY : e.changedTouches[0].pageY;

				// If not iOS and coordinates of click are available, characterize as mouse
				// Otherwise, characterize as touch
				if (typeof e.pageX != 'undefined' && !this.isIos) {
					this.$el.addEventListener('mousemove', this.elementMove);
					this.$el.addEventListener('mouseleave', this.drop);
				} else {
					this.$el.addEventListener('touchmove', this.elementMove);
					this.$el.addEventListener('touchend', this.drop);
                }
                
                // Save starting point
                this.tempLeft = this.intLeft;
                this.tempTop = this.intTop;
			},

			// Element is being dragged
			// e: event
			elementMove(e) {
				this.$emit('dragging');
				e.preventDefault();

				if (typeof e.pageY != 'undefined') {
					document.body.style.overflow = 'hidden';
				}

				// If available use coordinates of click to decide how much to shift x/y
				// If not available, use last known coordinates to decide
				const x = typeof e.pageX != 'undefined' ? e.pageX : e.changedTouches[0].pageX;
				const y = typeof e.pageY != 'undefined' ? e.pageY : e.changedTouches[0].pageY;

                // Decide new boundries of rectangle
				this.intLeft = this.tempLeft + x - this.shiftX;
				this.intTop = this.tempTop + y - this.shiftY;
			},

			// Element is dropped
			drop() {
				this.$emit('dropped');
				document.body.style.overflow = null;

				// Stop moving image on mouse movement
				this.$el.removeEventListener('mousemove', this.elementMove, false);
				this.$el.removeEventListener('touchmove', this.elementMove, false);

				// End drop
				this.$el.onmouseup = null;
				this.$el.ontouchend = null;
            },
            
            center() {
                this.intTop = (this.$el.childNodes[0].offsetHeight * this.scale - this.$el.parentNode.offsetHeight) / 2 * -1;
                this.intLeft = (this.$el.childNodes[0].offsetWidth * this.scale - this.$el.parentNode.offsetWidth) / 2 * -1;
            }
		},

		mounted() {
            this.center();
            this.$el.addEventListener('scroll', this.handleScroll);
        },

        beforeDestroy() {
            this.$el.removeEventListener('scroll', this.handleScroll);
        }
	};
</script>

<style>
.drag-it-dude {
	position: absolute;
	top: 0;
	left: 0;
	z-index: 1;
    width: 100%;
    height: 100%;
    overflow: scroll;
    padding-right: 17px;
    padding-bottom: 17px;
}
</style>
