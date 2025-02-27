<script setup lang="ts">
import PropertiesList from '@/components/properties/PropertiesList.vue'
import { usePropertyStore } from '@/stores/property.store'
import { onMounted } from 'vue'
import Property from '@/models/Property'

//make the storee
const propertyStore = usePropertyStore()

onMounted(() => {
  const properties = Property.select('id', 'name', 'created_at').include('address.city.country')
  propertyStore.getAll(properties)
})
</script>

<template>
  <h1>My Properties</h1>
  <PropertiesList />
</template>
