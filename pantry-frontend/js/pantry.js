class Pantry {

    static all = []
    

    constructor(pant){
        this.id = pant.id
        this.name = pant.name
        this.item = pant.items
        this.category = pant.category
        this.item_name = pant.item_name
        Pantry.all.push(this)
    }


    htmlifyKitchen(){
        return(`
        <div class="card text-center" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${this.name}</h5>
          <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#kitchen-inventory-${this.id}" aria-expanded="false" aria-controls="collapseExample">
            Pantry
          </button>
          <div class="collapse" id="kitchen-inventory-${this.id}">
            <div class="card card-body">
               ${this.item.map(item =>  `<li> ${item.item_name} - ${item.category}<br><button type="button" class="btn btn-outline-danger btn-sm">Remove</button></li> `).join("")} 
            </div>
          </div>
        </div>
      </div>
   `)}

  

    static htmlifyKitchens(){
      return Pantry.all.map(kitchen=> kitchen.htmlifyKitchen()).join("")
    }

   


    static renderKitchens(){
        //clear kitchen side and replace
        const kitchenCards = document.getElementById("kitchen-container") 
        kitchenCards.innerHTML = ""
        kitchenCards.innerHTML = Pantry.htmlifyKitchens()

    }

 
}