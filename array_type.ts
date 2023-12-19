// -使用「型別 + 方括號」來表示陣列
let fibonacci: number[] = [1, 1, 2, 3, 5];

// !錯誤寫法，陣列裡不允許number以外的型別
// let fibonacci1: number[] = [1, "1", 2, 3, true]; 

// -陣列泛型（Array Generic） Array<elemType> 來表示陣列
let fibonacci2: Array<number> = [1, 1, 2, 3, 5];

// -介面表示陣列
interface NumberArray{
    [index: number]: number;
}

let fibonacci3: NumberArray = [1,1,2,3,6];

// -類別陣列
// !錯誤寫法
// function sum(){
//     let args: number[] = arguments;
// }

function sum1(){
    let args: {
        [index: number]: number;
        length: number;
        callee: Function;
    } = arguments;
}

// -any 在陣列中的應用
let list: any[] = ['google', 25, { url: 'http://google.com' }];