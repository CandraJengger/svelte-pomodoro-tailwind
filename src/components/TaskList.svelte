<script>
  import { onDestroy } from 'svelte';
  import ListItem from './ListItem.svelte';

  import { todos } from '../store';
  let todos_dummy = [
    {
      text: 'Macul',
      finished: false,
    },
    {
      text: 'Ngarit',
      finished: false,
    },
    {
      text: 'Mancing',
      finished: false,
    },
  ];

  let todos_value;
  const unsubscribe = todos.subscribe((value) => {
    todos_value = [...value];
  });

  onDestroy(unsubscribe);
</script>

<div class="row-start-6 row-end-10 p-3 px-4 container bg-red-200">
  <ul class="flex items-center justify-center flex-col list-none">
    {#each todos_value as { text, finished }, i}
      <ListItem {text} />
    {/each}
  </ul>
</div>
