// F-TASK: 

// Shunday findDoublers function tuzing,
// unga faqat bitta string argument pass bolib,
//  agar stringda bir hil harf qatnashgan bolsa true, qatnashmasa false qaytarishi kerak.
// MASALAN: getReverse("hello") return true return qiladi
function findDoublers(str) {
     const a = str.split('').some((total, ele, arr) => total == arr[ele+1]);
 console.log(a)
}

findDoublers('daddy');
 


































//Task-E
// Shunday function tuzing, u bitta string argumentni qabul qilib osha stringni teskari qilib return qilsin.
// MASALAN: getReverse("hello") return qilsin "olleh"

// function str (a){
// const b = a.split('').reverse().join('');
// console.log(b);
// }
// str('AssalomuAleykum');