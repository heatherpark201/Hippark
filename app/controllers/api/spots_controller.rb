class Api::SpotsController < ApplicationController
    before_action :require_logged_in, only: :create 
    wrap_parameters include: Spot.attribute_names + ["hostId"] + ["streetAddress"]+ ["zipCode"]+ ["listingType"]+ ["isLive"] + ["maxGuests"] + [:photo], format: :multipart_form
  
    def index 
      
      if filter_count > 1
        if state && guest_range
          @spots = Spot.where(state: state).where(max_guests: guest_range)
        elsif (state && type) 
          @spots = Spot.where(state: state).where(listing_type: type)
        else 
          @spots = Spot.where(max_guests: guest_range).where(listing_type: type)
        end
      elsif filter_count == 1
        @spots = Spot.where(state: state) if state
        @spots = Spot.where(listing_type: type) if type
        @spots = Spot.where(max_guests: guest_range) if guest_range
      else
        @spots = Spot.all
      end
  
      render :index
    end 

    def show
      @spot = Spot.find(params[:id])
      render :show
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

    def filter_count
      count = 0;

      params.each do |k,v| 
        if k == 'state'
          count += 1
        elsif (k == 'guests')
          count +=  1
        elsif (k == 'type')
          count += 1
        elsif (v == 'null')
          count -= 1
        end
      end

      count
    end

    def type
      return nil if params[:type] == 'null'
      params[:type]
    end

    def state
      return nil unless params[:state]
      params[:state]
    end
    
    def guest_range
      return nil unless params[:guests]
      1..params[:guests]
    end
  
  end