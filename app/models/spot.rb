# == Schema Information
#
# Table name: spots
#
#  id             :bigint           not null, primary key
#  title          :string           not null
#  description    :text             not null
#  host_id        :bigint           not null
#  street_address :string           not null
#  city           :string           not null
#  state          :string           not null
#  region         :string           not null
#  zip_code       :string           not null
#  country        :string           not null
#  listing_type   :string           not null
#  price          :integer          not null
#  lat            :float            not null
#  lng            :float            not null
#  is_live        :boolean          not null
#  max_guests     :integer          not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#
class Spot < ApplicationRecord
    belongs_to :host,
        primary_key: :id,
        foreign_key: :host_id,
        class_name: :User
    
    validates :title, 
        presence: true,
        uniqueness: true
        
    validates :description, :host_id, :street_address, :city, :state, :region, :zip_code, :country, :listing_type, :lat, :lng, :max_guests, presence: true

    validates :is_live, 
        presence: true
        # incluson: [true, false]
    
    validates :price, 
        presence: true,
        numericality: {in: 20..6000}

    validates :max_guests, 
        presence: true,
        numericality: {in: 2..20}
    

    def self.filter(search)
        if search 
            filter_type = Spot.find_by(search)
            if filter_type 
                self.where(search)
            else
                @spots = Spot.all
            end
        else
            @spots = Spot.all
        end
    end


        
end
