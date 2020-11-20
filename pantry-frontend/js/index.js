console.log("index loaded")

const api = new ApiService();

function init() {
    renderKitchens()
    bindEventListeners()
}

function bindEventListeners(){
    const newKitchenForm = document.getElementById('new-kitchen');
    const newItemForm = document.getElementById('new-item')

    newKitchenForm.addEventListener('submit', addKitchen);
  //  newItemForm.addEventListener('submit', addItem);
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


async function addKitchen(e) {
    e.preventDefault();
    const input = e.target.name.value;
    const kData = {name: input}
    console.log(kData)
    const res = await api.addKitchen(kData);
    console.log(res)
    new Pantry(res)
    e.target.reset();
    Pantry.renderKitchens()
 }


init()