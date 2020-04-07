const withdraw = (clients, balances, client, amount) => {
  let accountBalance = 0;
  let result = clients.forEach(function (itemClient, indexClient) {
    if (itemClient === client) {
      balances.forEach(function (balancesElem, indexBalance) {
        if (indexClient === indexBalance) {
          if (balancesElem > amount) {
            accountBalance = balancesElem - amount;
          } else {
            accountBalance = -1;
          }
        }
      });
    }
  });
  return accountBalance;
};

console.log(withdraw(["Ann", "John", "User"], [1400, 87, -6], "User", 10));
