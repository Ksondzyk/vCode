const buildObject = (keysList, valuesList) => {
const result =keysList.reduce((acc,prevValue,nextValue) => {
    return { ...acc, [prevValue]:valuesList[nextValue]}
})

const result = buildObject(["name", "address", "age"], ["Bob", "Ukraine", 34]);
console.log(result);

// const keys = ['name', 'address', 'age'];
// const values = ['Bob', 'Ukraine', 34];
// const result = buildObject(keys, values)
