import { User } from '@/types'
import { ColumnDef } from '@tanstack/vue-table'
import { h } from 'vue'
import DataTableDropdown from '../DataTableDropdown.vue'
import { Checkbox } from '@/components/ui/checkbox'

export const userColumns: ColumnDef<User>[] = [
{
    id: 'select',
    header: ({ table }) => h(Checkbox, {
    'checked': table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && 'indeterminate'),
    'onUpdate:checked': value => table.toggleAllPageRowsSelected(!!value),
    'ariaLabel': 'Select all',
    }),
    cell: ({ row }) => h(Checkbox, {
    'checked': row.getIsSelected(),
    'onUpdate:checked': value => row.toggleSelected(!!value),
    'ariaLabel': 'Select row',
    }),
    enableSorting: false,
    enableHiding: false,
},
  {
    accessorKey: 'number',
    header: () => h('div', { class: 'text-center w-20' }, 'No.'),
    cell: ({ row }) => {
      return h('div', { class: 'w-20 text-center' }, row.index + 1)
    },
  },
  {
    accessorKey: 'name',
    header: () => h('div', { class: 'text-left' }, 'Name'),
    cell: ({ row }) => {
      return h('div', { class: 'text-left' }, row.original.name)
    },
  },
  {
    accessorKey: 'actions',
    header: () => h('div', { class: 'text-center' }, 'Action'),
    cell: ({ row }) => {
      return h('div', {
        class: 'text-center'
      }, h(DataTableDropdown))
    },
  },
]
