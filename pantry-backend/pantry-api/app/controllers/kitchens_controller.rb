class KitchensController < ApplicationController
    def index 
        kitchens = Kitchen.all 

        render :json => kitchens, include: :items
    end
end
