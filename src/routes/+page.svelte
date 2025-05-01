<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
<script lang="ts">
    import { Button } from "$lib/components/ui/button/index.js";
    let { data } = $props();
  </script>
   
  <Button>Click me</Button>

  <ul>
    {#each data.test as te}
      <li>{te.tes}</li>
    {/each}
  </ul>

  
