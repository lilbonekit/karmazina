<template>
	<v-card>
		<v-toolbar background-color="deep-purple accent-4" center-active dark>
			<menu-app v-if="isMobileOrTablet" />
			<v-toolbar-title class="ml-3">Кармазіна</v-toolbar-title>

			<v-spacer></v-spacer>

			<template v-if="!isMobileOrTablet" v-slot:extension>
				<v-tabs centered slider-color="yellow">
					<v-tab v-for="i in tabLinks" :key="i.name" :to="i.path">
						{{ i.name }}
					</v-tab>
				</v-tabs>
			</template>
		</v-toolbar>
	</v-card>
</template>

<script>
import MenuApp from './MenuApp.vue'

export default {
	components: {
		MenuApp,
	},
	computed: {
		tabLinks() {
			return [
				{
					path: '/',
					name: 'Головна',
				},
				{
					path: '/intro',
					name: 'Вступ',
				},
				{
					path: '/steps',
					name: 'Етапи брендингу',
				},
				{
					path: '/tips',
					name: 'Рекомендації',
				},
				{
					path: '/aspects',
					name: 'Технічні аспекти',
				},
				{
					path: '/keep',
					name: 'Поради',
				},
				{
					path: '/links',
					name: 'Ресурси',
				},
			]
		},
		isMobileOrTablet() {
			return this.$vuetify.breakpoint.mobile || this.$vuetify.breakpoint.tablet
		},
	},
}
</script>
