<!-- AccordionItem.vue -->
<template>
    <div class="border rounded p-4 mb-4">
        <h2 class="font-bold cursor-pointer" @click="toggleOpen">
            Nome: {{ ganhador.name }}
        </h2>
        <div v-if="isOpen" class="mt-2">
            <p>Prêmio: {{ ganhador.prize }}</p>
            <p>Data: {{ new Date(ganhador.date).toLocaleDateString() }}</p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, } from 'vue';

export default defineComponent({
    props: {
        ganhador: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            isOpen: false,
        };
    },
    methods: {
        toggleOpen() {
            this.isOpen = !this.isOpen;
        },
    },
});
</script>