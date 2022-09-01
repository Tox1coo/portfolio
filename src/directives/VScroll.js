/* eslint-disable no-unused-vars */
export default {
	mounted(el, binding) {
		const options = {
			rootMargin: '0px 0px 0px 20px',
			threshold: 0.4
		}
		const callback = (entries, observer) => {
			binding.value();

		};
		const observer = new IntersectionObserver(callback, options);

		observer.observe(el);
	},
	name: 'intersection'
}