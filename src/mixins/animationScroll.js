/* eslint-disable no-unused-vars */
export default {
	data() {
		return {
			isScroll: false,
			scroll: window.pageYOffset,
		}
	},

	methods: {
		/* 		animationScrolling() {
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

		/* 	const statusElement = !el.nextElementSibling.classList.contains('animation') || !el.nextElementSibling.classList.contains('animation-left')
			if (status && !this.isScroll) this.isScroll = true;
			else this.isScroll = false;
		this.isScroll = true;
			*/
		//	}
		animationScrolling() {
			window.addEventListener('scroll', animOnScroll);
			const animationItems = document.querySelectorAll('.animation')

			function animOnScroll() {
				for (let index = 0; index < animationItems.length; index++) {
					console.log(animationItems);
					const animItem = animationItems[index];
					const animItemHeight = animItem.offsetHeight
					const animItemOffset = getOffset(animItem).top;
					const animItemStart = 4;

					let animItemPoint = window.innerHeight - animItemHeight / animItemStart;

					if (animItemHeight > window.innerHeight) {
						animItemPoint = window.innerHeight - window.innerHeight / animItemStart;
					}
					if ((window.pageYOffset > animItemOffset - animItemPoint) && window.pageYOffset < (animItemOffset + animItemHeight)) {
						animItem.classList.add('animation-active')
					} else {
						animItem.classList.remove('animation-active')
					}
				}
			}

			function getOffset(item) {
				const rect = item.getBoundingClientRect(),
					scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
					scrollTop = window.pageYOffset || document.documentElement.scrollTop;
				return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
			}
		}
	},

}