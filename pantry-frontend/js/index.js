console.log("index loaded")

const api = new ApiService();

function init() {
    //const containerDiv = document.getElementById("container");

    function getKitchens() {
        fetch('http://localhost:3000/kitchens')
        .then(function(res){
            return res.json()
        })
        .then(function(data){
            console.log(data)
            for(kitchen of data){
            new Pantry(kitchen)
            }
            Pantry.renderKitchens()
        })
    }

    getKitchens()
}

init();