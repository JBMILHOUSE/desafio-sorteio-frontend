// Header.d.ts
import { defineComponent } from 'vue'; // Importe aqui

declare module './components/Header.vue' {
    import type { PropType } from 'vue';

    export default defineComponent({
        props: {
            menuOpen: {
                type: Boolean as PropType<boolean>,
                required: true,
            },
        },
        methods: {
            emitToggleMenu: () => void,
        },
    });
}