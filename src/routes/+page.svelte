<script lang="ts">
    import moritzHeinImg from '$lib/asset/image/moritz-hein-zoomed.jpg?as=run&width=300;400;500&format=avif;webp;jpg';
    import Img from '@zerodevx/svelte-img';
    import Fa6SolidPaperPlane from '~icons/fa6-solid/paper-plane';
    import Fa6BrandsLinkedinIn from '~icons/fa6-brands/linkedin-in';
    import Fa6BrandsGithub from '~icons/fa6-brands/github';
    import Fa6BrandsInstagram from '~icons/fa6-brands/instagram';
    import PageBackground from '$lib/components/PageBackground.svelte';
</script>

<svelte:head>
    <title>Moritz Hein</title>
</svelte:head>

<PageBackground />
<div class="flex h-[100vh] w-full items-center justify-center">
    <div class="card bg-base-100 min-w-xl overflow-hidden shadow-sm">
        <div class="card-body flex flex-row items-center justify-around gap-8">
            <div class="avatar">
                <div class="ring-offset-base-100 w-48 rounded-full ring ring-neutral-300 ring-offset-2">
                    <Img src={moritzHeinImg} />
                </div>
            </div>
            <div class="px-8 text-center">
                <h1 class="card-title font-display text-4xl font-medium">
                    Hello, I'm <span class="font-bold">Moritz Hein</span>
                </h1>
                <h2 class="text-accent/90 font-sans text-xl italic">Software Developer</h2>
            </div>
        </div>
        <div class="card-actions flex w-full justify-center gap-0 bg-[#23374d] text-gray-100">
            <div class="tooltip" data-tip="Email me at moritz.hein@live.de">
                <a
                    href="mailto:moritz.hein@live.de"
                    class="btn btn-lg btn-ghost btn-accent group rounded-none !border-0 px-3 py-8 shadow-none hover:text-[#239ab9]"
                    ><Fa6SolidPaperPlane class="size-6 transition-transform group-hover:-translate-y-0.5" /></a
                >
            </div>
            <div class="tooltip" data-tip="Connect with me on LinkedIn">
                <a
                    href="https://www.linkedin.com/in/moritz-hein"
                    rel="external"
                    target="_blank"
                    class="btn btn-lg btn-ghost btn-accent group rounded-none !border-0 px-3 py-8 shadow-none hover:text-[#0077b5]"
                    ><Fa6BrandsLinkedinIn class="size-7 transition-transform group-hover:-translate-y-0.5" /></a
                >
            </div>
            <div class="tooltip" data-tip="Check out my projects on Github">
                <a
                    href="https://github.com/Kage0x3B"
                    rel="external"
                    target="_blank"
                    class="btn btn-lg btn-ghost btn-accent group rounded-none !border-0 px-3 py-8 shadow-none hover:text-[#6e5494]"
                    ><Fa6BrandsGithub class="size-7 transition-transform group-hover:-translate-y-0.5" /></a
                >
            </div>
            <div class="tooltip" data-tip="Visit my Instagram">
                <a
                    href="https://www.instagram.com/moritz.hein"
                    rel="external"
                    target="_blank"
                    class="btn btn-lg btn-ghost btn-accent group rounded-none !border-0 px-3 py-8 shadow-none hover:text-[#e1306c]"
                    ><Fa6BrandsInstagram class="size-7 transition-transform group-hover:-translate-y-0.5" /></a
                >
            </div>
        </div>
    </div>
</div>
<div class="fixed right-0 bottom-0">
    <footer class="px-2 py-1 text-lg text-neutral-500">
        <small>&copy; Copyright 2024, Moritz Hein - <a href="/imprint">Imprint</a></small>
    </footer>
</div>
