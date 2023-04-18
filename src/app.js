// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("This is done!");
//   }, 1000);
// });
// promise.then((data) => console.log(data));
// const myObj = {
//   name: "Max",
//   age: 30,
// };
var getArray = function (items) {
    return new Array().concat(items);
};
var numberArray = getArray([1, 2, 3]);
console.log(numberArray);
var stringArray = getArray(["Hello", "World"]);
console.log(stringArray);
numberArray.push(4);
console.log(numberArray);
