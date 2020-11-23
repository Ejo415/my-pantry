console.log("index loaded")

const api = new ApiService();

function init() {
   invInfo()
   renderItems()
   bindEventListeners()
   renderLeftSide()
    
}

function bindEventListeners(){
    const newKitchenForm = document.getElementById('new-kitchen');
    const newItemForm = document.getElementById('new-item')
    const addInvButton = document.getElementById(`item-container`)
    const removeInvButton = document.getElementById(`kitchen-container`)
    
    addInvButton.addEventListener('click', function(e) { 
      if(e.target.classList.contains('addInvButton')){
        addInv(e)
      }
    });

    removeInvButton.addEventListener('click', function(e) { 
      if(e.target.classList.contains('removeInvButton')){
        removeInv(e)
      }
    });
    newKitchenForm.addEventListener('submit', addKitchen);
    newItemForm.addEventListener('submit', addItem);
}

 async function invInfo(){
    const data = await api.getInvInfo()
    for(inv of data){
    let test =  new Inventory(inv)
     //console.log(test)
    }}

async function renderLeftSide(){
  console.log("render kitchens")
    Pantry.all = []
    const data = await api.getAllKitchens()
    for(kitchen of data){
    let test =  new Pantry(kitchen)
    //  console.log(test)
    }
    Pantry.renderKitchens()
    invInfo()
    
  }

 
async function renderItems(){
    const data = await api.getAllItems()
    //console.log(data)
    for(item of data){
    new Item(item)
    }
    Item.renderItem()
    
}



async function addKitchen(e) {
    e.preventDefault();
    const input = e.target.name.value;
    const kData = {name: input}
    //console.log(kData)
    const res = await api.addKitchen(kData);
    //console.log(res)
    new Pantry(res)
    e.target.reset();
    Pantry.renderKitchens()
 }

 async function addItem(e) {
    e.preventDefault();
    const input1 = e.target.itemName.value;
    const input2 = e.target.category.value;
    const iData = {item_name: input1, category:input2 }
    //console.log(iData)
    const res = await api.addItem(iData);
    console.log(res)
    new Item(res)
    e.target.reset();
    Item.renderItem()
}

async function addInv(e) {
    e.preventDefault();
    //debugger
    const input1 = e.target.id;
    const input2 = e.target.parentElement.id;
    const invData = {kitchen_id: input1, item_id: input2 }
   // console.log(invData)
    const res = await api.invAdd(invData);
    //console.log(res)
    renderLeftSide()
    
}

async function removeInv(e) {
 // console.log(e.target)
  e.preventDefault();
  const kit = e.target.parentElement.parentElement.id;
  const i = e.target.id;
  const invData = Inventory.findInv(kit,i) 
  //debugger
  const sendData = {id: invData}
 // console.log(sendData)
  const res = await api.invRemove(sendData);
  //console.log(res)
  renderLeftSide()
}

init()