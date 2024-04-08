<template>
	<article class="card">
    <span class="card_badge" v-show="Boolean(card.code)">
      Скидка
    </span>
		<img :src="`../assets/images/${props.card.image.url}`" :alt="`product №${card.id}`" class="card_image">
		<div class="card__head">
      <span class="card_code">
        {{ card.code }}
      </span>
      <span class="card_name">
        {{ card.name }}
      </span>
		</div>
    <div class="card__body">
      <p class="card__price">
        <span
          class="card__price_text card__price_text-old"
          v-show="Boolean(card.price.old_price)"
        >
          {{ card.price.old_price }}
        </span>
        <span class="card__price_text">
          {{ card.price.current_price }}
        </span>
      </p>
      <div class="card__actions">
        <cart-icon class="card__actions_icon" />
        <heart-icon class="card__actions_icon" />
      </div>
    </div>
	</article>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { CatalogCardType } from "../Types/CatalogCardType";
import CartIcon from "@icons/CartIcon.vue";
import HeartIcon from "@icons/HeartIcon.vue";


const props = defineProps<{
  card: CatalogCardType,
}>()
</script>

<style scoped lang="scss">
.card {
  max-width: 336px;
  width: 100%;
  border: 1px solid var(--gray-card-border, #EEEEEE);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 10px 12px;
  &_image {
    max-width: 238px;
    width: 100%;
    max-height: 237px;
    margin-bottom: adaptive-value(16px, 24px);
  }
  &_badge {
    min-width: 81px;
    min-height: 24px;
    padding: 0 16px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 8px;
    left: 0;
    color: var(--white, #ffffff);
    background: var(--red, #EB5757);
    font-size: 14px;
    font-family: SFProD, serif;
    line-height: 130%;
    font-weight: 500;
  }
  &__head,
  &__body {
    display: flex;
    font-family: SFUIText, serif;
    width: 100%;
  }
  &__head {
    gap: 6px;
    flex-direction: column;
  }
  &__body {
    justify-content: space-between;
    gap: 6px;
    align-items: center;
    margin-top: auto;
  }
  &__actions {
    display: flex;
    align-items: center;
    gap: 12px;
    &_icon {
      cursor: pointer;
    }
  }
  &__price {
    font-size: 16px;
    line-height: 140%;
    font-weight: 400;
    display: flex;
    gap: 10px;
    &_text {
      color: var(--black, #000000);
      &-old {
        color: var(--gray-old-price, #888888);
        text-decoration: line-through;
      }
      &:after {
        content: "₽";
      }
    }
  }
  &_code {
    color: var(--gray-old-price, #888888);
    font-size: 10px;
    line-height: 140%;
    font-weight: 400;
    height: 16px;
  }
  &_name {
    color: var(--black, #000000);
    font-size: 16px;
    line-height: 140%;
    font-weight: 500;
  }
}
</style>