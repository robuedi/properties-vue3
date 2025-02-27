<script setup lang="ts">
import type { IProperty } from '@/types/database'
import { useDateFormatter } from '@/composables/useDateFormatter'
import { useNumberFormatter } from '@/composables/useNumberFormatter'

defineProps<{
  property: IProperty
  index?: number
}>()

const { formatDate } = useDateFormatter()
const { formatNumber } = useNumberFormatter()
</script>

<template>
  <div>
    <div
      class="flex flex-col sm:flex-row sm:items-center p-6 gap-4"
      :class="{ 'border-t border-surface-200 dark:border-surface-700': index !== 0 }"
    >
      <div class="md:w-40 relative">
        <img
          class="block xl:block mx-auto rounded w-full"
          :src="`/public/img/house-placeholder.jpg`"
          :alt="property.name"
        />
        <div class="absolute bg-black/70 rounded-border" style="left: 4px; top: 4px">
          <Tag :value="'NEW'" :severity="'success'"></Tag>
        </div>
      </div>
      <div class="flex flex-col md:flex-row justify-between md:items-center flex-1 gap-6">
        <div class="flex flex-row md:flex-col justify-between items-start gap-2">
          <div>
            <span
              v-if="property?.address"
              class="font-medium text-surface-500 dark:text-surface-400 text-sm"
              >{{
                `${property?.address?.city?.name ?? ''}, ${property?.address?.city?.country?.name ?? ''} - `
              }}</span
            >
            <span
              v-if="property?.created_at"
              class="font-medium text-surface-500 dark:text-surface-400 text-sm"
              >{{ formatDate(property.created_at) }}</span
            >
            <div class="text-lg font-medium mt-2">{{ property.name }}</div>
          </div>
          <div class="bg-surface-100 p-1" style="border-radius: 30px">
            <div
              class="bg-surface-0 flex items-center gap-2 justify-center py-1 px-2"
              style="
                border-radius: 30px;
                box-shadow:
                  0px 1px 2px 0px rgba(0, 0, 0, 0.04),
                  0px 1px 2px 0px rgba(0, 0, 0, 0.06);
              "
            >
              <span class="text-surface-900 font-medium text-sm">{{ '5' }}</span>
              <i class="pi pi-star-fill text-yellow-500"></i>
            </div>
          </div>
        </div>
        <div class="flex flex-col md:items-end gap-8">
          <span class="text-xl font-semibold">$ {{ formatNumber(property.price) }}</span>
          <div class="flex flex-row-reverse md:flex-row gap-2">
            <Button icon="pi pi-heart" outlined></Button>
            <Button
              icon="pi pi-shopping-cart"
              label="Buy Now"
              :disabled="false"
              class="flex-auto md:flex-initial whitespace-nowrap"
            ></Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
