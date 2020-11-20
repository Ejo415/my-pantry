class KitchensController < ApplicationController
    def index 
        kitchens = Kitchen.all 

        render :json => kitchens, include: :items
    end

    def create
    byebug
        @kitchens = Kitchen.new(kit_params)
        if @kitchens.save
            render :json => @kitchens, include: :items
        end
    end
end

private

def kit_params
    params.require(:kitchen).permit(:name)
end