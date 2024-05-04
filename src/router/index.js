import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeView,
	},
	{
		path: '/intro',
		name: 'intro',
		component: () =>
			import(/* webpackChunkName: "intro" */ '../views/IntroView.vue'),
	},
	{
		path: '/steps',
		name: 'steps',
		component: () =>
			import(/* webpackChunkName: "steps" */ '../views/StepsView.vue'),
	},
	{
		path: '/tips',
		name: 'tips',
		component: () =>
			import(/* webpackChunkName: "tips" */ '../views/TipsView.vue'),
	},
	{
		path: '/aspects',
		name: 'aspects',
		component: () =>
			import(/* webpackChunkName: "aspects" */ '../views/AspectsView.vue'),
	},
	{
		path: '/keep',
		name: 'keep',
		component: () =>
			import(/* webpackChunkName: "keep" */ '../views/KeepView.vue'),
	},
	{
		path: '/links',
		name: 'links',
		component: () =>
			import(/* webpackChunkName: "links" */ '../views/LinksView.vue'),
	},
]

const router = new VueRouter({
	mode: 'history',
	routes,
})

export default router
