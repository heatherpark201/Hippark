class Api::UsersController < ApplicationController
  wrap_parameters include: User.attribute_names + ['password'] + ["firstName"] + ["lastName"]+ ["zipCode"]+ ["phoneNumber"]

  def create
    @user = User.new(user_params)
    
    # render json: user_params
    
    if @user.save
      login!(@user)
      render 'api/users/show'
    else
      render json: { errors: @user.errors.full_messages, status: :unprocessable_entity}
    end
  end
 
  private
  
  def user_params
    params.require(:user).permit(:email, :first_name, :last_name, :zip_code, :password)
  end
end

