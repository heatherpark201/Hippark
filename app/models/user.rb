# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  first_name      :string           not null
#  last_name       :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  date_of_birth   :string
#  phone_number    :integer
#
class User < ApplicationRecord
  has_secure_password
  before_validation :ensure_session_token

  has_many :reviews, 
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :Review,
    dependent: :destroy,
    inverse_of: :author

  has_many :spots, 
    primary_key: :id,
    foreign_key: :host_id,
    class_name: :Spot,
    dependent: :destroy

  validates :email, 
    uniqueness: true, 
    length: { in: 3..255 }, 
    format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :session_token, presence: true, uniqueness: true
  validates :password, length: { in: 6..255 }, allow_nil: true
  validates :first_name, :last_name, :zip_code, presence: true
  
 
  def self.find_by_credentials(credential, password)
    field = credential =~ URI::MailTo::EMAIL_REGEXP ? :email : ""
    user = User.find_by(field => credential)
    user&.authenticate(password)
  end 

  def reset_session_token!
    self.update!(session_token: generate_unique_session_token)
    self.session_token
  end

  private

  def generate_unique_session_token
    loop do
      token = SecureRandom.base64
      break token unless User.exists?(session_token: token)
    end
  end

  def ensure_session_token
    self.session_token ||= generate_unique_session_token
  end
end
