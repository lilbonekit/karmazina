<template>
	<v-card class="mx-auto" max-width="344">
		<v-card-text>
			<div>Word of the Day</div>
			<p class="text-h4 text--primary">{{ data.title }}</p>
			<p>adjective</p>
			<div class="text--primary">
				{{ data.text }}
			</div>
		</v-card-text>
		<v-card-actions v-if="data.link">
			<v-btn text color="teal accent-4" :href="data.link" target="_blank">
				Детальніше
			</v-btn>
		</v-card-actions>
	</v-card>
</template>

<script>
export default {
	props: {
		data: {
			type: Object,
			required: true,
		},
	},
}
</script>
