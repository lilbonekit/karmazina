<template>
	<v-expansion-panels>
		<v-expansion-panel v-for="(item, i) in data" :key="i">
			<v-expansion-panel-header>
				{{ item.title }}
			</v-expansion-panel-header>
			<v-expansion-panel-content>
				{{ item.text }}
			</v-expansion-panel-content>
		</v-expansion-panel>
	</v-expansion-panels>
</template>

<script>
export default {
	name: 'explanation-panel',
	props: { data: Array, default: [] },
}
</script>
