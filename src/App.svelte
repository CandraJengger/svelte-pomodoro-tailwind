<script>
  let title = 'Pomopomo';
  import TaskList from './components/TaskList.svelte';
  import PomodoroTimer from './components/PomodoroTimer.svelte';
</script>

<main class="bg-green-500 w-full flex justify-center items-center flex-col">
  <h1
    class="block w-full py-4 text-center text-xl font-extrabold tracking-widest"
  >
    {title}
  </h1>
  <PomodoroTimer />
  <TaskList />
</main>

<style>
</style>
