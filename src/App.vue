<template>
	<v-app id="app">
		<nav>
			<header-app />
		</nav>
		<router-view />
	</v-app>
</template>

<script>
import HeaderApp from './components/HeaderApp.vue'
export default {
	components: {
		HeaderApp,
	},
}
</script>
