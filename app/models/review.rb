class Review < ApplicationRecord
    validates :body, :recommends, presence: true
    validates :rating, inclusion: { in: 1..5, message: "must be between 1 and 5" }

    validate :no_dup
  
    belongs_to :spot
    belongs_to :author, class_name: :User

  private

  def no_dup 
    if Review.exists?(author_id: author_id, spot_id: spot_id)
      errors.add(:base, message: "You have already left a review for this spot!")
    end
  end
end
