// array1 = [1,3,4,5,6,7,8]
// array2 [3, 6] // filter เลขหาร 3 ลงตัว

let array1 = [1,3,4,5,6,7,8]
let array2 = array1.filter(item => item%3 == 0);
alert(array2);
console.log(array2)