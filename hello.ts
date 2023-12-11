//- : 來指定變數的型別
//- 執行tsc 檔案名稱=>輸出ts檔案
//! 編譯的時候即使報錯了，還是會產生編譯結果



function sayHello(person: string){
    return 'Hello ' + person;
}

var user = 'Tom';
console.log(sayHello(user));