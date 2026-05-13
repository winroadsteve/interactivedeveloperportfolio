<script>
  import { onMount } from 'svelte';
  import gsap from 'gsap';

  let cursor;
  let follower;

  onMount(() => {
    // Hide default cursor on the whole body
    document.body.style.cursor = 'none';

    const moveCursor = (e) => {
      // Main dot follows mouse exactly
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1
      });

      // Outer ring follows with a slight delay (the "Spring" effect)
      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: "power3.out"
      });
    };

    window.addEventListener('mousemove', moveCursor);

    // Interaction Logic: Expand cursor when hovering over links/buttons
    const links = document.querySelectorAll('a, button, .bento-item');
    links.forEach(link => {
      link.addEventListener('mouseenter', () => {
        gsap.to(follower, { scale: 2.5, backgroundColor: "rgba(255,255,255,0.1)", duration: 0.3 });
        gsap.to(cursor, { scale: 0.5, duration: 0.3 });
      });
      link.addEventListener('mouseleave', () => {
        gsap.to(follower, { scale: 1, backgroundColor: "transparent", duration: 0.3 });
        gsap.to(cursor, { scale: 1, duration: 0.3 });
      });
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.body.style.cursor = 'default';
    };
  });
</script>

<div bind:this={cursor} class="fixed top-0 left-0 w-2 h-2 bg-accent rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"></div>

<div bind:this={follower} class="fixed top-0 left-0 w-10 h-10 border border-accent/50 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-colors"></div>

<style>
  :global(body) {
    cursor: none !important;
  }
  :global(a, button) {
    cursor: none !important;
  }
</style>