<script>
  import Title from './components/Title.svelte';
  import TaskList from './components/TaskList.svelte';
  import PomodoroTimer from './components/PomodoroTimer.svelte';
</script>

<main class="bg-green-500 w-full flex justify-center items-center flex-col">
  <Title title="Pomopomo" />
  <PomodoroTimer />
  <TaskList />
</main>

<style>
</style>
