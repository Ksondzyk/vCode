export function saveCalls() {
  const calls = [];

  function withMemory(...args) {
    calls.push(...args);
    return func.apply(this, args);
  }
  withMemory.calls = calls;
  return withMemory;
}


