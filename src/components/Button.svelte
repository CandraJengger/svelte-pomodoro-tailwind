<script>
  export let text;
  export let type;

  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  const typeBtn = {
    BTN_PRIMARY:
      'rounded-md w-full flex justify-center items-center px-7 py-5 font-semibold text-md uppercase tracking-wider bg-gray-500 hover:opacity-80 mx-3 mb-4 transform transition-all duration-200 scale-100 hover:scale-y-110 focus:scale-y-110 focus:outline-none',
    BTN_SECONDARY:
      'rounded-md w-full flex justify-center items-center px-7 py-5 font-semibold text-md uppercase tracking-wider bg-gray-400  hover:opacity-80 mx-3 transform transition-all duration-200 scale-100 hover:scale-y-110 focus:scale-y-110 focus:outline-none',
  };

  function handleClick() {
    dispatch('clickButton');
  }
</script>

<button
  on:click={handleClick}
  class={type === 'primary' ? typeBtn.BTN_PRIMARY : typeBtn.BTN_SECONDARY}
>
  {text}
</button>
