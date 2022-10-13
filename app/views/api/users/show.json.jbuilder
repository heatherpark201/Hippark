json.user do
    json.extract! @user, :id, :email, :first_name, :last_name, :date_of_birth, :phone_number, :created_at, :updated_at
  end