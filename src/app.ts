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

type hamada = {
  name: string;
  age: 34;
};

type combineType = string | number;
type customArray = [string, string];

const mytype: combineType = 30;
const myArr: customArray = ["test", "test2"];

interface combineB {
  fullName: string;
  maxAge: number;
}

class combinClass<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const combinStrings = new combinClass<string>();
combinStrings.addItem("men3m");
console.log(combinStrings.getItems());

const combinNumbers = new combinClass<number>();
combinNumbers.addItem(34);
console.log(combinNumbers.getItems());
