<script setup>
import BestSellingWidget from '@/components/dashboard/BestSellingWidget.vue'
import NotificationsWidget from '@/components/dashboard/NotificationsWidget.vue'
import StatsWidget from '@/components/dashboard/StatsWidget.vue'
import { ref } from 'vue'

const breadcrumbHome = ref({ icon: 'pi pi-home', to: '/' })
const breadcrumbItems = ref([{ label: 'Computer' }, { label: 'Notebook' }])
</script>

<template>
  <div class="mt-5 mb-10">
    <Breadcrumb :home="breadcrumbHome" :model="breadcrumbItems" />
    <h1 class="mb-0">Dashboard</h1>
  </div>
  <div class="grid grid-cols-12 gap-8">
    <StatsWidget class="col-span-4" />
    <BestSellingWidget class="col-span-4" />
    <NotificationsWidget class="col-span-4" />
  </div>
</template>
