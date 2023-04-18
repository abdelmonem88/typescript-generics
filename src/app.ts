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

const getArray = <T>(items: T[]): T[] => {
  return new Array().concat(items);
};

const numberArray = getArray<number>([1, 2, 3]);
console.log(numberArray);

const stringArray = getArray<string>(["Hello", "World"]);
console.log(stringArray);

numberArray.push(4);
console.log(numberArray);
