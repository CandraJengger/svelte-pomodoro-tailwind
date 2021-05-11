<script>
  import { createEventDispatcher } from 'svelte';

  export let text = '';
  export let finished = false;

  const dispatch = createEventDispatcher();

  const handleClick = () =>
    dispatch('handleClick', {
      toggleFinished: () => {
        finished = !finished;
      },
    });

  const handleDelete = () => dispatch('handleDelete');
</script>

<li class="w-full h-8 flex justify-between items-center mb-3">
  <div class="h-full flex justify-start cursor-pointer" on:click={handleClick}>
    <img
      src="../check.svg"
      alt=""
      class={finished ? 'h-full opacity-100' : 'h-full opacity-50'}
    />
    <p class="ml-8 text-lg">{text}</p>
  </div>

  <button class=" text-sm text-red-500" on:click={handleDelete}>Delete</button>
</li>
