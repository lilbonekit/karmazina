<template>
	<div>
		<v-container>
			<h1 class="text-h2 mt-10">Етапи створення фірмового стилю</h1>
			<div class="mt-10">
				<p>
					Створення фірмового стилю є ключовим етапом в будівництві сильного та
					впізнаваного бренду. Цей процес включає кілька важливих етапів, кожен
					з яких спрямований на розвиток унікального та стійкого іміджу
					компанії. Ознайомтеся з основними кроками створення фірмового стилю:
				</p>
			</div>
			<steps-stepper class="mt-10" />
			<p class="mt-5">
				Кожен з цих етапів є важливим у процесі створення фірмового стилю та
				допомагає забезпечити консистентність та професіоналізм у візуальному
				представленні бренду.
			</p>
		</v-container>
	</div>
</template>

<script>
import StepsStepper from '@/components/StepsStepper.vue'

export default {
	components: {
		StepsStepper,
	},
}
</script>

<style lang="scss" scoped></style>
