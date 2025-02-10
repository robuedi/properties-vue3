<script lang="ts" setup>
import LayoutHeader from '@/layout/LayoutHeader.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen bg-surface-ground p-component">
    <LayoutHeader />

    <main class="grow flex flex-col p-8 md:mx-10 lg:mx-38 xl:mx-48">
      <slot></slot>
    </main>
  </div>
</template>
