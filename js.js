// Bài 1
// let a = [
//     [1, 2, 1, 24],
//     [8, 11, 9, 4],
//     [7, 0, 7, 27],
//     [7, 4, 28, 14],
//     [3, 10, 26, 7]
// ];
// for (let i in a) {
//     console.log(`row ${i}`);
//     for (let j in a[i]) {
//         console.log(` ${a[i][j]}`)
//     }
// }

// // Bài 2
// let a2 = ['c','s', 'c', '2', '6', '1'];
// console.log(a2);
// a2.reverse();
// console.log(a2.join(""));

// Bài 3
// let a3 = ['c', '1', 'o', '2', 'd', '3', 'e', '4', 'g', '5', 'y', '6', 'm'];
// console.log(a3);
// console.log(a3.length);
// let count = 0;
// for (let i = 0; i < a3.length; i++) {
//     if (!isNaN(a3[i])) {
//         count++;
//     }
// }
// console.log(`Số ký tự số trong mảng là: ${count}`);

// Bài 4
// let str = prompt('Nhập chuỗi: ');
// let a4 = str.split(' ');
// console.log(a4);
// console.log(`Số từ trong chuỗi là: ${a4.length}`);

// Bài 5
// let str1 = prompt('Chuỗi 1:');
// let str2 = prompt('Chuỗi 2:');
// if (str1 === str2) {
//     console.log('Hai chuỗi giống nhau');
// } else {
//     console.log('Hai chuỗi không giống nhau');
// }

// Bài 6
// let a6 = prompt('Nhập chuỗi: ');
// let str = a6.split('');
// console.log(str);
// for (let i = 0; i < str.length; i++) {
//     if (str[i] === '-') {
//         str[i] = '_';
//     }
// }
// console.log(str);
// console.log(str.join(''));