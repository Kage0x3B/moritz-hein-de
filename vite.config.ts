import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import Icons from 'unplugin-icons/vite';
import { imagetools } from '@zerodevx/svelte-img/vite';

export default defineConfig({
    plugins: [
        sveltekit(),
        imagetools(),
        Icons({
            compiler: 'svelte'
        })
    ],
    server: {
        host: true,
        port: 5174,
        strictPort: true
    },
    preview: {
        host: true,
        port: 5174,
        strictPort: true
    },
    define: {
        'process.env': {},
        process: { env: {} }
    },
    test: {
        include: ['src/**/*.{test,spec}.{js,ts}']
    }
});
