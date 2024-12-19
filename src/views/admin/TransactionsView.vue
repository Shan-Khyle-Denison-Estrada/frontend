<script setup>
import mock_data from "../../mock_data.json"
import { ref, h } from "vue"
import { format } from "date-fns"
import actionButtons from "../../components/admin-components/actionButtons.vue"
import colFilters from "../../components/admin-components/colFilter.vue"
import {
    useVueTable,
    FlexRender,
    getCoreRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    getFilteredRowModel,
} from "@tanstack/vue-table"

const data = ref(mock_data)

// [{"transaction_id":1,
// "first_name":"Georas",
// "middle_name":"Josephs",
// "last_name":"Hutchins",
// "client_type":"student",
// "transaction_type":"replacement",
// "date_created":"09/19/2025",
// "status":"print ready"},

const columnsMockData = [
{
        accessorKey: 'transaction_id',
        header: 'Transaction id'
        
    },
    {
        accessorFn: row => `${row.first_name} ${row.middle_name.charAt(0).toUpperCase()}. ${row.last_name}`,
        header: 'Full name',
    },
    // {
    //     accessorKey: 'first_name',
    //     header: 'First name'
    // },
    // {
    //     accessorKey: 'middle_name',
    //     header: 'Middle name'
    // },
    // {
    //     accessorKey: 'last_name',
    //     header: 'Last name'
    // },
    {
        accessorKey: 'client_type',
        header: 'Client type',
    },
    {
        accessorKey: 'transaction_type',
        header: 'Transaction type'
    },
    {
        accessorKey: 'date_created',
        header: 'Date',
        cell: info => format(new Date(info.getValue()), 'MMM d, yyyy'), //formatting date using the Date-FNS library
    },
    {
        accessorKey: 'status',
        header: 'Status'
    },
    {
        accessorKey: 'actions',
        header: 'Actions',
        cell: ({ row }) => h(actionButtons, {id: row.original.id}),
        enableSorting: false,
    },
]

const sorting = ref([])
const filter = ref('')
const clientTypeFilter = ref('')

const table = useVueTable({
    data: data.value,
    columns: columnsMockData,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
        get sorting() {
            return sorting.value
        },
        get globalFilter() {
            return filter.value
        },
    },
    onSortingChange: updaterOrValue => {
        sorting.value = typeof updaterOrValue === 'function' ? updaterOrValue(sorting.value) : updaterOrValue
    },

    initialState: { //Default for tanstack table is 10 rows per page
        pagination: {
            pageSize: 10,
        }
    },
})
</script>

