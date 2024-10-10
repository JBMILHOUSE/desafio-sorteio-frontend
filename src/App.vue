<template>
  <div class="min-h-screen flex flex-col">
    <Header :menuOpen="menuOpen" @toggle-menu="toggleMenu" />
    <main class="flex-grow">
      <section id="home">
        <MainContent />
      </section>
      <section id="como-participar">
        <ComoParticipar />
      </section>
      <section id="premios">
        <Premios />
      </section>
      <section id="duvidas">
        <Duvidas />
      </section>
      <section id="ganhadores">
        <Ganhadores />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </main>
  </div>
</template>

<script lang="ts">
import Header from './components/Header.vue';
import MainContent from './components/MainContent.vue';
import ComoParticipar from './components/ComoParticipar.vue';
import Premios from './components/Premios.vue';
import Duvidas from './components/Duvidas.vue';
import Ganhadores from './components/Ganhadores.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Header,
    MainContent,
    ComoParticipar,
    Premios,
    Duvidas,
    Ganhadores,
    Footer
  },
  data() {
    return {
      menuOpen: false, // Controle do menu
    };
  },
  methods: {
    toggleMenu() {
      // Alterna o estado do menu
      this.menuOpen = !this.menuOpen;
    },
  },
};
</script>
