class Api::SpotsController < ApplicationController
    before_action :require_logged_in, only: :create 
    wrap_parameters include: Spot.attribute_names + ["hostId"] + ["streetAddress"]+ ["zipCode"]+ ["listingType"]+ ["isLive"] + ["maxGuests"] + [:photo], format: :multipart_form
  
    def index 
      if type != nil
        @spots = Spot.where(listing_type: type)
      else
        @spots = Spot.all
      end
  
      render json: @spots
    end 

    def show
      @spot = Spot.find(params[:id])
      render json: @spot
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

    def search
      
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

    def type
      return nil if !params[:type]
      params[:type]
    end

  
  end
  