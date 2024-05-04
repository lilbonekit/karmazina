<template>
	<v-card>
		<v-toolbar flat color="primary" dark>
			<v-toolbar-title>User Profile</v-toolbar-title>
		</v-toolbar>
		<v-tabs vertical>
			<v-tab>
				<v-icon left> mdi-check </v-icon>
				Вступ
			</v-tab>
			<v-tab>
				<v-icon left> mdi-check </v-icon>
				Етапи брендингу
			</v-tab>
			<v-tab>
				<v-icon left> mdi-check </v-icon>
				Рекомендації
			</v-tab>
			<v-tab>
				<v-icon left> mdi-check </v-icon>
				Технічні аспекти
			</v-tab>
			<v-tab>
				<v-icon left> mdi-check </v-icon>
				Поради
			</v-tab>
			<v-tab>
				<v-icon left> mdi-check </v-icon>
				Ресурси
			</v-tab>

			<v-tab-item>
				<v-card flat>
					<v-card-text>
						<h3 class="mb-5">Вступ до проектування фірмового стилю</h3>
						<ul>
							<li>
								Опис поняття фірмового стилю та його значення для веб-сайту.
							</li>
							<li>
								Пояснення важливості використання фірмового стилю для створення
								єдинообразного враження.
							</li>
						</ul>
						<router-link to="/intro" class="mt-3 d-block">Перейти</router-link>
					</v-card-text>
				</v-card>
			</v-tab-item>

			<v-tab-item>
				<v-card flat>
					<v-card-text>
						<h3 class="mb-5">Етапи створення фірмового стилю</h3>
						<ul>
							<li>
								Детальний опис кожного етапу, включаючи аналіз бренду, розробку
								логотипу, вибір кольорової палітри, шрифтів та інших елементів.
							</li>
						</ul>
						<router-link to="/steps" class="mt-3 d-block">Перейти</router-link>
					</v-card-text>
				</v-card>
			</v-tab-item>

			<v-tab-item>
				<v-card flat>
					<v-card-text>
						<h3 class="mb-5">Рекомендації щодо дизайну веб-сайту</h3>
						<ul>
							<li>
								Поради щодо використання фірмового стилю в дизайні веб-сайту.
							</li>
							<li>Вказівки щодо вибору кольорів, шрифтів, макету тощо.</li>
						</ul>
						<router-link to="/tips" class="mt-3 d-block">Перейти</router-link>
					</v-card-text>
				</v-card>
			</v-tab-item>

			<v-tab-item>
				<v-card flat>
					<v-card-text>
						<h3 class="mb-5">Технічні аспекти розробки веб-сайту</h3>
						<ul>
							<li>
								Інструкції щодо реалізації фірмового стилю на веб-сайті
								(наприклад, CSS, HTML).
							</li>
						</ul>
						<router-link to="/aspects" class="mt-3 d-block"
							>Перейти</router-link
						>
					</v-card-text>
				</v-card>
			</v-tab-item>

			<v-tab-item>
				<v-card flat>
					<v-card-text>
						<h3 class="mb-5">Поради щодо підтримки фірмового стилю</h3>
						<ul>
							<li>
								Рекомендації про те, як забезпечити дотримання фірмового стилю
								під час розвитку веб-сайту та його подальшої підтримки.
							</li>
						</ul>
						<router-link to="/keep" class="mt-3 d-block">Перейти</router-link>
					</v-card-text>
				</v-card>
			</v-tab-item>

			<v-tab-item>
				<v-card flat>
					<v-card-text>
						<h3 class="mb-5">Посилання на корисні ресурси</h3>
						<ul>
							<li>
								Перелік корисних джерел, де можна знайти додаткову інформацію
								про проектування та розробку фірмового стилю.
							</li>
						</ul>
						<router-link to="/links" class="mt-3 d-block">Перейти</router-link>
					</v-card-text>
				</v-card>
			</v-tab-item>
		</v-tabs>
	</v-card>
</template>

<script>
export default {
	name: 'home-intro',
}
</script>

<style>
.v-tabs--vertical > .v-tabs-bar .v-tab {
	justify-content: flex-start;
}
</style>
