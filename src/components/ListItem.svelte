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
</script>

<li
  class="w-full h-8 flex justify-start items-center mb-3"
  on:click={handleClick}
>
  <img
    src="../check.svg"
    alt=""
    class={finished ? 'h-full opacity-100' : 'h-full opacity-50'}
  />
  <p class="ml-8 text-lg">{text}</p>
</li>
