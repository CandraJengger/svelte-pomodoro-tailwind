<script>
  const minutesToSeconds = (minutes) => minutes * 60;
  const secondsToMinutes = (seconds) => Math.floor(seconds / 60);
  const padWithZeroes = (number) => number.toString().padStart(2, '0');

  const LONG_BREAK_S = minutesToSeconds(20);
  const SHORT_BREAK_S = minutesToSeconds(5);
  let completedPomodoros = 0;

  // length of a pomodoro in seconds
  const POMODORO_S = minutesToSeconds(25);

  // time left in the current pomodoro
  let pomodoroTime = POMODORO_S;

  // to stop interval
  let interval;

  function formatTime(timeInSeconds) {
    const minutes = secondsToMinutes(timeInSeconds);
    const remainingSeconds = timeInSeconds % 60;
    return `${padWithZeroes(minutes)}:${padWithZeroes(remainingSeconds)}`;
  }

  function startPomodoro() {
    interval = setInterval(() => {
      if (pomodoroTime === 0) {
        completePomodoro();
      }
      pomodoroTime -= 1;
    }, 1000);
  }

  function completePomodoro() {
    clearInterval(interval);
    completedPomodoros++;
    if (completedPomodoros === 4) {
      rest(LONG_BREAK_S);
      completedPomodoros = 0;
    } else {
      rest(SHORT_BREAK_S);
    }
  }

  function rest(time) {
    pomodoroTime = time;
    interval = setInterval(() => {
      if (pomodoroTime === 0) {
        idle();
      }
      pomodoroTime -= 1;
    }, 1000);
  }

  function idle() {
    clearInterval(interval);
    pomodoroTime = POMODORO_S;
  }

  function cancelPomodoro() {
    idle();
  }
</script>

<section class="w-full h-4/5 p-5 text-center grid grid-flow-row grid-rows-6">
  <span
    class="row-start-1 row-end-3 flex justify-center items-center text-7xl transform translate-y-5 transition-all duration-200 bg-gray-100 px-5 py-5 rounded-md opacity-80 shadow-md hover:-translate-y-2 hover:opacity-90"
  >
    {formatTime(pomodoroTime)}
  </span>
  <footer class="row-start-5 flex justify-center items-center flex-col">
    <button
      on:click={startPomodoro}
      class="rounded-md w-full flex justify-center items-center px-7 py-5 font-semibold text-xl uppercase tracking-wider text-white bg-gray-900 hover:bg-gray-800 mx-3 mb-4 outline-none border-none"
      >start</button
    >
    <button
      on:click={cancelPomodoro}
      class="rounded-md w-full flex justify-center items-center px-7 py-5 font-semibold text-md uppercase tracking-wider text-gray-800 bg-green-600  hover:bg-green-700 mx-3"
      >cancel</button
    >
  </footer>
</section>
