class Api::SpotsController < ApplicationController
    before_action :require_logged_in, only: :create 
    wrap_parameters include: Spot.attribute_names + ["hostId"] + ["streetAddress"]+ ["zipCode"]+ ["listingType"]+ ["isLive"] + ["maxGuests"]
  
    def index 
      @spots = Spot.all
      render json: @spots
    end

    def show
      @spot = Spot.find(params[:id])
    end
    def create
      @spot = Spot.new(spot_params)
      
      # render json: user_params
      
      if @spot.save
        login!(@user)
        render 'api/spots/show'
      else
        render json: { errors: @spot.errors.full_messages, status: :unprocessable_entity}
      end
    end
   
    private
    
    def spot_params
      params.require(:spot).permit(
        :title, 
        :description, 
        :host_id, 
        :street_address, 
        :city, 
        :state,
        :region,
        :zip_code,
        :country,
        :listing_type,
        :price,
        :lat,
        :lng,
        :is_live,
        :max_guests

      )
    end
  end
  
  