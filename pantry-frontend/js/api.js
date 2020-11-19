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

    async addKitchen(kData) {
        const res = await fetch(this.baseUrl+"/kitchens", {
          method: 'POST',
          body: kData,
        });
        return res;
      }

      async addItem(iData) {
        const res = await fetch(this.baseUrl+"/items", {
          method: 'POST',
          body: iData,
        });
        return res;
      }

      async invAdd(invData) {
        const res = await fetch(this.baseUrl+"/inventories", {
          method: 'POST',
          body: InvData,
        });
        return res;
      }

      async addItem(InvData) {
        const res = await fetch(this.baseUrl+"/inventories", {
          method: 'DELETE',
          body: InvData,
        });
        return res;
      }

}