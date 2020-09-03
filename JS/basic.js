
/*
    kieu du lieu

// number type
var a=1;
var b=2;
var c=1.5;
console.log(typeof a);

// string type
var fullName='ntht';
console.log(typeof fullName);

// boolean type
var isSuccess=true;

// undefined type
var age;

// null;
var isNull=null; //nothing
console.log(typeof isNull); //Object type

// symbol
var id=Symbol('id');//unique
var id2=Symbol('id');//unique
//console.log(id==id2); //false

// Function
var myFunction = function() {
    alert('hi xin chao cac ban');
}
//myFunction(); //dung de goi ham

// Object types

var myObject = {
    name:'ht',
    age: 18,
    address:'ha noi',
    myFuction: function()  {

    }
};

//console.log('myObject',myObject);

// Array type

var myArray = [
    'javascript',
    'php',
    'ruby'
];
 console.log(myArray);
*/

/*
    toan tu so sanh

var a=1,b=1,c='1';
console.log(a==b);
console.log(a==c);// chi so sanh gia tri
console.log(a===c); // so sanh ca gia tri va kieu du lieu

*/

/* Hiểu hơn về câu lệnh điều kiện và phép so sánh 

var a = 1;
var b = 2;

var result = 'A' && 'B' && 'C';

console.log('result',result); // C

var result1 = null && 'B' && 'C';
// chỉ cần bằng 6 giá trị (0,false,'',NaN,Undefined,null) thì sẽ gán kq cho result

console.log('result1',result1); // null

var result2 = 'A' || 'B' || 'C';
console.log('result2',result2);  // result2 A

var result3 = null || 'B' || 'C';
console.log('result3',result3);  // result2 B
// chỉ cần khác 6 giá trị (0,false,'',NaN,Undefined,null) thì sẽ gán kq cho result

*/

/* Chuỗi trong javascript 

// Các cách tạo chuỗi: 2 cách

// cách 1: (nên dùng)

var fullName = 'nt';

// cách 2:ko nên dùng

var fullName1 = new String ('nt');
console.log(typeof fullName1); //Object

//backslash in javascrip
var fullName = 'Sd la \'sieu nhan\''; //thêm dấu \' để hiển thị dấu ''

console.log(fullName);

// xem độ dài chuỗi
console.log(fullName.length);

// Template string ES6

var firstName = 'Son';
var lastName = 'Dang';

console.log(`Toi la: ${firstName} ${lastName}`); //Toi la: Son Dang

*/

/* LÀM VIỆC VỚI CHUỖI 

var myString = '  Hoc  js tai js f8!  ';

// length
console.log(myString.length); //14

// Find index

console.log(myString.indexOf('js')); //4 trả về vị trí đầu tiên tìm thấy

console.log(myString.indexOf('js',6)); //11 bắt đầu tìm từ vị trí thứ 6

console.log(myString.lastIndexOf('js'));//20
console.log(myString.search('js')); //4

// cut string
console.log(myString.slice(4,6)); //js
console.log(myString.slice(4)); //js tai f8!
console.log(myString.slice(-3,-1)); //f8

//replace
console.log(myString.replace('js','javascript')); //Hoc javascript tai js f8!
console.log(myString.replace(/js/g,'javascript'));//Hoc javascript tai javascript f8!

//convert to upper case
console.log(myString.toUpperCase()); //HOC JS TAI JS F8!

//convert to lower case
console.log(myString.toLowerCase()); //hoc js tai js f8!

// TRIM loại bỏ khoảng trắng thừa ở 2 đầu
console.log(myString.trim());

//split cắt thành array dựa vào 1 đặc điểm chung
var language = 'javascript, php, ruby';

console.log(language.split(','));

var language ='javascript';

console.log(language.split('')); //cắt thành từng kí tự j,a,v,a...

//get a character by index
var myString1 = 'java ss'
console.log(myString1.charAt(10));// vị trí ko hợp lệ in ra chuỗi rỗng

*/

/* kiểu số (number) trong javascript 

// tạo giá trị kiểu số
    // c1: thường xuyên dùng
        var age = 18;
        var PI = 3.14;
    // c2: ko nên dùng
        var otherNumber = new Number(9);

// làm việc với number

var result = 20/'abc';
console.log(result); //NaN

console.log(age.toString()); //18

console.log(PI.toFixed()); //3
 var a=1000.022093924284482484
console.log(a.toFixed(3)); //1000.022

*/

/* mảng trong js - array 

// tạo mảng
    //c1:
        var languages = [
            'javascript',
            'php',
            'ruby',
            null,
            undefined,
            function(){

            },
            {},
            123
        ];
console.log(Array.isArray(languages));

    //c2:
    var language = new Array(
        'javascript',
        'php',
        'ruby',
        null,
        undefined,
        function(){

        },
        {},
        123
    );
    console.log(Array.isArray(new Array(1,5)));

// truy xuất mảng
console.log(languages.length);
console.log(languages[2]);

*/

/* LÀM VIỆC VỚI MẢNG 

var languages = [
    'javascript',
    'php',
    'ruby'
];
// to string 
console.log(languages.toString());//javascript,php,ruby

//join
console.log(languages.join(' ')); //javascript php ruby

//pop
// console.log(languages.pop()); // xóa phần tử cuối mảng và trả về phần tử đã xóa : ruby
// console.log(languages.pop()); //php
// console.log(languages.pop()); //javascript
// console.log(languages.pop()); //undefined
//push
console.log(languages.push('js')); //thêm phần tử vào cuối mảng và trả về độ dài của mảng
console.log(languages); 

//shift
console.log(languages.shift()); //xóa phần tử đầu mảng và trả về giá trị đã xóa : javascript
//unshift
console.log(languages.unshift('dart')); // thêm phần tử vào đầu mảng và trả về độ dài của mảng 
console.log(languages);

//splicing
languages.splice(1,1);//xóa từ vị trí thứ i và xóa j phần tử slice(i,j);
languages.splice(1,1,'nodejs');//thêm 1 phần tử vào vị trí 1
console.log(languages);

//concat : nối 2 chuỗi
var language2 = ['2','js','ruby'];
console.log(languages.concat(language2));

//slicing
console.log(languages.slice(1,3)); //cắt phần tử từ vị trí i và cắt đến phần tử j 



*/