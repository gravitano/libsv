<script setup lang="ts">
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Head } from "@inertiajs/vue3";
import DataTable from "@/Components/DataTable.vue";

import { usePage } from "@inertiajs/vue3";
import { userColumns } from "@/Components/Users/usersColumns";
import { User } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const page = usePage();
const users = page.props.users as User[];
</script>

<template>
    <Head title="Users" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="text-xl font-semibold leading-tight text-gray-800">
                Users
            </h2>
        </template>

        <div class="container mx-auto mt-6">
            <Card>
                <CardHeader>
                    <CardTitle>
                        Users
                    </CardTitle>
                </CardHeader>
                <CardContent >
                    <DataTable :columns="userColumns" :data="users" />
                </CardContent>
            </Card>
        </div>
    </AuthenticatedLayout>
</template>
