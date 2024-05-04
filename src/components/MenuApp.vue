<template>
	<div class="text-center">
		<v-menu offset-y>
			<template v-slot:activator="{ on, attrs }">
				<v-app-bar-nav-icon color="white" dark v-bind="attrs" v-on="on">
				</v-app-bar-nav-icon>
			</template>
			<v-list>
				<v-list-item v-for="(item, index) in tabLinks" :key="index">
					<v-list-item-title @click="changeRoute(item.path)">{{
						item.name
					}}</v-list-item-title>
				</v-list-item>
			</v-list>
		</v-menu>
	</div>
</template>

<script>
export default {
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
	},
	methods: {
		changeRoute(route) {
			if (route && route !== this.$route.path) {
				this.$router.push(route)
			}
		},
	},
}
</script>
