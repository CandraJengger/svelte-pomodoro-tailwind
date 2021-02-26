<script>
  let title = 'Pomopomo';
  import TaskList from './components/TaskList.svelte';
  import PomodoroTimer from './components/PomodoroTimer.svelte';
</script>

<main>
  <h1>{title}</h1>
  <PomodoroTimer />
  <TaskList />
</main>

<style>
</style>
