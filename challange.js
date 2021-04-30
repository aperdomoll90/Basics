 const books = [
 {
 bookName:'todd in the tree',
 rating: 4.4
 },
 {
      bookName:'Jonathans code',
     rating: 5 },
 {
 bookName:'the great outdoor',
 rating: 2.0
 }
 ]
// 
// function returnTopBooks(book){
//     return topBooks = books.filter(book => book.rating >= 4.5 )}


function returnTopBooks(books){
    let topBooks =[]
for (let i = 0; i < books.length; i++){
if(books[i].rating >= 4.5){
    topBooks.push(books[i])
}}}