<template>
    <div class="min-h-viewport-minus-adminnav px-4 xsm:px-6 lg:px-8">
        <div class="flow-root">
            <div class="flex justify-center items-center gap-4"><!--Container for the filters (global and column)-->
                <input type="text" class="md:basis-1/3 xsm:basis-3/4 border border-gray-400 rounded-lg py-2" placeholder="Search" v-model="filter"><!--Global filter-->
                </input>
                <fieldset class="flex flex-row"><!--Container for client type filter-->
                    <div>
                        <p class="font-medium mb-1">Client Type:</p>
                        <div class="flex flex-row justify-items-center gap-2">
                            <div class="flex items-center">
                                <input checked id="all" type="radio" value="all" name="client-type" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" v-model="filter">
                                <label for="all" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">All</label>
                            </div>
                            <div class="flex items-center">
                                <input id="default-radio-2" type="radio" value="student" name="client-type" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" v-model="filter">
                                <label for="default-radio-2" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Student</label>
                            </div>
                            <div class="flex items-center">
                                <input id="default-radio-2" type="radio" value="employee" name="client-type" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" v-model="filter">
                                <label for="default-radio-2" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Employee</label>
                            </div>
                        </div>
                    </div>        
                </fieldset>
            </div>
            <div class="-mx-4 -my-2 overflow-x-auto xsm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 align-middle xsm:px-6 lg:px-8">
                    <table class="min-w-full divide-y divide-gray-300">
                        <thead>
                            <tr v-for="headerGroup in table.getHeaderGroups()" :key="headerGroup.id">
                                <th v-for="header in headerGroup.headers" :key="header.id" scope="col" class="text-left px-3 py-3.5 text-sm font-semibold text-gray-900" :class="{ 'cursor-pointer select-none' : header.column.getCanSort() }" @click="header.column.getToggleSortingHandler()?.($event)">
                                    <FlexRender :render="header.column.columnDef.header" :props="header.getContext()"/>
                                    <span v-if="header.column.id !== 'actions'">
                                    {{
                                        { asc: '&#x2191;', desc: '&#x2193;' }[header.column.getIsSorted()] 
                                        ? { asc: '&#x2191;', desc: '&#x2193;' }[header.column.getIsSorted()] 
                                        : '&#10572;'
                                    }}
                                    </span>
                                </th>
                            </tr>             
                        </thead>
                        <tbody class="divide-y divide-gray-200">
                            <tr v-for="row in table.getRowModel().rows" :key="row.id">
                                <td v-for="cell in row.getVisibleCells()" :key="cell.id" class="text-left whitespace-nowrap px-3 md:py-3 xsm:py-4 text-sm text-gray-500">
                                    <FlexRender :render="cell.column.columnDef.cell" :props="cell.getContext()"/>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="space-x-4 mt-4 mb-4"> <!--Container for pagination-->
                <div class="flex justify-center items-center gap-1">
                    <!--First page button-->
                    <button title="First page" class="border border-gray-300 rounded px-2 py-2 disabled: opacity-50 disabled:cursor-not-allowed" :disabled="!table.getCanPreviousPage()" @click="table.setPageIndex(0)">
                        <svg width="16" height="16" viewBox="0 0 26 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24.1787 2L12.1787 14L24.1787 26" stroke="black" stroke-width="4" stroke-linecap="round"/>
                            <path d="M14.8086 2L2.80859 14L14.8086 26" stroke="black" stroke-width="4" stroke-linecap="round"/>
                        </svg>
                    </button>
                    <!--Previous button-->
                    <button title="Previous page" class="border border-gray-300 rounded px-2 py-2 disabled: opacity-50 disabled:cursor-not-allowed" :disabled="!table.getCanPreviousPage()" @click="table.previousPage()">
                        <svg width="16" height="16" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.6572 2L2.65723 14L14.6572 26" stroke="black" stroke-width="4" stroke-linecap="round"/>
                        </svg>
                    </button>
                    <p class="inline">Page {{ table.getState().pagination.pageIndex + 1}} of {{ table.getPageCount() }} - {{ table.getFilteredRowModel().rows.length }} results</p>
                    <!--Next button-->
                    <button title="Next page" class="border border-gray-300 rounded px-2 py-2 disabled: opacity-50 disabled:cursor-not-allowed" :disabled="!table.getCanNextPage()" @click="table.nextPage()">
                        <svg width="16" height="16" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.52148 2L13.5215 14L1.52148 26" stroke="black" stroke-width="4" stroke-linecap="round"/>
                        </svg>

                    </button>
                    <!--Last page button-->
                    <button title="Last page" class="border border-gray-300 rounded px-2 py-2 disabled: opacity-50 disabled:cursor-not-allowed" :disabled="!table.getCanNextPage()" @click="table.setPageIndex(table.getPageCount() - 1)">
                        <svg width="16" height="16" viewBox="0 0 26 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 2L14 14L2 26" stroke="black" stroke-width="4" stroke-linecap="round"/>
                            <path d="M11.3701 2L23.3701 14L11.3701 26" stroke="black" stroke-width="4" stroke-linecap="round"/>
                        </svg>

                    </button>
                </div>
            </div>
        </div>
    </div>
</template>