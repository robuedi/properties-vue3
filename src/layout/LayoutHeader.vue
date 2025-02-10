<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <header
    class="py-1 bg-white md:px-10 lg:px-38 xl:px-48 border-b-1 border-solid border-surface-border relative lg:static"
  >
    <Menubar class="border-0 bg-transparent text-md font-bold">
      <template #start>
        <Button
          @click="router.push({ name: 'home' })"
          style="height: 50px; width: 50px"
          class="mr-4"
          icon="pi pi-home"
          severity="primary"
          rounded
          size="large"
          aria-label="home"
        />
      </template>
    </Menubar>
  </header>
</template>
