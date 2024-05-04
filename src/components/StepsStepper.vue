<template>
	<v-stepper v-model="e6" vertical>
		<v-stepper-step :complete="e6 > 1" step="1"> Аналіз бренду </v-stepper-step>

		<v-stepper-content step="1">
			<v-card color="lighten-1" class="mb-12 pa-5">
				Цей етап включає вивчення існуючого бренду або, у разі створення нового,
				збір інформації про цілі, цінності, місію та унікальність бренду.
				Важливо зрозуміти, яка атмосфера та який образ бренд хоче передати своїм
				клієнтам.
			</v-card>
			<v-btn color="primary" @click="e6 = 2"> Далі </v-btn>
		</v-stepper-content>

		<v-stepper-step :complete="e6 > 2" step="2">
			Розробка логотипу
		</v-stepper-step>

		<v-stepper-content step="2">
			<v-card color="lighten-1" class="mb-12 pa-5">
				Логотип є одним з ключових елементів фірмового стилю. На цьому етапі
				створюється унікальний символ або знак, що відображає ідентичність
				бренду та його цінності. Розробка може включати створення різних
				варіантів логотипу для використання на різних поверхнях та в різних
				контекстах.
			</v-card>
			<v-btn color="primary" @click="e6 = 3"> Далі </v-btn>
			<v-btn text @click="e6 = e6 - 1"> Назад </v-btn>
		</v-stepper-content>

		<v-stepper-step :complete="e6 > 3" step="3">
			Вибір кольорової палітри
		</v-stepper-step>

		<v-stepper-content step="3">
			<v-card color="lighten-1" class="mb-12 pa-5">
				Кольори грають важливу роль у сприйнятті бренду та створенні атмосфери.
				На цьому етапі визначаються основні та додаткові кольори, які будуть
				використовуватися в дизайні бренду. Важливо врахувати психологічний
				вплив кольорів та їх відповідність із цілями та цінностями бренду.
			</v-card>
			<v-btn color="primary" @click="e6 = 4"> Далі </v-btn>
			<v-btn text @click="e6 = e6 - 1"> Назад </v-btn>
		</v-stepper-content>

		<v-stepper-step :complete="e6 > 4" step="4"> Вибір шрифтів </v-stepper-step>
		<v-stepper-content step="4">
			<v-card color="lighten-1" class="mb-12 pa-5">
				Шрифти впливають на сприйняття тексту та створюють атмосферу веб-сайту.
				На цьому етапі вибираються основний та додаткові шрифти, які будуть
				використовуватися для тексту на веб-сайті та в інших матеріалах бренду.
			</v-card>
			<v-btn color="primary" @click="e6 = 5"> Далі </v-btn>
			<v-btn text @click="e6 = e6 - 1"> Назад </v-btn>
		</v-stepper-content>

		<v-stepper-step :complete="e6 > 5" step="5">
			Розробка графічних елементів
		</v-stepper-step>
		<v-stepper-content step="5">
			<v-card color="lighten-1" class="mb-12 pa-5">
				Графічні елементи, такі як текстурні фони, іконки, форми та інші
				декоративні елементи, доповнюють дизайн бренду та роблять його
				унікальним. На цьому етапі розробляються та стандартизуються всі
				необхідні графічні елементи для використання у різних матеріалах.
			</v-card>
			<v-btn color="primary" @click="e6 = 6"> Далі </v-btn>
			<v-btn text @click="e6 = e6 - 1"> Назад </v-btn>
		</v-stepper-content>

		<v-stepper-step step="6"> Створення стайлгайду </v-stepper-step>
		<v-stepper-content step="6">
			<v-card color="lighten-1" class="mb-12 pa-5">
				Стайлгайд (брендбук) є документом, що містить всі визначені елементи
				фірмового стилю та правила їх використання. На цьому етапі створюється
				детальний документ, який включає логотипи, кольорову палітру, шрифти,
				графічні елементи та інші дизайнерські правила та рекомендації.
			</v-card>
			<v-btn color="primary" @click="e6 = 1"> На початок </v-btn>
			<v-btn text @click="e6 = e6 - 1"> Назад </v-btn>
		</v-stepper-content>
	</v-stepper>
</template>

<script>
export default {
	data() {
		return {
			e6: 1,
		}
	},
}
</script>
