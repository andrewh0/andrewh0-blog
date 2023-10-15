"use client";

import {
  useState,
  useEffect,
  SyntheticEvent,
  KeyboardEvent as ReactKeyboardEvent,
} from "react";
import Button from "components/button";

function getHundredthSeconds(ms: number) {
  return Math.floor(ms / 10) % 100;
}

function getSeconds(ms: number) {
  return Math.floor(ms / 1000) % 60;
}

function getMinutes(ms: number) {
  return Math.floor(ms / (60 * 1000)) % 60;
}

function getHours(ms: number) {
  return Math.floor(ms / (60 * 60 * 1000));
}

type TimeUnit = "hours" | "minutes" | "seconds" | "hundredthSeconds";

type TimeElapsedParts = {
  hours: string;
  minutes: string;
  seconds: string;
  hundredthSeconds: string;
  largestUnit: TimeUnit;
};

function getTimeElapsedParts(ms: number): TimeElapsedParts {
  const hundredthSeconds = getHundredthSeconds(ms);
  const hundredthSecondsStr =
    hundredthSeconds < 10 ? `0${hundredthSeconds}` : `${hundredthSeconds}`;

  const seconds = getSeconds(ms);
  const secondsStr = seconds < 10 ? `0${seconds}` : `${seconds}`;

  const minutes = getMinutes(ms);
  const minutesStr = minutes < 10 ? `0${minutes}` : `${minutes}`;

  const hours = getHours(ms);
  const hoursStr = `${hours}`;

  const largestUnit: TimeUnit =
    ms >= 60 * 60 * 1000
      ? "hours"
      : ms >= 60 * 1000
      ? "minutes"
      : ms >= 1000
      ? "seconds"
      : "hundredthSeconds";

  return {
    hours: hoursStr,
    minutes: minutesStr,
    seconds: secondsStr,
    hundredthSeconds: hundredthSecondsStr,
    largestUnit,
  };
}

function formatTimeElapsed(
  { hours, minutes, seconds, hundredthSeconds, largestUnit }: TimeElapsedParts,
  isCompact: boolean,
) {
  if (isCompact) {
    return `${largestUnit === "hours" ? `${hours}:` : ""}${minutes}:${seconds}`;
  }
  return `${hours}:${minutes}:${seconds}.${hundredthSeconds}`;
}

const StopwatchPage = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [nowMs, setNowMs] = useState<number | null>(null);
  const [pausedTime, setPausedTime] = useState(0);
  const [startMs, setStartMs] = useState<number | null>(null);

  const elapsedMs =
    startMs && nowMs ? Math.max(nowMs - startMs - pausedTime, 0) : 0;

  const timeElapsedParts: TimeElapsedParts = getTimeElapsedParts(elapsedMs);

  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;
    if (isRunning) {
      intervalId = setInterval(() => {
        tick();
      }, 10);
    } else {
      if (intervalId) {
        clearInterval(intervalId);
      }
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isRunning]);

  const tick = () => {
    setNowMs(Date.now());
  };

  const toggleRunning = () => {
    setNowMs(Date.now());
    if (isRunning) {
      // Stop
      setIsRunning(false);
    } else {
      // Start
      if (!startMs) {
        setStartMs(Date.now());
      } else {
        // Continue
        setPausedTime(Date.now() - elapsedMs - startMs);
      }
      setIsRunning(true);
    }
  };

  const resetTimer = () => {
    setPausedTime(0);
    setStartMs(null);
    setNowMs(null);
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      switch (e.key) {
        case " ":
        case "Enter":
          toggleRunning();
          break;
        case "Escape":
          resetTimer();
          break;
        default:
          return;
      }
    };
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  });

  const handleStartStopClick = (e: SyntheticEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
    toggleRunning();
  };

  const handleReset = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    resetTimer();
  };

  // Spacebar and enter will activate the focused button.
  // Prevent this from conflicting with document keydown events.
  const handleStartStopKeyDown = (e: ReactKeyboardEvent<HTMLButtonElement>) => {
    if ([" ", "Enter", "Escape"].includes(e.key)) {
      e.stopPropagation();
    }
  };

  // Spacebar and enter will activate the focused button.
  // Prevent this from conflicting with document keydown events.
  const handleResetKeyDown = (e: ReactKeyboardEvent<HTMLButtonElement>) => {
    if ([" ", "Enter", "Escape"].includes(e.key)) {
      e.stopPropagation();
    }
  };

  return (
    <div className="mx-auto my-0 flex h-full min-h-screen flex-col overflow-hidden overscroll-none p-4">
      <div className="flex h-full flex-col items-center justify-center p-8">
        {/* TODO <Head>
          <title>{formatTimeElapsed(timeElapsedParts, true)} | Stopwatch</title>
        </Head> */}
        <div className="mb-8">
          <div
            className="cursor-pointer select-none"
            onClick={handleStartStopClick}
          >
            <p className='block text-6xl tracking-tight [font-feature-settings:"tnum"] sm:text-8xl'>
              {formatTimeElapsed(timeElapsedParts, false)}
            </p>
          </div>
        </div>
        <div className="mb-8 space-x-8">
          <Button
            type="button"
            variant={isRunning ? "danger" : "success"}
            onClick={handleStartStopClick}
            onKeyDown={handleStartStopKeyDown}
          >
            {isRunning ? "Stop" : "Start"}
          </Button>
          <Button
            type="button"
            disabled={isRunning || !elapsedMs}
            onClick={handleReset}
            onKeyDown={handleResetKeyDown}
          >
            Reset
          </Button>
        </div>
        <div>
          <p className="block text-center text-sm text-gray-11">
            <b>[Space]</b> or <b>[Enter]</b> to start/stop. <b>[Esc]</b> to
            reset.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StopwatchPage;
