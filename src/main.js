import { createApp } from 'vue';
import App from './App.vue';
import '@/styles/UI.scss';
import components from "@/components/UI";
import directives from "@/directives"
const app = createApp(App);
components.forEach(component => {
	app.component(component.name, component)
})
directives.forEach(directives => {
	app.directive(directives.name, directives)
});
app.mount('#app');
