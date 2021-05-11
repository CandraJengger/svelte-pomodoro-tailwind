<script>
  import BlockTime from './BlockTime.svelte';
  import Button from './Button.svelte';
  import { minutesToSeconds, formatTime } from '../utils/time.js';
  import TaskList from './TaskList.svelte';

  export let data = [];

  const STATE = {
    idle: 'idle',
    inProgress: 'in progress',
    resting: 'resting',
  };

  let currentState = STATE.idle;

  const LONG_BREAK_S = minutesToSeconds(20);
  const SHORT_BREAK_S = minutesToSeconds(5); // 5
  let completedPomodoros = 0;

  // length of a pomodoro in seconds 25
  const POMODORO_S = minutesToSeconds(25);

  // time left in the current pomodoro
  let pomodoroTime = POMODORO_S;

  // to stop interval
  let interval;

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

<section class="w-full h-screen text-center grid grid-flow-row grid-rows-9">
  <BlockTime time={formatTime(pomodoroTime)}>
    <Button
      type={currentState === STATE.idle ? 'primary' : 'secondary'}
      text={currentState === STATE.idle ? 'start' : 'cancel'}
      on:clickButton={currentState === STATE.idle
        ? startPomodoro
        : cancelPomodoro}
    />
  </BlockTime>

  <TaskList {data} />
</section>
