<template>
	<div class="card">
		<img :src="`@img/${card.image.url}`" :alt="`product №${card.id}`" class="card_image">
		<div class="card__head">
			span.
		</div>
	</div>
</template>

<script setup lang="ts">
import { CatalogCardType } from "../Types/CatalogCardType.ts";

interface IProps {
	card: CatalogCardType,
}

const props = defineProps<IProps>({
	card: {
		type: CatalogCardType,
		required: true,
	}
})
</script>

<style scoped lang="scss">
</style>