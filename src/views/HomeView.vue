<template>
	<div class="home">
		<home-carousel />
		<v-container>
			<h1 class="text-h2 text-lg-h1">
				Покрокове створення фірмового стилю для сайту
			</h1>
			<h4 class="text-h5 orange amber lighten-5">
				Кармазіна Анастасія Віталіївна ВПВПС-21-5
			</h4>
			<home-intro class="mt-10" />
		</v-container>
	</div>
</template>

<script>
import HomeCarousel from '@/components/HomeCarousel.vue'
import HomeIntro from '@/components/HomeIntro.vue'
// @ is an alias to /src

export default {
	name: 'HomeView',
	components: {
		HomeCarousel,
		HomeIntro,
	},
}
</script>
