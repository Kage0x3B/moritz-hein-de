<script lang="ts">
    import '$lib/css/app.css';
    import type { Snippet } from 'svelte';
    import { page } from '$app/state';

    interface Props {
        children?: Snippet;
    }

    let { children }: Props = $props();
</script>

<svelte:head>
    <link rel="canonical" href="https://moritz.website{page.url.pathname}" />
</svelte:head>

{@render children?.()}
