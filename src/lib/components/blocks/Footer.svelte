<script>
  import { onMount } from 'svelte';
  import gsap from 'gsap';

  onMount(() => {
    gsap.from(".footer-card", {
      scrollTrigger: {
        trigger: "#contact",
        start: "top 90%",
      },
      y: 30,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8
    });
  });
</script>

<footer id="contact" class="py-20 px-6 lg:px-24">
  <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
    
    <div class="footer-card md:col-span-3 bg-accent p-10 md:p-16 rounded-[2rem] text-dark flex flex-col justify-between items-start min-h-[300px]">
      <h2 class="text-4xl md:text-6xl font-bold tracking-tighter leading-none">
        Let’s build the <br/> next big thing.
      </h2>
      <a href="mailto:your-email@intech.com" class="mt-8 px-8 py-4 bg-dark text-light rounded-full font-bold hover:scale-105 transition-transform">
        Get in touch
      </a>
    </div>

    <div class="footer-card bg-dark/5 dark:bg-white/5 border border-dark/10 dark:border-white/10 p-8 rounded-[2rem] flex flex-col justify-between">
      <span class="text-xs font-mono uppercase tracking-widest text-muted">Socials</span>
      <div class="flex flex-col gap-4 mt-8">
        <a href="#" class="text-lg font-medium hover:text-accent transition-colors">LinkedIn</a>
        <a href="#" class="text-lg font-medium hover:text-accent transition-colors">GitHub</a>
        <a href="#" class="text-lg font-medium hover:text-accent transition-colors">Twitter</a>
      </div>
    </div>

    <div class="footer-card md:col-span-2 bg-emerald-500/10 border border-emerald-500/20 p-8 rounded-[2rem] flex items-center gap-4">
      <div class="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
      <span class="text-sm font-medium text-emerald-600 dark:text-emerald-400">Available for new opportunities in 2026</span>
    </div>

    <div class="footer-card md:col-span-2 bg-dark/5 dark:bg-white/5 border border-dark/10 dark:border-white/10 p-8 rounded-[2rem] flex justify-between items-center">
      <span class="text-sm font-medium">Based in Nigeria 🇳🇬</span>
      <span class="text-xs font-mono opacity-50">Local Time: {new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
    </div>

  </div>

  <div class="mt-20 pt-8 border-t border-dark/10 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono opacity-50 uppercase tracking-widest">
    <p>© 2026 Emma | InTech Academy</p>
    <p>Built with SvelteKit & GSAP</p>
  </div>
</footer>