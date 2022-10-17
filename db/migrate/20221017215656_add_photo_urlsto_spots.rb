class AddPhotoUrlstoSpots < ActiveRecord::Migration[7.0]
  def change
    add_column :spots, :photo_urls, :string, array: true, :default => []
  end
end
