class ApiService{

    constructor() {
        this.baseUrl = `http://localhost:3000`;
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

    async getInvInfo(){
      const resp = await fetch(this.baseUrl+"/inventories")
      const data = await resp.json()
      return data
  }

    async addKitchen(kData) {
        const res = await fetch(this.baseUrl+"/kitchens", {
          method: 'POST',
          headers: {
              'Content-type':'application/json',
              'Accept':'application/json'
            },
          body: JSON.stringify(kData)
        });
        const response = await res.json()
        return response
     }

      async addItem(iData) {
        const res = await fetch(this.baseUrl+"/items", {
          method: 'POST',
          headers: {
              'Content-type':'application/json',
              'Accept':'application/json'
            },
          body: JSON.stringify(iData)
        });
        const response = await res.json()
        return response
      }

      async invAdd(invData) {
        const res = await fetch(this.baseUrl+"/inventories", {
          method: 'POST',
          headers: {
              'Content-type':'application/json',
              'Accept':'application/json'
            },
          body: JSON.stringify(invData)
        });
        const response = await res.json()
        return response
      }

      async invRemove(sendData) {
        const res = await fetch(this.baseUrl+`/inventories/${sendData.id}`, {
          method: 'DELETE',
          headers: {
            'Content-type':'application/json',
            'Accept':'application/json'
          },
        body: JSON.stringify(sendData)
      });
     // const response = await res.json()
    // return response
    }


}