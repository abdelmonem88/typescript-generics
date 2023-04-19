// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("This is done!");
//   }, 1000);
// });
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
var mytype = 30;
var myArr = ["test", "test2"];
var combinClass = /** @class */ (function () {
    function combinClass() {
        this.data = [];
    }
    combinClass.prototype.addItem = function (item) {
        this.data.push(item);
    };
    combinClass.prototype.removeItem = function (item) {
        this.data.splice(this.data.indexOf(item), 1);
    };
    combinClass.prototype.getItems = function () {
        return __spreadArray([], this.data, true);
    };
    return combinClass;
}());
var combinStrings = new combinClass();
combinStrings.addItem("men3m");
console.log(combinStrings.getItems());
var combinNumbers = new combinClass();
combinNumbers.addItem(34);
console.log(combinNumbers.getItems());
