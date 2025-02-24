<script setup>
import { ref } from 'vue'

import AppMenuItem from './AppMenuItem.vue'

const model = ref([
  {
    label: 'Home',
    items: [{ label: 'All Properties', icon: 'pi pi-fw pi-home', to: '/' }],
  },
  {
    label: 'My Properties',
    icon: 'pi pi-fw pi-briefcase',
    to: '/properties',
    items: [
      {
        label: 'All',
        icon: 'pi pi-fw pi-globe',
        to: '/my-properties/all',
      },
      {
        label: 'Manage',
        icon: 'pi pi-fw pi-user',
        items: [
          {
            label: 'Add',
            icon: 'pi pi-fw pi-sign-in',
            to: '/my-properties/add',
          },
        ],
      },
    ],
  },
])
</script>

<template>
  <ul class="layout-menu">
    <template v-for="(item, i) in model" :key="item">
      <app-menu-item v-if="!item.separator" :item="item" :index="i"></app-menu-item>
      <li v-if="item.separator" class="menu-separator"></li>
    </template>
  </ul>
</template>

<style lang="scss" scoped></style>
