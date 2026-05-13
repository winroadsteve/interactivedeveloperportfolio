<script lang="ts">
  import { onMount } from 'svelte';
  import { gsap } from 'gsap';

  let container: HTMLElement;

  onMount(() => {
    const ctx = gsap.context(() => {
      // The "Engineered" Entrance: Text slides up and fades in
      gsap.from(".reveal", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power4.out",
        delay: 0.2
      });
    }, container);

    return () => ctx.revert(); // Cleanup to prevent memory leaks
  });
</script>

<section 
  bind:this={container} 
  class="relative min-h-screen flex flex-col justify-center px-6 lg:px-24 bg-light dark:bg-dark"
>
  <!-- Background Ambient Glow (The "Premium" touch) -->
  <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>

  <div class="max-w-4xl">
    <p class="reveal font-mono text-accent text-sm tracking-widest uppercase mb-4">
      Full-Stack Software Engineer
    </p>
    
    <h1 class="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tighter leading-tight">
  Full-Stack <span class="text-accent">Software Engineer</span>
</h1>

    <p class="reveal text-muted text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
      Specializing in high-performance web applications and creative interaction design. Currently crafting the future of digital education at InTech.
    </p>

    <div class="reveal flex flex-wrap gap-4">
      <a 
        href="#projects" 
        class="px-8 py-4 bg-dark dark:bg-light text-light dark:text-dark font-medium rounded-full hover:scale-105 transition-transform"
      >
        View Projects
      </a>
      <a 
        href="/resume.pdf" 
        class="px-8 py-4 border border-dark/10 dark:border-light/10 font-medium rounded-full hover:bg-dark/5 dark:hover:bg-light/5 transition-colors"
      >
        Download CV
      </a>
    </div>
  </div>
</section>