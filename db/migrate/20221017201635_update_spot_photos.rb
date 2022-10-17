class UpdateSpotPhotos < ActiveRecord::Migration[7.0]
  def change
    add_column :spots, :photos, :string
  end
end
