<template>
  <div class="select">
    <div class="select_head">{{ ownSelectedItem }}</div>
    <div class="select__options">
      <div class="select_option"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";

const props = defineProps({
  options: {
    type: {},
  },
  selectedItem: {
    type: String,
  }
})

const ownSelectedItem = ref(null)

onMounted(() => {
  ownSelectedItem.value = props.selectedItem
})
</script>

<style scoped lang="scss">

</style>