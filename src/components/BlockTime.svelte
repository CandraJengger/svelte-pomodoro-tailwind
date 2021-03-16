<script>
  export let time;
</script>

<div
  class="row-start-1 row-end-4 flex justify-center flex-col items-center transform translate-y-4 transition-all duration-200 bg-red-200 px-5 pt-4 rounded-md shadow-md"
>
  <span class="text-7xl mb-7">
    {time}
  </span>
  <slot />
</div>
