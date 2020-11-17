function init() {
    const containerDiv = document.getElementById("container");

    function getKitchens() {
        fetch('http://localhost:3000/kitchens')
        .then(function(res){
            return res.json()
        })
        .then(function(data){
            console.log(data)
        })
    }

    getKitchens()
}

init();