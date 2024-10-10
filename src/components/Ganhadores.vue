<template>
    <section class="max-w-7xl mx-auto p-4 mb-8">
        <h1 class="text-2xl font-bold mb-6 text-center sm:text-3xl text-neutral-500">
            Ganhadores
        </h1>

        <Accordion :ganhadores="ganhadores" />
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Accordion from './Accordion.vue';
import AccordionItem from './AccordionItem.vue';

export default defineComponent({
    components: {
        Accordion,
        AccordionItem,
    },
    data() {
        return {
            ganhadores: [], // Inicializa a lista de ganhadores
        };
    },
    mounted() {
        this.fetchGanhadores();
    },
    methods: {
        async fetchGanhadores() {
            try {
                const response = await fetch('http://localhost:3333/ganhadores'); // Substitua pela URL da API
                console.log(response)
                if (!response.ok) {
                    throw new Error(`Erro na resposta: ${response.status} ${response.statusText}`);
                }
                const data = await response.json();
                this.ganhadores = data;
            } catch (error) {
                console.error('Erro ao buscar dados da API:', error);
            }
        },
    },
});
</script>