/* eslint-disable no-unused-vars */
export default {
	data() {
		return {
			isScroll: false
		}
	},

	methods: {
		animationScrolling() {
			/* window.addEventListener('scroll', (event) => {
				let { top, bottom } = element.getBoundingClientRect();
				let height = document.documentElement.clientHeight;
				if (window.scrollY + height / 2 >= top) {
					this.isScroll = true;
				} else {
					this.isScroll = false;
				}


			})
			let element = document.querySelector('h3'); */

			this.isScroll = true;
		}
	}
}