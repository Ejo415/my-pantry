class Item{

    static all = []

    constructor(pant){
        this.id = pant.id
        this.category = pant.category
        this.item_name = pant.item_name
        
        Item.all.push(this)
    }
    

    htmlifyItem(){
        return (` <ul class="list-group list-group-flush">
         <li class="list-group-item" >${this.item_name} - ${this.category}<div class="dropdown">
             <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
               Add to
             </button>
             <div class="dropdown-menu" id='${this.id}' aria-labelledby="dropdownMenu2">
             ${Pantry.all.map(pantry =>  `<button class="dropdown-item addInvButton"  type="button" id="${pantry.id}">${pantry.name}</button>`).join("")}
             </div>
           </div></li>
        </ul>`
        )}

    static htmlifyItems(){
        return Item.all.map(item=> item.htmlifyItem()).join("")
      }

    static renderItem(){
        //clear item side and replace
        const itemList = document.getElementById("item-container") 
        itemList.innerHTML = ""
        itemList.innerHTML = Item.htmlifyItems()
    }




}