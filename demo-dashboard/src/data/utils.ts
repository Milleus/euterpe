import stats from './sportsingapore-stats.json';
import output from './output.json';

const sportsg = output.sort((b, a) => {
  if (a.clicks < b.clicks) {
    return -1;
  }
  if (a.clicks > b.clicks) {
    return 1;
  }
  return 0;
});

const BROKEN_STATUS = [
  403,
  404,
  500,
  502,
  'DNSLookupError',
  'NoRouteError',
  'TimeoutError',
];

export const working = stats['downloader/response_count'];

export const allData = sportsg.filter(row =>
  BROKEN_STATUS.includes(row.status),
);

export const internalData = sportsg.filter(
  row => row.is_internal && BROKEN_STATUS.includes(row.status),
);
export const externalData = sportsg.filter(
  row => !row.is_internal && BROKEN_STATUS.includes(row.status),
);

export const totalBroken = sportsg.filter(row =>
  BROKEN_STATUS.includes(row.status),
).length;

export const internalBroken = sportsg.filter(
  row => row.is_internal && BROKEN_STATUS.includes(row.status),
).length;

export const externalBroken = sportsg.filter(
  row => !row.is_internal && BROKEN_STATUS.includes(row.status),
).length;
