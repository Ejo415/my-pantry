class Inventory {

    static all = []

    constructor(inv){
    this.id = inv.id
    this.kitchen_id = inv.kitchen_id
    this.item_id = inv.item_id
    Inventory.all.push(this)
   } 

   static findInv(k, i){
     let kNum =  Number.parseInt(k)
     let iNum =  Number.parseInt(i)
   return Inventory.all.find((inv)=>{
        return inv.kitchen_id === kNum && inv.item_id === iNum 
     }).id

     
   }
}