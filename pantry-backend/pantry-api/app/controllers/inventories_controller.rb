class InventoriesController < ApplicationController

    def index 
     inventories = Inventory.all 

        render :json => inventories, include:  [:kitchen, :item], except: [:created_at, :updated_at, :quantity]
    end
end