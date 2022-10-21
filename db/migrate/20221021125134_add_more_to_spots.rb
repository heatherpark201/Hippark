class AddMoreToSpots < ActiveRecord::Migration[7.0]
  def change
    add_column :spots, :acres, :integer
    add_column :spots, :sites, :integer
  end
end
