<template>
  <div>
    <UCard class="mt-10">
      <UInput
        :loading="status === 'pending'"
        icon="i-heroicons-magnifying-glass-20-solid"
        size="sm"
        color="white"
        :trailing="false"
        placeholder="Digite marca modelo e ano do veículo"
        class="mb-4"
        v-model="search"
      />
      <div class="flex flex-col">
        <p v-for="(item, id) of data" :key="`${id}-list`">{{ `${item.marca} - ${item.modelo} - ${item.anoModelo} - ${item.mesReferencia}/${item.anoReferencia} - R$ ${item.valor}` }}</p>
      </div>
      <div class="flex">
        <Chart
          type="line"
          :data="{
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
              {
                label: 'Data One',
                backgroundColor: '#f87979',
                data: [40, 39, 10, 40, 39, 80, 40],
              },
            ],
          }"
        />
      </div>
    </UCard>
  </div>
</template>

<script lang="ts" setup>
import type { FipeItem } from '@@/schemas/fipe'
const search = ref<string>('');
const { data, status, execute } = await useAsyncData<FipeItem[]>(() => $fetch('/api/search', {
  method: "GET",
  query: { search: search.value }
}))

watch(search, () => {
  execute();
});
</script>
