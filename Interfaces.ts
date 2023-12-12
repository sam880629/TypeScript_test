//- 在 TypeScript 中，我們使用介面（Interfaces）來定義物件的型別。

// 定義一個介面 Person
interface Person {
    name: string;
    age: number;
}

// !賦值的時候，變數的形狀必須和介面的形狀保持一致

let tom:Person ={
    name: "Tom",
    age: 10
}
console.log(tom);

// 可選屬性
// !有時我們希望不要完全匹配，那麼可以用可選屬性 (?)：

interface People {
    weight: number;
    height: number;
    hair?:string;
}

let Alex:People = {
    weight: 181,
    height: 68,
}

console.log("身高:"+Alex.height);
console.log("體重:"+Alex.weight);

// 任意屬性
// !一個介面允許有任意的屬性，使用 [propName: string] 定義了任意屬性

interface Car{
    CC:number;
    color:string;
    [propName:string]:any;
}

let BMW:Car = {
    CC:2000,
    color:"red",
    price: 300
}
console.log("CC:"+ BMW.CC+"顏色:"+BMW.color+"價錢"+BMW.price);


