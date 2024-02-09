// TASK A 
// Shunday 2 parametrli function tuzing,
// hamda birinchi parametrdagi leterni ikkinchi parametrdagi suzdan
// qatnashgan sonni return qilishi kerak buladi
// Masalan countLetter("e","engineer") 3ni return qiladi
const suz = (alp,word)=>{
  let count = 0;
  for(let i = 0; i<word.length;i++){
  if(word[i]===alp){
    count++;
  }
}
  return count;
};

const result = suz("b", "basketbol");
console.log(result);

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
