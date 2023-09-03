import "@sveltejs/kit"
import "unplugin-icons/types/svelte";

declare global {
    namespace App {
        // interface Error {}
        // interface Locals {}
        // interface PageData {}
        // interface Platform {}
    }
}

declare module '$lib/asset/*' {
    const meta: unknown[];
    export default meta;
}

export {};
