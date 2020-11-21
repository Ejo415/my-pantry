class ItemsController < ApplicationController

    def index 
        @items = Item.all 

        render json: @items, include: :inventories
        
    end

    def create
        # byebug
             @items = Item.new(kit_params)
             if @items.save
                 render json: @items
         end
     end

     def kit_params
        params.require(:item).permit(:item_name, :category)
    end
    
    
end
