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
        <p v-for="(item, id) of data" :key="`${id}-list`" class="mb-2" v-show="fipe === null || item._id === fipe">
          <UButton @click="getFipeData(item._id)">{{ `${item.mark.name} ${item.model} - ${item.year}` }}</UButton>
        </p>
        <hr v-if="(data ?? []).length > 0" class="my-8">
      </div>
      <div class="flex" v-if="(data ?? []).length > 0">
        <Chart
          type="bar"
          :data="chartData"
          :options="{ responsive: true, maintainAspectRatio: false }"
        />
      </div>
    </UCard>
  </div>
</template>

<script lang="ts" setup>
import type { CarItem, FipeItem } from '@@/schemas/fipe'
const search = ref<string>('');
const fipe = ref<string | null>(null);
const { data, status, execute } = await useAsyncData<CarItem[]>('searchData', () => $fetch('/api/search', {
  method: "GET",
  params: { search: search.value }
}), { immediate: false });


const chartData = ref<any>({
  labels: [],
  datasets: [],
});

const getFipeData = async (id?: string) => {
  id ? fipe.value = id : null;
  const dataFipe = await $fetch<FipeItem[]>('/api/fipe/'+id);
  if(dataFipe.length > 0){
    chartData.value = {
      labels: dataFipe.map((item: FipeItem) => `${item.month}/${item.year}`),
      datasets: [
        {
          label: 'Valor',
          backgroundColor: '#f87979',
          data: dataFipe.map((item: FipeItem) => item.value),
        },
      ],
    };
  }
}


watch(search, () => {
  if(search){
    execute();
  }
});
</script>
