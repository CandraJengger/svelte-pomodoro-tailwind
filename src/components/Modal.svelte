<script>
  import { createEventDispatcher } from 'svelte';

  export let block = false;
  export let hidden = true;

  let task = '';

  const dispatch = createEventDispatcher();
  const handleClose = () => dispatch('handleClose');
  const handleSave = () =>
    dispatch('handleSave', {
      todo: {
        text: task,
        finished: false,
      },
      resetInput: () => (task = ''),
    });
</script>

<div
  class="fixed w-80 top-2/4 left-2/4 transform -translate-y-2/4 -translate-x-2/4 z-50 bg-white shadow-lg rounded-md py-5 px-6"
  class:block
  class:hidden
>
  <input
    type="text"
    placeholder="What are you working on ?"
    class="mb-7 w-full focus:outline-none text-lg px-2 py-3 border-b border-red-500"
    bind:value={task}
  />

  <div class="flex justify-end">
    <button class="mx-2 focus:outline-none text-gray-500" on:click={handleClose}
      >Cancel</button
    >
    <button
      class="mx-2 focus:outline-none bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-md"
      on:click={handleSave}>Save</button
    >
  </div>
</div>
