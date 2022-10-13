# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_10_12_192159) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "spots", force: :cascade do |t|
    t.string "title", null: false
    t.text "description", null: false
    t.bigint "host_id", null: false
    t.string "street_address", null: false
    t.string "city", null: false
    t.string "state", null: false
    t.string "region", null: false
    t.string "zip_code", null: false
    t.string "country", null: false
    t.string "listing_type", null: false
    t.integer "price", null: false
    t.float "lat", null: false
    t.float "lng", null: false
    t.boolean "is_live", null: false
    t.integer "max_guests", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["city"], name: "index_spots_on_city"
    t.index ["country"], name: "index_spots_on_country"
    t.index ["host_id"], name: "index_spots_on_host_id"
    t.index ["listing_type"], name: "index_spots_on_listing_type"
    t.index ["region"], name: "index_spots_on_region"
    t.index ["state"], name: "index_spots_on_state"
    t.index ["title"], name: "index_spots_on_title", unique: true
    t.index ["zip_code"], name: "index_spots_on_zip_code"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "date_of_birth"
    t.integer "phone_number"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["phone_number"], name: "index_users_on_phone_number", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

  add_foreign_key "spots", "users", column: "host_id"
end
