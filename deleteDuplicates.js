const shoppingList = [, 'banana', 'sausage', 'eggs', 'burger', 'apple'];
const cart = ['apple', 'banana', 'eggs'];


// const deleteDuplicate =(shoppingList,cart )=>{ 
//     return shoppingList.forEach(item => {
//         return  !cart.includes(item)
//     }
   
//     )
// }

//const newList =[]
//const deleteDuplicate =()=>{ shoppingList.forEach(item => {
//  return !cart.includes(item) ? newList.push[item] :shoppingList.splice(item,1)
//}
//    )
//}


const duplicates = shoppingList.filter(item => {
   return  !cart.includes(item)})


// const deleteDuplicate = duplicates.forEach(duplicate =>{
//    return shoppingList.splice(duplicate,1)}
    

console.log(duplicates) 
// console.log(deleteDuplicate) 

// const deleteDuplicate = function(shopMap,cartMap){
// let activity = shopMap.map(function(shopMap){}

// )
// }