/// <reference types="vite/client" />
declare module '@jamescoyle/vue-icon';
declare module 'js-cookie';

declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
}