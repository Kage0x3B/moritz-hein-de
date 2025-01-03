import preprocess from 'svelte-preprocess';
import adapterStatic from '@sveltejs/adapter-static';
import {vitePreprocess} from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: [
        vitePreprocess(),
        preprocess({
            postcss: true
        })
    ],
    kit: {
        adapter: adapterStatic(),
        prerender: {
            handleHttpError: ({path, message}) => {
                // Ignore 404 links to files
                if (/\.\w{1,4}$/.test(path)) {
                    console.warn(`File not found ${path} (error: ${message})`);

                    return;
                }

                throw new Error(message);
            },
            handleMissingId: 'warn'
        }
    }
};

export default config;
