<div class="page-bg">
    <div class="bg-primary/30 top-[50vh] h-[80vh]"></div>
    <div class="bg-primary/50 top-[50vh] h-[76vh] rotate-[-1deg]"></div>
    <div class="bg-primary top-[50vh] h-[75vh] rotate-[-3deg]"></div>
</div>

<style>
    @import 'tailwindcss/theme' theme(reference);

    .page-bg {
        @apply absolute h-[100vh] w-full overflow-hidden;
    }

    .page-bg > div {
        @apply absolute w-[120vw] translate-x-[-10%] translate-y-[-50%];
    }
</style>
