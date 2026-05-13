<script>
  import "../app.css";
  import ThemeToggle from "$lib/components/blocks/ThemeToggle.svelte";
  import Navbar from "$lib/components/blocks/Navbar.svelte";
  import CustomCursor from "$lib/components/ui/CustomCursor.svelte";
</script>

<CustomCursor />
<ThemeToggle />
<Navbar />
<slot />