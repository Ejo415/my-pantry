class InventoriesController < ApplicationController

    def index 
     inventories = Inventory.all 

        render :json => inventories, include:  [:kitchen, :item], except: [:created_at, :updated_at, :quantity]
    end

    def create 
        @inventories = Inventory.new(inv_params)
        if inv.save 
            render :json => @inventories, include:  [:kitchen, :item], except: [:created_at, :updated_at, :quantity]
        end
    end

    def destroy
        @inv.destroy
    end







    private 

    def inv_params
        params.require(:inventory).permit(:kitchen_id, :item_id)
    end
end