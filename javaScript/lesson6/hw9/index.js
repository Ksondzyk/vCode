// const clients = ["Ann", "John", "User"];

// const balances = [1400, 87, -6];

function withdraw(clients, balances, client, amount) {
  console.log(clients, balances, client, amount);
  let accountBalance = 0;
  let result = clients.forEach(function (itemClient, indexClient) {
    if (itemClient === client) {
      //   console.log(true);
      balances.forEach(function (balancesElem, indexBalance) {
        // console.log(indexBalance);
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
}
const result = withdraw(["Ann", "John", "User"], [1400, 87, -6], "John", 50);
console.log(result);
