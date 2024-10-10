<template>
  <header class="bg-gray-600 p-4 text-white">
    <div class="container mx-auto flex justify-between items-center relative">
      <div class="text-lg font-bold">LOGO</div>

      <!-- Menu hambúrguer -->
      <div class="flex flex-col items-center">
        <button
          class="block lg:hidden focus:outline-none"
          @click="emitToggleMenu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        <!-- Navegação -->
        <nav :class="{ block: menuOpen, 'hidden lg:block': !menuOpen }">
          <ul class="flex flex-col lg:flex-row gap-6 text-center">
            <li><a href="#home" class="hover:text-gray-300">Home</a></li>
            <li>
              <a href="#como-participar" class="hover:text-gray-300"
                >Como Participar</a
              >
            </li>
            <li><a href="#premios" class="hover:text-gray-300">Prêmios</a></li>
            <li>
              <a href="#duvidas" class="hover:text-gray-300"
                >Dúvidas Frequentes</a
              >
            </li>
            <li>
              <a href="#ganhadores" class="hover:text-gray-300">Ganhadores</a>
            </li>
          </ul>
        </nav>
      </div>

      <div class="hidden lg:block">
        <button
          class="border border-white px-4 py-2 text-white rounded hover:bg-gray-500 transition"
        >
          Login/Cadastrar
        </button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    menuOpen: {
      type: Boolean,
      required: true, // O menuOpen é obrigatório e vem do App.vue
    },
  },
  methods: {
    emitToggleMenu() {
      this.$emit('toggle-menu'); // Alterna entre aberto/fechado
    },
  },
};
</script>

<style scoped>
/* Estilo mobile-first */
nav ul {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  text-align: center;
}

/* Para telas grandes */
@media (min-width: 1024px) {
  nav ul {
    flex-direction: row;
    justify-content: center;
  }
}
</style>
