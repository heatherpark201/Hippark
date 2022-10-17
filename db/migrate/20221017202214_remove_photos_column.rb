class RemovePhotosColumn < ActiveRecord::Migration[7.0]
  def change
    remove_column :spots, :photos
  end
end
