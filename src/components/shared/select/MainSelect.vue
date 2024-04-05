<template>
  <div class="select">
    <main-label class="select_label" v-show="label">
      {{ label }}
    </main-label>
    <div class="select__block">
      <div class="select_option select_option-active">
        {{ selectService.selectedValue }}
        <arrow-icon class="select_icon" />
      </div>
      <div class="select__options">
        <div
          class="select_option"
          v-for="(option) in selectService.selectOptions"
          :key="option.value"
          @click="selectService.setSelectedValue(option.name); $emit('getSelectedValue', option.value)"
        >
          {{ option.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ArrowIcon from "@icons/ArrowIcon.vue";
import MainLabel from "../MainLabel.vue";

import { onMounted, Ref, ref } from "vue";
import { SelectOptionType } from "@/components/shared/select/types/SelectOptionType";
import { SelectService } from "@/components/shared/select/services/SelectService";

const props = withDefaults(defineProps<{
  selectOptions: SelectOptionType[],
  selectedItem?: string,
  label: string,
}>(), {
  selectOptions: [] as SelectOptionType[],
})

const selectService: Ref<SelectService> = ref({})

onMounted(() => {
  selectService.value = SelectService.initSelect(props.selectedItem, props.selectOptions)
})
</script>

<style scoped lang="scss">
.select {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
  &_label {
    padding-left: 16px;
  }
  &__block {
    position: relative;
    min-height: 40px;
    width: 100%;
  }
  &:hover {
    .select {
      &_icon {
        transform: translateY(-50%) rotate(180deg);
      }
      &__options {
        max-height: 160px;
        opacity: 1;
      }
    }
  }
  &__options {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    max-height: 0;
    opacity: 0;
    overflow-y: scroll;
    transition: all 0.3s ease 0s;
    position: absolute;
    top: 100%;
    z-index: 2;
    width: 100%;
    &::-webkit-scrollbar {
      width: 0;
    }
  }
  &_icon {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    width: 24px;
    height: 24px;
    transition: all 0.3s ease 0s;
  }
  &_option {
    display: inline-flex;
    align-items: center;
    width: 100%;
    min-height: 40px;
    color: var(--black, #000000);
    font-size: 14px;
    line-height: 150%;
    font-family: SFProD, serif;
    font-weight: 400;
    padding: 0 16px;
    background: var(--gray-light, #F2F2F2);
    transition: all 0.3s ease 0s;
    border-style: solid;
    border-color: transparent;
    border-width: 1px;
    &:not(&-active) {
      &:hover {
        border-color: var(--gray-light, #F2F2F2);
        background: var(--white, #ffffff);
      }
    }
    &-active {
      position: relative;
    }
  }
}
</style>