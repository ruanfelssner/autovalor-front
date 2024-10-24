<script setup lang="ts">
const links = []
</script>

<template>
  <UFooter :links="links">
    <template #left>
      Copyright © {{ new Date().getFullYear() }}
    </template>

    <template #right>
      <UButton icon="i-simple-icons-discord" color="gray" variant="ghost" to="https://discord.com/invite/ps2h6QT" target="_blank" />
    </template>
  </UFooter>
</template>

