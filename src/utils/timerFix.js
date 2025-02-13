import { Platform } from 'react-native';

if (Platform.OS !== 'web') {
  const _setTimeout = global.setTimeout;
  const _clearTimeout = global.clearTimeout;
  const MAX_TIMER_DURATION_MS = 60 * 1000;
  
  global.setTimeout = (fn, ms = 0) => {
    if (ms > MAX_TIMER_DURATION_MS) {
      ms = MAX_TIMER_DURATION_MS;
    }
    return _setTimeout(fn, ms);
  };
  
  global.clearTimeout = _clearTimeout;
  
  const _setInterval = global.setInterval;
  const _clearInterval = global.clearInterval;
  
  global.setInterval = (fn, ms = 0) => {
    if (ms > MAX_TIMER_DURATION_MS) {
      ms = MAX_TIMER_DURATION_MS;
    }
    return _setInterval(fn, ms);
  };
  
  global.clearInterval = _clearInterval;
  
  global.setImmediate = global.setImmediate || ((fn) => global.setTimeout(fn, 0));
  global.clearImmediate = global.clearImmediate || ((id) => global.clearTimeout(id));
}
