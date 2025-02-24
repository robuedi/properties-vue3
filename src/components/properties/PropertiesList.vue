<script setup lang="ts">
import { usePropertyStore } from '@/stores/property.store'
//make the storee
const propertyStore = usePropertyStore()
</script>

<template>
  <div>
    <p v-for="property in propertyStore.properties" :key="property.id">
      {{ property.name }}
    </p>
  </div>
</template>
