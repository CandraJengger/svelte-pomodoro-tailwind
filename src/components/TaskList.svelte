<script>
  import ListItem from './ListItem.svelte';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  const handleClick = () => dispatch('handleClick');

  export let data = [];
</script>

<div class="row-start-6 row-end-10 p-3 px-4 container bg-red-200">
  <ul class="flex items-center justify-center flex-col list-none">
    {#each data as { text, finished }, i}
      <ListItem {text} {finished} />
    {/each}
  </ul>
</div>
