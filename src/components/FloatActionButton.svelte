<script>
  import { createEventDispatcher } from 'svelte';

  // state
  export let text = '';

  const dispatch = createEventDispatcher();

  const handleClick = () => {
    dispatch('clickButton');
  };
</script>

<button
  on:click={handleClick}
  style="width: 48px; height: 48px"
  class="fixed bottom-4 right-4 bg-blue-300 rounded-full z-50 font-bold text-3xl text-gray-900 shadow-md focus:outline-none"
  >{text}</button
>
