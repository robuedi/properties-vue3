<script setup lang="ts">
import { usePropertyStore } from '@/stores/property.store'
import Property from '@/models/Property'
import Model from '@/models/Model'
import PropertyItemList from '@/components/properties/PropertyItemList.vue'
import PropertItemListLoadingPlaceholder from '@/components/properties/PropertItemListLoadingPlaceholder.vue'
import { onMounted, ref, watch } from 'vue'

//make the storee
const propertyStore = usePropertyStore()
const paginationLimit = ref(5)
const paginationPage = ref(1)

const sortKey = ref({ label: 'Newest', value: '-created_at' })
const sortOrder = ref()
const sortField = ref('-created_at')
const sortOptions = ref([
  { label: 'Newest', value: '-created_at' },
  { label: 'Oldest', value: 'created_at' },
])
const onSortChange = (event) => {
  const value = event.value.value
  const sortValue = event.value

  if (value.indexOf('!') === 0) {
    sortOrder.value = -1
    sortField.value = value.substring(1, value.length)
    sortKey.value = sortValue
  } else {
    sortOrder.value = 1
    sortField.value = value
    sortKey.value = sortValue
  }
}

//make data request
const makeDataRequest = () => {
  const properties = Property.select('id', 'name', 'price', 'created_at')
    .include('address.city.country')
    .limit(paginationLimit.value)
    .page(paginationPage.value)
    .orderBy(sortKey.value.value)

  propertyStore.getAll(properties)
}

//reload on limit, page change
watch([paginationLimit, paginationPage, sortKey], () => {
  makeDataRequest()
})

const rowsChanged = function (rowsNumber: number) {
  paginationLimit.value = rowsNumber
}

const pageStateChange = function (pageState: { page: number }) {
  paginationPage.value = ++pageState.page
}

onMounted(() => {
  makeDataRequest()
})
</script>

<template>
  <div class="card">
    <DataView
      :value="propertyStore.propertiesListing.data"
      :sortOrder="sortOrder"
      :sortField="sortField"
    >
      <template #header>
        <Select
          v-model="sortKey"
          :options="sortOptions"
          optionLabel="label"
          placeholder="Sort By Date"
          @change="onSortChange($event)"
        />
      </template>
      <template #list="slotProps">
        <div class="flex flex-col">
          <template v-if="propertyStore.propertiesListing.apiState === Model.state.LOADING">
            <PropertItemListLoadingPlaceholder v-for="i in paginationLimit" :key="i" :index="i" />
          </template>
          <PropertyItemList
            v-else
            v-for="(item, index) in slotProps.items"
            :property="item"
            :index="index"
            :key="index"
          />
        </div>
      </template>
    </DataView>
    <Paginator
      @page="pageStateChange"
      @update:rows="rowsChanged"
      :rows="propertyStore.propertiesListing.meta.per_page"
      :totalRecords="propertyStore.propertiesListing.meta.total"
      :rowsPerPageOptions="[5, 10, 20, 30]"
    ></Paginator>
  </div>
</template>
