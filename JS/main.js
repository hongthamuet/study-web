/* hàm function trong js 

1.hàm?
- 1 khối mã
- làm 1 việc cụ thể

2.loại hàm 
    - built-in
    - tự định nghĩa

3. tính chất
     - không thực thi khi định nghĩa
     - sẽ thực thi khi đc gọi
     - có thể nhận tham số
     - có thể trả về 1 giá trị

4. tạo hàm đầu tiên
    
*/

// function showDialog() {
//     alert('hi xin chao cac ban');
// }
// showDialog();

/* 
1.Tham số
    - Định nghĩa?
    - Kiểu dữ liệu
    - Tính private
    - 1 tham số
    - nhiều tham số


2. truyền tham số
    - 1 tham số
    - nhiều tham số


3.arguments
    - đối tượng arguments
    - giới thiệu vòng for

*/

// function writeLog(message, message2){
//     console.log(message,message2);

// }

// writeLog('test','test_2'); //test

// function writeLog1(){
//     console.log(arguments);
// }
// writeLog1('log','log1','log2'); 

// function writeLog2(){
//     for (var param of arguments){
//         console.log(param);
        
//     }
    
// }
// writeLog2('log','log1','log2');//3 giá trị trên 3 dòng

// function writeLog3(){
//     var myString = ' ';
//     for (var param of arguments){
//         myString+=`${param} - `;//template string
        
//     }
//     console.log(myString);
// }

// writeLog3('log','log1','log2'); //log - log1 - log2 - 