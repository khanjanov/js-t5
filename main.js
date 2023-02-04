//! number minus number's digit's sum until odd number

// let a = prompt("enter a number above 1 digit");
// function tillOdd(a) {
//   let sum = 0;
//   for (let i = 0; i < a.length; i++) {
//     sum += +a[i];
//   }
//   while (true) {
//     a -= sum;
//     if (a % 2 != 0) {
//       return console.log(`${a}`);
//     }
//   }
// }
// tillOdd(a);

//! reverse number's divisors
// let a = prompt("enter a number").split("").reverse().join("");
// function reversesDivisors(a) {
//   for (let i = 0; i <= a; i++) {
//     if (a % i == 0) {
//       console.log(`${i}`);
//     }
//   }
// }
// reversesDivisors(a);

//! average of n numbers
// let a = prompt("how many numbers will you enter");
// let arr = [];
// let sum = 0;
// function averageOfNums() {
//   for (let i = 0; i < a; i++) {
//     arr[i] = +prompt(`enter number ${i + 1}`);
//     sum += arr[i];
//   }
//   sum /= a;
//   return console.log(`${sum}`);
// }
// averageOfNums();

//! nth prime number
// let a = prompt("enter a number");
// function nPrimeNum(a) {
//   a++;
//   while (true) {
//     let counter = 0;
//     for (let i = 0; i <= a; i++) {
//       if (a % i == 0) {
//         counter++;
//       }
//     }
//     if (counter == 2) {
//       return console.log(`${a}`);
//     }
//     a++;
//   }
// }
// nPrimeNum(a);

//! array even count
// let a = prompt("how many numbers will you enter");
// arr = [];
// let counter = 0;
// function checkEven(arr) {
//   for (let i = 0; i < a; i++) {
//     arr[i] = +prompt(`enter number ${i + 1} `);
//     if (+arr[i] % 2 == 0) {
//       counter++;
//     }
//   }
//   if (counter <= 1) {
//     console.log(`there are ${counter} even number in array`);
//   } else {
//     console.log(`there are ${counter} even numbers in array`);
//   }
// }
// checkEven(arr);

//! sum of array's odd numbers
// let a = prompt("how many numbers will you enter");
// arr = [];
// let sum = 0;
// function checkEven(arr) {
//   for (let i = 0; i < a; i++) {
//     arr[i] = +prompt(`enter number ${i + 1} `);
//     if (+arr[i] % 2 != 0) {
//       sum += arr[i];
//     }
//   }
//   console.log(`sum of odds are ${sum}`);
// }
// checkEven(arr);

//! how many numbers in array
// let a = prompt("enter numbers with space").split(" ");
// let findLength = (a) => a.length;
// console.log(findLength(a));

//! find the word in array that starts with "a"
//* method1
// let arr = prompt("enter words with spaces").toLowerCase().split(" ");
// function startsWithA() {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].startsWith("a") == true) {
//       console.log(arr[i]);
//     }
//   }
// }
// startsWithA();

//* method2
// let arr = prompt("enter words with spaces").toLowerCase().split(" ");
// let falan1 = arr.filter((item) => {
//   return item[0] === "a";
// });
// console.log(falan1);

//! sade vuruq
let a = prompt("enter a number");
arr = [];
function sadeVuruq() {
  for (let i = 2; i <= a; ) {
    if (a % i == 0) {
      arr.push(i);
      a /= i;
    } else {
      i++;
    }
  }
  console.log(`sade vuruqlar ${arr}`);
}
sadeVuruq();
