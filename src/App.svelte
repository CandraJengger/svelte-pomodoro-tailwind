<script>
  import { onDestroy } from 'svelte';

  import Title from './components/Title.svelte';
  import PomodoroTimer from './components/PomodoroTimer.svelte';
  import Modal from './components/Modal.svelte';
  import FAB from './components/FloatActionButton.svelte';
  import Overlay from './components/Overlay.svelte';

  import { todos } from './store';

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

  function addTodo(event) {
    todos.update((value) => [...value, event.detail.todo]);
    open = false;
    hidden = true;
    event.detail.resetInput();
  }

  let todos_value;
  const unsubscribe = todos.subscribe((value) => {
    todos_value = [...value];
  });

  onDestroy(unsubscribe);
</script>

<main class="bg-red-100 px-8 w-full flex justify-center items-center flex-col">
  <Title title="Pomopomo" />
  <PomodoroTimer data={todos_value} />
  <FAB text="+" on:clickButton={openModal} />
  <Modal
    block={open}
    {hidden}
    on:handleClose={closeModal}
    on:handleSave={addTodo}
  />
  <Overlay block={open} {hidden} />
</main>

<style>
</style>
