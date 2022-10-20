json.review do
    json.partial! '/api/reviews/review', review: @review
end
  
  json.user do
    json.partial! '/api/users/user', user: @review.author
end
  
  json.spot do 
    json.partial! 'api/spots/spot', spot: @review.spot
end