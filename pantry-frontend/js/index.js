console.log("index loaded")

const api = new ApiService();

function init() {
    renderKitchens()
    
}

async function renderKitchens(){
    const data = await api.getAllKitchens()
    for(kitchen of data){
    let test =  new Pantry(kitchen)
      console.log(test)
    }
    Pantry.renderKitchens()
    renderItems()
}

async function renderItems(){
    const data = await api.getAllItems()
    console.log(data)
    for(item of data){
      new Item(item)
    }
    Item.renderItem()
}


init()