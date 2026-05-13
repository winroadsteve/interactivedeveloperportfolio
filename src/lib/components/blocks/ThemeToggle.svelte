<script>
  import { isDarkMode } from '$lib/theme';
  import { onMount } from 'svelte';

  function toggle() {
    isDarkMode.update(v => !v);
  }

  $: if (typeof document !== 'undefined') {
    document.documentElement.classList.toggle('dark', $isDarkMode);
  }
</script>

<button 
  on:click={toggle}
  class="fixed top-8 right-8 z-50 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/20 transition-all"
>
  {$isDarkMode ? '☀️' : '🌙'}
</button>

<button 
  on:click={toggle}
  aria-label="Toggle between dark and light mode"
  aria-live="polite"
  class="fixed top-8 right-8 z-50 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/20 transition-all focus:outline-none focus:ring-2 focus:ring-accent"
>
  {$isDarkMode ? '☀️' : '🌙'}
</button>