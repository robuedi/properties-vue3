<script setup lang="ts">
import Button from 'primevue/button'
import { usePropertyStore } from '@/stores/property.store'
import PropertiesList from '@/components/properties/PropertiesList.vue'
import { onMounted } from 'vue'

//make the storee
const propertyStore = usePropertyStore()

onMounted(() => {
  //load the properties
  propertyStore.getAll()
})
</script>

<template>
  <div class="bg-white w-20">
    <Button label="Submit" />

    <PropertiesList />
  </div>
</template>
