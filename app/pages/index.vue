<template>
  <div>
    <ClientOnly>
      <Chart type="line" :data="{
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: [40, 39, 10, 40, 39, 80, 40],
          },
        ],
      }" />
    </ClientOnly>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>