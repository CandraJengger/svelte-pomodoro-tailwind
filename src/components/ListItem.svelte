<script>
  export let text = '';
  export let finished = false;

  const handleClick = () => {
    finished = !finished;
  };
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
