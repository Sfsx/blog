const throttle = (cb: (param?: any) => void, timeout = 300) => {
  let can = true;
  return (...params: any[]) => {
    if (!can) return;
    can = false
    setTimeout(() => {
      cb(...params);
      can = true;
    }, timeout)
  }
}

const debounce = (cb: (param?: any) => void, timeout = 300) => {
  let timer: any;
  return (...params: any[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      cb(...params);
    }, timeout)
  }
}

export {
  debounce,
  throttle
}