// Shunday class tuzing tuzing nomi Shop, va uni constructoriga 3 hil mahsulot pass bolsin,
//  hamda classning 3ta methodi bolsin, biri qoldiq,
//  biri sotish va biri qabul. Har bir method ishga tushgan vaqt ham log qilinsin.
// MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() return hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud! shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq() return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!

const moment = require("moment");
const time = moment().format('HH:mm');
class Shop{   

  //   constructor
    constructor(ichimlik, qandolat, gusht ) {
      this.qandolat = qandolat
      this.gusht = gusht;
       this.ichimlik = ichimlik;
    }
    
  //   method
   
   qabul(a, num){
        if( a == 'lagmon')
          this.qandolat += num;
        else if(a == 'gusht')
          this.gusht +=num;
        else this.ichimlik += num;
        }
   
    
   
   sotish(a, num){
        if( a == 'lagmon')
          this.qandolat -= num;
        else if(a == 'gusht')
          this.gusht -=num;
        else this.ichimlik -= num;
        }
      qoldiq(){
     console.log(`hozir ${time}da ${this.qandolat}kg lagmon ,${this.gusht}kg gusht  va ${this.ichimlik}ta cola mavjud  `);
    }
    }
  const shop = new Shop(4,5,6);
  shop.qoldiq();
  shop.sotish('gusht',3 );
  shop.qabul('lagmon', 1);
  shop.qabul('cola', 8);
  shop.qoldiq();
  



// TASK B: 

// Shunday function tuzing, u 1ta string parametrga ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.
// MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.

// function num(txt) {
//   let count = 0;

//   for (let i = 0; i < txt.length; i++) {
//     if (!isNaN(txt[i])) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(num('cat353535553olkjh')); 













// TASK A 
// Shunday 2 parametrli function tuzing,
// hamda birinchi parametrdagi leterni ikkinchi parametrdagi suzdan
// qatnashgan sonni return qilishi kerak buladi
// Masalan countLetter("e","engineer") 3ni return qiladi
// const suz = (alp,word)=>{
//   let count = 0;
//   for(let i = 0; i<word.length;i++){
//   if(word[i]===alp){
//     count++;
//  }
// }
//   return count;
// };

// const result = suz("b", "basketbol");
// console.log(result);

//             2- uslub
// const lett = (let,word)=>{ 
//   const letterword = word.split('');
//   const wordletter = letterword.filter((element)=>{
//     return element===let;
//   });
//   const countLetter = wordletter.length;
//   return countLetter; 
// }
// const result = lett("a","assotsatsiya");
// console.log(result);
//************************************************** */
// console.log("Jack Ma maslahatlari");
// const list = [
//     "yaxshi talaba buling", //0-20
//     "tugri boshliq tanlang va koproq xato qiling", //20-30
//     "uzingizga ishlashingizni boshlang", //30-40
//     "siz kuchli bolgan narsalarni qiling", //40-50
//     "yoshlarga investitsiya qiling", //50-60
//     "endi dam oling, foydasi yuq endi",//60
// ]; //Callback function
// function maslahatBering(a, callback){
//     if(typeof a !== 'number') callback("insert  a number",null);
//     else if(a<=20) callback(null, list[0]);
//     else if(a >20 && a <= 30) callback(null,list[1]);
//     else if(a >30 && a <= 40) callback(null,list[2]);
//     else if(a >40 && a <= 50) callback(null,list[3]);
//     else if(a >50 && a <= 60) callback(null,list[4]);
//   else{
//     setInterval(() => {
//       callback(null, list[5]);
//     }, 5000);
//   }
// }
// console.log("Passed here 0");
// maslahatBering(65, (err, data)=>{
//     if(err) console.log('ERROR:', err);
//     else{ 
//         console.log('javob:',data);}
// });
// console.log("passed here 1");




// ASYNC functions
// //then/catch
// async function maslahatBering(a){
//   if(typeof a !== 'number') throw new Error("insert  a number");
//   else if(a<=20) return list[0];
//   else if(a >20 && a <= 30) return list[1];
//   else if(a >30 && a <= 40) return list[2];
//   else if(a >40 && a <= 50) return list[3];
//   else if(a >50 && a <= 60) return list[4];
// else{
//   return new Promise((resolve, reject) =>{
//     setTimeout(() => {
//       resolve(list[5]);
//      }, 5000);
  

//   });
//   // setTimeout(function(){
//   //    return list[5]);
//   // },5000);
 
// }
// }

// async function run(){
//   let javob = await maslahatBering(25);
//   console.log(javob);
//   javob = await maslahatBering(70);
//   console.log(javob);
//   javob = await maslahatBering(41);
//   console.log(javob);
// }
// run();
// console.log("Passed here 0");
// maslahatBering(61).then (data =>{
//   console.log('javob',data);
// }
// ).catch(err  =>{
// console.log("ERROR:",err)
// })
// console.log("passed here 1");
// function maslahatBering(a, callback){
//     if(typeof a !== 'number') callback("insert  a number",null);
//     else if(a<=20) callback(null, list[0]);
//     else if(a >20 && a <= 30) callback(null,list[1]);
//     else if(a >30 && a <= 40) callback(null,list[2]);
//     else if(a >40 && a <= 50) callback(null,list[3]);
//     else if(a >50 && a <= 60) callback(null,list[4]);
//   else{
//     setTimeout(function(){
//         callback(null, list[5]);
//     },5000);
   
//   }
// }
// console.log("Passed here 0");
// maslahatBering(65, (err, data)=>{
//     if(err) console.log('ERROR:', err);
//     else{ 
//         console.log('javob:',data);}
// });
// console.log("passed here 1");
