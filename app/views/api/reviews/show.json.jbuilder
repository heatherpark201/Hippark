
    json.partial! '/api/reviews/review', review: @review
  

    json.partial! '/api/users/user', user: @review.author

  
  
    json.partial! 'api/spots/spot', spot: @review.spot


