// FIZZ BUZZ GAME ANY NUMBER DIVISIBLE BY 3 IS FIZZ ANY NUMBER /5 IS BUZZ AND IF /3 AND /5 IS FIZZ BUZZ

// WITH ONLY TWO CONDITIONS AND A VARIABLE MESSAGE

for (let i = 1; i < 20; i++) {
    let msg = ''
    if (!(i % 3)) {
       msg += 'FIZZ' }
    if (!(i % 5)) {
        msg += 'BUZZ' } 
console.log(msg || i)  
}



// WITH TERNARIES

//for (let i = 1; i < 20; i++) {
//const msg = (!(i % 3)) 
//      ? 'FIZZ'
//      : (!(i % 5))
//          ? 'BUZZ'
//          : (!(i % 5) && !(i % 3))
//          ? 'FIZZ BUZZ'
//          : i
//console.log(msg)
//}



// WITH A FOR LOOP

// for (let i = 1; i < 20; i++) {
//   if (!(i % 5) && !(i % 3)) {
//     console.log('FIZZ BUZZ');
//   } else if (!(i % 3)) {
//     console.log('FIZZ');
//   } else if (!(i % 5)) {
//     console.log('BUZZ');
//   } else {
//     console.log(i);
//   }
// }

//for (let i = 1 ; i < 20 ; i ++) {
//    if (i % 5 == 0 && i % 3 == 0){
//        console.log("FIZZ BUZZ")
//    } else if (i % 3 == 0){
//        console.log("FIZZ")}  
//    else if (i % 5 == 0){
//        console.log("BUZZ")
//    } else {
//        console.log(i)}
//       } 