class CreateSpots < ActiveRecord::Migration[7.0]
  def change
    create_table :spots do |t|
      t.string :title, null: false, index: {unique: true}
      t.text :description, null: false
      t.references :host, null: false, foreign_key: {to_table: :users}
      t.string :street_address, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.string :region, null: false
      t.string :zip_code, null: false, index: {unique: true}
      t.string :country, null: false, index: {unique: true}
      t.index :city
      t.index :state
      t.index :region
      t.string :listing_type, null: false
      t.index :listing_type
      t.integer :price, null: false
      t.float :lat, null: false
      t.float :lng, null: false
      t.boolean :is_live, null: false 
      t.integer :max_guests, null: false
      t.timestamps
    end
  end
end
