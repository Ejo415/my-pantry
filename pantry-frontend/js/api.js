class ApiService{

    constructor() {
        this.baseUrl = `http://locakhost:3000`;
    }

    async getAllKitchens(){
        const resp = await fetch(this.baseUrl+"/kitchens")
        const data = await resp.json()
        return data
    }

    async getAllItems(){
        const resp = await fetch(this.baseUrl+"/items")
        const data = await resp.json()
        return data
    }

}