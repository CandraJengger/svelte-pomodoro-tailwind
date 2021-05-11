<script>
  import ListItem from './ListItem.svelte';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  const handleClick = () => dispatch('handleClick');

  export let data = [];
  $: workingOn = data.filter((item) => item.finished !== true);

  const handleToggleFinish = (event, text) => {
    const index = data.findIndex((item) => item.text === text);
    data[index] = {
      ...data[index],
      finished: !data[index].finished,
    };

    event.detail.toggleFinished();
  };

  const handleDeleteItemFromData = (text) => {
    data = data.filter((item) => item.text !== text);
  };
</script>

<div
  class="row-start-5 row-end-6 flex justify-center items-center flex-col transform -translate-y-4"
>
  <h3 class="text-md mb-2 uppercase text-gray-700">Working On</h3>
  <h4 class="text-lg font-bold tracking-widest">
    {workingOn.length > 0 ? workingOn[0].text : ''}
  </h4>
</div>

<div class="row-start-6 row-end-10 p-3 px-4 container bg-red-200">
  <ul class="flex items-center justify-center flex-col list-none">
    {#each data as { text, finished }, i}
      <ListItem
        {text}
        {finished}
        on:handleClick={(e) => handleToggleFinish(e, text)}
        on:handleDelete={() => handleDeleteItemFromData(text)}
      />
    {/each}
  </ul>
</div>
