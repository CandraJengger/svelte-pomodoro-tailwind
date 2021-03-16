<script>
  import Title from './components/Title.svelte';
  import PomodoroTimer from './components/PomodoroTimer.svelte';
  import Modal from './components/Modal.svelte';
  import FAB from './components/FloatActionButton.svelte';

  // state
  let open = false;
  let hidden = true;

  function openModal() {
    open = true;
    hidden = false;
  }

  function closeModal() {
    open = false;
    hidden = true;
  }
</script>

<main class="bg-red-100 px-8 w-full flex justify-center items-center flex-col">
  <Title title="Pomopomo" />
  <PomodoroTimer />
  <FAB text="+" on:clickButton={openModal} />
  <Modal {open} {hidden} on:handleClose={closeModal} />
</main>

<style>
</style>
