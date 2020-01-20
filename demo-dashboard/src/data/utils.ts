import stats from "./sportsingapore-gov-sg-stats.json";
import output from "./sportsingapore-gov-sg.json";

const data = output.sort((b, a) => {
  if (a.clicks < b.clicks) {
    return -1;
  }
  if (a.clicks > b.clicks) {
    return 1;
  }
  return 0;
});

const BROKEN_STATUS = [
  400,
  403,
  404,
  406,
  500,
  502,
  503,
  "DNSLookupError",
  "NoRouteError",
  "TimeoutError"
];

export const working = stats["downloader/response_count"];

export const allData = data.filter(row => BROKEN_STATUS.includes(row.status));

export const internalData = data.filter(
  row => row.is_internal && BROKEN_STATUS.includes(row.status)
);
export const externalData = data.filter(
  row => !row.is_internal && BROKEN_STATUS.includes(row.status)
);

export const totalBroken = data.filter(row =>
  BROKEN_STATUS.includes(row.status)
).length;

export const internalBroken = data.filter(
  row => row.is_internal && BROKEN_STATUS.includes(row.status)
).length;

export const externalBroken = data.filter(
  row => !row.is_internal && BROKEN_STATUS.includes(row.status)
).length;
