class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.text :body, null: false
      t.integer :rating, null: false
      t.boolean :recommends, null: false
      t.references :spot, null: false, foreign_key: true, index: false
      t.references :author, null: false, foreign_key: {to_table: :users}

      t.timestamps
    end

    add_index :reviews, [:spot_id, :author_id], unique: true
  end
end
