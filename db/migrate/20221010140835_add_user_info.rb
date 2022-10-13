class AddUserInfo < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :date_of_birth, :string
    add_column :users, :phone_number, :integer
    add_index :users, :phone_number, unique: true
  end
end
