
  
# @spot.reviews.includes(:author).each do |review|
#     json.set! review.id do
#         json.partial! 'api/reviews/review', review: review
#     end

#     json.set! review.author_id do
#         json.partial! 'api/users/user', user: review.author
#     end
# end
  
json.spot do
    json.partial! '/api/spots/spot', spot: @spot
  end
  
  @spot.reviews.includes(:author).each do |review|
    json.reviews do
      json.set! review.id do
        json.partial! 'api/reviews/review', review: review
      end
    end
  
    json.users do
      json.set! review.author_id do
        json.partial! 'api/users/user', user: review.author
      end
    end
end
  


# json.partial! '/api/spots/spot', spot: @spot

  
# @spot.reviews.includes(:author).each do |review|

#     json.set! review.id do
#         json.partial! 'api/reviews/review', review: review
#     end

#     json.set! review.author_id do
#         json.partial! 'api/users/user', user: review.author
#     end  
# end
  

# json.spot do
#     json.partial! '/api/spots/spot', spot: @spot
# #  end
  
#   @spot.reviews.includes(:author).each do |review|
#       json.set! review.id do
#         json.partial! 'api/reviews/review', review: review
#       end
    
  
#       json.set! review.author_id do
#         json.partial! 'api/users/user', user: review.author
#       end
    
#   end
  