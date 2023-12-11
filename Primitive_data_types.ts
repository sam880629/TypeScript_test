//- 原始資料型別包括：boolean (布林值)、number (數值)、string (字串)、null、undefined
// 布林值

let isDone: boolean = false;
console.log("布林值:"+isDone);
// 數值

let isNumber:number = 6;
console.log("數值:"+isNumber);
// 字串

let isString:string = "hello world!!";
console.log("字串:" + isString);

// 空值void
//! 用於函式 並且這個函式不回傳值的時候
//! JavaScript 沒有空值（Void）的概念，在 TypeScript 中，可以用 void 表示沒有任何返回值的函式

function alertName():void{
    console.log("My name is Tom");
}
alertName();

//! void 通常不應與 null 或 undefined 一起使用，因為它們是不同的概念。
let unusable:void = undefined;

// Null 和 Undefined
let u:undefined = undefined;
let n:null= null;

console.log("undefined:" + u );
console.log("null:" + n );