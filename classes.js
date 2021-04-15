class Product{
constructor (productName){
    this.name = productName
}
display(){
    return 'For sale:' + this.name
 }
}

let prod1 = new Product('shirt')

class item extends Product {
constructor(productName, sku, style){
super (productName)
this.sku = sku
this.style = style
}
itemDisplay() {
    return this.display() + `, ${this.style} (${this.sku})`
}
sellSome(qtySold) {
    this.qty -= qtySold
}
receivedSome(qtyReceived) {
    this.qty += qtyReceived
}

}
let item1 = new item('shirt', 'tkl', 'large black', 10)
console.log(item1.display())
console.log(item1.itemDisplay())
