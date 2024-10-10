<template>
    <div v-if="ganhadores.length > 0">
      <div v-for="(ganhador, index) in ganhadores" :key="index">
        <AccordionItem :ganhador="ganhador" />
      </div>
    </div>
    <p v-else>Ainda não há ganhadores.</p>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import AccordionItem from './AccordionItem.vue'; // Importe o componente AccordionItem
  
  export default defineComponent({
    components: { AccordionItem },
    props: {
      ganhadores: {
        type: Array,
        required: true,
      },
    },
  });
  </script>