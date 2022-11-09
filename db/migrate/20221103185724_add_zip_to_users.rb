class AddZipToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :zip_code, :string
    remove_column :users, :date_of_birth
  end
end
