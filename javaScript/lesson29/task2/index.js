const pinger = (num, period) => {
  const interval = setInterval(() => {
    console.log("Ping");
  }, period);
  setTimeout(() => {}, timeout);
  clearInterval(interval);
};
pinger(5, 1000);
