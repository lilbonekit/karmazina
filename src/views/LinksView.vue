<template>
	<div>
		<v-container>
			<h1 class="text-h2">Посилання на корисні ресурси</h1>
			<v-row class="mt-10">
				<v-col
					v-for="(data, i) in usefulResources"
					:key="i"
					cols="12"
					md="6"
					lg="4"
				>
					<links-card :data="data" />
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
import LinksCard from '@/components/LinksCard.vue'
export default {
	components: {
		LinksCard,
	},
	computed: {
		usefulResources() {
			return [
				{
					title: 'Design Systems Repo',
					text: 'Цей репозиторій містить велику кількість прикладів дизайн-систем різних компаній та організацій, що може слугувати вдосконаленням фірмового стилю вашого проекту.',
					link: 'https://designsystemsrepo.com/',
				},
				{
					title: 'Material Design Guidelines',
					text: 'Рекомендації від Google щодо використання Material Design у ваших веб-проектах, включаючи кольори, шрифти, та компоненти.',
					link: 'https://material.io/design',
				},
				{
					title: 'Bootstrap Documentation',
					text: 'Bootstrap - це популярний фреймворк для швидкої розробки веб-сайтів. Документація містить вказівки щодо використання стилів та компонентів.',
					link: 'https://getbootstrap.com/docs/5.1/getting-started/introduction/',
				},
				{
					title: 'CSS Tricks',
					text: 'Цей веб-сайт містить велику кількість статей, порад та прикладів коду з CSS та веб-дизайну.',
					link: 'https://css-tricks.com/',
				},
				{
					title: 'Smashing Magazine',
					text: 'Журнал, присвячений веб-дизайну та розробці, з великою кількістю корисних статей та ресурсів.',
					link: 'https://www.smashingmagazine.com/',
				},
			]
		},
	},
}
</script>

<style lang="scss" scoped></style>
