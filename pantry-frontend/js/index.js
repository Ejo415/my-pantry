console.log("index loaded")

const api = new ApiService();

function init() {
    renderKitchens()
}

async function renderKitchens(){
    const data = await api.getAllKitchens()
    for(kitchen of data){
      new Pantry(kitchen)
    }
    Pantry.renderKitchens()
}


init()