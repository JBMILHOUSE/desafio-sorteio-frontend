<template>
    <footer class="bg-gray-600 text-neutral-300 p-4 sm:p-6">
        <div class="max-w-7xl mx-auto">
            <!-- Links para Termos e Política -->
            <div class="text-center mb-4 sm:mb-6">
                <ul class="space-y-2 sm:flex sm:justify-center sm:space-y-0 sm:space-x-6">
                    <li>
                        <a href="#" class="hover:underline">Termos de Uso</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline">Política de Privacidade</a>
                    </li>
                </ul>
            </div>

            <!-- Redes Sociais -->
            <div class="flex justify-center space-x-6">
                <a href="#" class="hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"
                        stroke="none">
                        <path
                            d="M22.46 6c-.77.35-1.6.59-2.46.69a4.15 4.15 0 001.82-2.29 8.28 8.28 0 01-2.61.99 4.14 4.14 0 00-7.05 3.77 11.74 11.74 0 01-8.53-4.32 4.14 4.14 0 001.28 5.53 4.1 4.1 0 01-1.87-.52v.05a4.14 4.14 0 003.32 4.06c-.74.2-1.52.23-2.28.08a4.14 4.14 0 003.87 2.88A8.32 8.32 0 012 19.53a11.75 11.75 0 006.29 1.84c7.55 0 11.68-6.26 11.68-11.68v-.53A8.36 8.36 0 0024 4.55a8.25 8.25 0 01-2.38.65 4.16 4.16 0 001.82-2.28z" />
                    </svg>
                </a>
                <a href="#" class="hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"
                        stroke="none">
                        <path
                            d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5.25 4.06 9.6 9.25 9.95V15.47h-2.8v-3.08h2.8v-2.14c0-2.77 1.67-4.3 4.17-4.3 1.21 0 2.48.21 2.48.21v2.73h-1.4c-1.38 0-1.8.87-1.8 1.77v2.1h3.06l-.49 3.08h-2.57v6.49C18.93 21.6 22 17.25 22 12z" />
                    </svg>
                </a>
                <a href="#" class="hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"
                        stroke="none">
                        <path
                            d="M21.53 2.47a10.37 10.37 0 00-14.66 0c-4.05 4.06-4.06 10.62 0 14.67a10.37 10.37 0 0014.66 0c4.05-4.05 4.06-10.61 0-14.66zM12 17.84a5.84 5.84 0 110-11.67 5.84 5.84 0 010 11.67zm0-9.68a3.84 3.84 0 100 7.67 3.84 3.84 0 000-7.67zm5.5-.4a1.28 1.28 0 11-2.56 0 1.28 1.28 0 012.56 0z" />
                    </svg>
                </a>
            </div>

            <!-- Direitos Reservados -->
            <div class="text-center mt-6 sm:mt-8">
                <p class="text-sm">© 2024 Sua Empresa. Todos os direitos reservados.</p>
            </div>
        </div>
    </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Footer',
});
</script>

<style scoped>
svg {
    width: 24px;
    height: 24px;
}
</style>