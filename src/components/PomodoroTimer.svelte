<script>
  import BlockTime from './BlockTime.svelte';
  import Button from './Button.svelte';

  const STATE = {
    idle: 'idle',
    inProgress: 'in progress',
    resting: 'resting',
  };

  let currentState = STATE.idle;

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
    currentState = STATE.inProgress;
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
    currentState = STATE.resting;
    pomodoroTime = time;
    interval = setInterval(() => {
      if (pomodoroTime === 0) {
        idle();
      }
      pomodoroTime -= 1;
    }, 1000);
  }

  function idle() {
    currentState = STATE.idle;
    clearInterval(interval);
    pomodoroTime = POMODORO_S;
  }

  function cancelPomodoro() {
    idle();
  }
</script>

<section class="w-full h-screen text-center grid grid-flow-row grid-rows-6">
  <BlockTime time={formatTime(pomodoroTime)} />
  <footer
    class="row-start-5 flex justify-center items-center flex-col transform -translate-y-4"
  >
    <Button
      type="primary"
      text="start"
      on:clickButton={startPomodoro}
      disabled={currentState !== STATE.idle}
    />
    <Button
      type="secondary"
      text="cancel"
      on:clickButton={cancelPomodoro}
      disabled={currentState !== STATE.inProgress}
    />
  </footer>
</section>
