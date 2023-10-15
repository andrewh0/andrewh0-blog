export type TimeUnit = "hours" | "minutes" | "seconds" | "hundredthSeconds";

export type TimeElapsedParts = {
  hours: string;
  minutes: string;
  seconds: string;
  hundredthSeconds: string;
  largestUnit: TimeUnit;
};

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

export {
  getHundredthSeconds,
  getSeconds,
  getMinutes,
  getHours,
  getTimeElapsedParts,
  formatTimeElapsed,
};
