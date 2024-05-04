<template>
	<v-carousel cycle hide-delimiter-background show-arrows-on-hover>
		<template v-slot:prev="{ on, attrs }">
			<v-btn color="success" v-bind="attrs" v-on="on">Назад</v-btn>
		</template>
		<template v-slot:next="{ on, attrs }">
			<v-btn color="info" v-bind="attrs" v-on="on">Далі</v-btn>
		</template>
		<v-carousel-item v-for="(slide, i) in background" :key="i">
			<v-sheet class="home-bg">
				<v-img :src="background[i]"></v-img>
			</v-sheet>
		</v-carousel-item>
	</v-carousel>
</template>

<script>
export default {
	data() {
		return {
			background: [
				'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/e1c910177131523.64d128e5ed06b.png',
				'https://mir-s3-cdn-cf.behance.net/project_modules/fs/8a85ec177131523.64d128e5eb40a.png',
				'https://mir-s3-cdn-cf.behance.net/project_modules/fs/1d1cbf177131523.64d128e5ea748.png',
				'https://mir-s3-cdn-cf.behance.net/project_modules/fs/f78eb9177131523.64d128e5e6b0c.png',
			],
		}
	},
}
</script>

<style>
.v-responsive__content {
	max-width: unset;
}
</style>
