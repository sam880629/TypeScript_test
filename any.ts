//- 任意值（Any）用來表示允許賦值為任意型別
//! any 型別，允許被賦值為任意型別

let myNumber:any = 'seven';
myNumber = 7;
console.log("myNumber:"+myNumber);

// 未宣告型別的變數
//! 變數如果在宣告的時候，未指定其型別，那麼它會被識別為任意值型別

let otherNumber;
otherNumber = 2;
otherNumber = 'two';
console.log("otherNumber:"+otherNumber);

// 型別推論
let target = 'seven';  // 同等於 let target:string = 'seven';
