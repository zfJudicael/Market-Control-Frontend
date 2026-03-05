<template>
    <div class="marketPage">
        Market Page
        <UTable
            :loading="pending"
            loading-color="primary"
            loading-animation="carousel"
            :data="data?.value"
            :columns="columns"
            :ui="{
                th: 'text-md',
                td: 'text-gray-700',
                thead: 'bg-gray-300',
                separator: 'bg-gray-600',
                tbody: 'border-b border-gray-300'
            }"
            class="w-[80%]"
            id="marketTable"
        />
    </div>
</template>

<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui'
import { getMarket } from '~/services/market.service';
import type { IMarket } from '~/types/market';

definePageMeta({
    layout: 'dashboard'
})

const { pending, data} = getMarket();

const columns: TableColumn<IMarket>[] = [
  {
    accessorKey: 'id',
    header: 'Code',
    cell: ({ row }) => row.getValue('id'),
  },
  {
    accessorKey: 'designation',
    header: 'Désignation',
    cell: ({ row }) => row.getValue('designation'),
  },
  {
    accessorKey: 'district',
    header: 'Arrondissement',
    cell: ({ row }) => row.getValue('district'),
  },
  {
    accessorKey: 'stalls',
    header: 'Nombre de places',
    cell: ({ row }) => row.getValue('stalls'),
    meta: {
        class: {
            th: "text-center",
            td: "text-center"
        }
    }
  }
]
</script>

<style lang="scss">
#marketTable{
    tbody{
        tr:hover{
            background-color: rgb(248, 248, 248);
            cursor: default;
        }
    }
}
</style>