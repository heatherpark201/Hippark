class UpdateSpots < ActiveRecord::Migration[7.0]
  def change
    remove_index :spots, :country
    remove_index :spots, :zip_code
    add_index :spots, :country
    add_index :spots, :zip_code
  end
end
