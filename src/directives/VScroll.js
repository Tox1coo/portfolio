/* eslint-disable no-unused-vars */
export default {
	mounted(el, binding) {
		const options = {
			rootMargin: '0px 0px 0px 20px',
			threshold: 1.0
		}
		const callback = (entries, observer) => {
			if (entries[0].isIntersecting) {
				binding.value(entries[0].isIntersecting);
			}

		};
		const observer = new IntersectionObserver(callback, options);

		observer.observe(el);
	},
	name: 'intersection'
}