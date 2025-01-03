<script lang="ts">
    import Img from '@zerodevx/svelte-img';
    import faceImg from '$lib/asset/image/moritz-hein.jpg?as=run&width=230;512&format=avif;webp;jpg';
    import { Tooltip } from 'sveltestrap';
    import IconPaperplane from '~icons/fa-solid/paper-plane';
    import IconLinkedIn from '~icons/fa-brands/linkedin-in';
    import IconGithub from '~icons/fa-brands/github';
    import IconInstagram from '~icons/fa-brands/instagram';
</script>

<main>
    <section id="home">
        <div class="home-bg">
            <div class="part"></div>
            <div class="part"></div>

            <div class="home-container">
                <div class="info-card">
                    <div class="avatar">
                        <Img src={faceImg} loading="eager" decoding="sync" alt="Moritz Hein" width="230" />
                    </div>
                    <div class="info-text">
                        <span class="greeting">Hello, I'm <span class="name">Moritz Hein</span></span>
                        <div class="description">Software Developer</div>
                    </div>
                </div>
                <div class="social-icons">
                    <div aria-label="Social links" class="social-links" role="group">
                        <a
                            id="btn-email"
                            class="btn btn-social"
                            href="mailto:moritz.hein@live.de"
                            role="button"
                            target="_blank"
                        >
                            <IconPaperplane />
                            <span class="visually-hidden">LinkedIn</span></a
                        >
                        <Tooltip target="btn-email" placement="top">E-Mail me at moritz.hein@live.de</Tooltip>
                        <a
                            id="btn-linkedin"
                            class="btn btn-social"
                            href="https://www.linkedin.com/in/moritz-hein/"
                            role="button"
                            target="_blank"
                        >
                            <IconLinkedIn />
                            <span class="visually-hidden">LinkedIn</span></a
                        >
                        <Tooltip target="btn-linkedin" placement="top">Connect with me on LinkedIn</Tooltip>
                        <a
                            id="btn-github"
                            class="btn btn-social"
                            href="https://github.com/Kage0x3B"
                            role="button"
                            target="_blank"
                        >
                            <IconGithub />
                            <span class="visually-hidden">Github</span></a
                        >
                        <Tooltip target="btn-github" placement="top">Check out my projects on Github</Tooltip>
                        <a
                            id="btn-instagram"
                            class="btn btn-social"
                            href="https://www.instagram.com/moritz.hein/"
                            role="button"
                            target="_blank"
                        >
                            <IconInstagram />
                            <span class="visually-hidden">Instagram</span></a
                        >
                        <Tooltip target="btn-instagram" placement="top">Visit my Instagram</Tooltip>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>
<footer>
    <small>&copy; Copyright 2023, Moritz Hein - <a href="/imprint" class="text-decoration-none">Imprint</a></small>
</footer>
