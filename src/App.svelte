<script>
  import Title from './components/Title.svelte';
  import PomodoroTimer from './components/PomodoroTimer.svelte';
  import Modal from './components/Modal.svelte';
  import FAB from './components/FloatActionButton.svelte';
  import { text } from 'svelte/internal';
</script>

<main class="bg-red-100 px-8 w-full flex justify-center items-center flex-col">
  <Title title="Pomopomo" />
  <PomodoroTimer />
  <FAB text="+" on:clickButton={() => console.log('from FAB')} />
  <Modal />
</main>

<style>
</style>
