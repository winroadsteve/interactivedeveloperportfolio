<script>
  import { projects } from '$lib/projectData';
  import { onMount } from 'svelte';
  import gsap from 'gsap';
  import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".bento-item", {
      scrollTrigger: {
        trigger: ".grid",
        start: "top 85%", 
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15, 
      ease: "power3.out"
    });
  });
</script>

<section id="projects" class="py-20 px-6 lg:px-24">
  <h2 class="text-4xl font-bold mb-12 tracking-tight">Featured Projects</h2>
  
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[250px] md:auto-rows-[300px]">
    {#each projects as project}
      <a 
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        class="bento-item col-span-1 {project.size.includes('row-span-2') ? 'row-span-2' : 'row-span-1'} md:{project.size} 
               {project.color} border border-dark/5 dark:border-light/5 rounded-[1.5rem] md:rounded-[2rem] 
               p-6 md:p-8 flex flex-col justify-between hover:scale-[1.02] transition-transform duration-500 
               cursor-pointer group block no-underline text-inherit select-none"
      >
        <div>
          <div class="flex justify-between items-center">
            <span class="text-[10px] md:text-xs font-mono text-accent uppercase tracking-widest">{project.category}</span>
            <span class="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-accent font-bold">↗</span>
          </div>
          <h3 class="text-xl md:text-2xl font-bold mt-2 group-hover:text-accent transition-colors duration-300">{project.title}</h3>
          <p class="text-muted mt-2 md:mt-4 text-xs md:text-sm max-w-[450px] line-clamp-3">{project.description}</p>
        </div>
        
        <div class="flex gap-2 flex-wrap">
          {#each project.tags as tag}
            <span class="px-2 md:px-3 py-1 bg-white/50 dark:bg-black/20 backdrop-blur-md rounded-full text-[9px] md:text-[10px] font-medium border border-dark/5">
              {tag}
            </span>
          {/each}
        </div>
      </a>
    {/each}
  </div>
</section>