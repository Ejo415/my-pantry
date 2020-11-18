class Pantry {

    static all = []

    constructor(pant){
        this.id = pant.id
        this.name = pant.name
        this.items = pant.items
        Kitchen.all.push(this)
    }


    htmlify(){
        return(`
        <div class="card text-center" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${this.name}</h5>
          <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
            Pantry
          </button>
          <div class="collapse" id="collapseExample">
            <div class="card card-body">
              <li>${this.items} <button type="button" class="btn btn-outline-danger btn-sm">Remove</button></li>
            </div>
          </div>
        </div>
      </div>
        
        
        `)


    }
}