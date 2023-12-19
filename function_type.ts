
// -函式宣告
function fuc1(x: number, y: number): number{
     return x+y;
}

// !輸入多餘的引數，是不被允許的
// sum_fuc(1, 2, 3);

// -函式表示式
let mySum = function(x: number, y: number): number{
    return x+y;
}

console.log(mySum(1,5));


function fuc2(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
   
}

console.log(fuc2(123));      // 输出 321
console.log(fuc2('hello'));  // 输出 'olleh'


//! 可選引數必須接在必須引數後面

function buildName(firstName: string, lastName?: string) {
    if (lastName) {
        return firstName + ' ' + lastName;
    } else {
        return firstName;
    }
}

let tomcat = buildName('Tom', 'Cat');
let tom = buildName('Tom');


// -型別斷言（Type Assertion）可以用來手動指定一個值的型別 ， <型別>值 或 值 as 型別

function get_sonmething(something: string | number): number {
    return something as number ;
}

console.log(get_sonmething(100))
