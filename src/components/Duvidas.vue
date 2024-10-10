<template>
    <section class="max-w-7x1 mx-auto p-4 mt-6 mb-8">
        <h1 class="text-2xl font-bold mb-6 text-center sm:text-3xl text-neutral-500">
            Dúvidas Frequentes
        </h1>
        <ul class="space-y-6">
            <li v-for="(faq, index) in faqs" :key="index" class="border-b pb-4">
                <button @click="toggleAnswer(index)"
                    class="w-full flex justify-between items-center text-left text-xl font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md p-3 focus:outline-none sm:text-2xl">
                    {{ faq.question }}

                    <svg :class="{ 'rotate-180': faq.open }" xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6 transition-transform transform" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>

                <p v-if="faq.open" class="mt-2 text-lg text-gray-600 bg-gray-50 p-3 rounded-md sm:text-xl">
                    {{ faq.answer }}
                </p>
            </li>
        </ul>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Duvidas',
    data() {
        return {
            faqs: [
                {
                    question: 'Como faço para me cadastrar?',
                    answer:
                        'Para se cadastrar, clique no botão "Cadastrar-se" no topo do site e preencha o formulário de inscrição.',
                    open: false,
                },
                {
                    question: 'Quais são os prêmios?',
                    answer:
                        'Os prêmios incluem um carro 0km, uma viagem internacional, e um smartphone de última geração.',
                    open: false,
                },
                {
                    question: 'Quando será o sorteio?',
                    answer: 'O sorteio será realizado no dia 20 de dezembro de 2024.',
                    open: false,
                },
            ],
        };
    },
    methods: {
        toggleAnswer(index: number) {
            this.faqs[index].open = !this.faqs[index].open;
        },
    },
});
</script>