<script lang="ts">
    import '$lib/css/main.scss';
    interface Props {
        children?: import('svelte').Snippet;
    }

    let { children }: Props = $props();
</script>

<svelte:head>
    <title>Moritz Hein</title>
</svelte:head>

{@render children?.()}
