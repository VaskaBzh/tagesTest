<template>
  <div class="select">
    <div class="select_head">{{ ownSelectedItem }}</div>
    <div class="select__options">
      <div
	      class="select_option"
	      v-for="(option) in selectOptions"
	      :key="option.value"
      >
	      {{ option.name }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, Ref, ref } from "vue";
import { SelectOptionType } from "@/Types/SelectOptionType";

const props = defineProps<{
	selectOptions: SelectOptionType[],
	selectedItem: string,
}>()

const ownSelectedItem: Ref<string> = ref("")

onMounted(() => {
  ownSelectedItem.value = props.selectedItem
})
</script>

<style scoped lang="scss">

</style>