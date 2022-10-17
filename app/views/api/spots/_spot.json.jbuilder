json.extract! spot, 
:id, 
:title, 
:description, 
:host_id, 
:street_address, 
:city, 
:state,
:region,
:zip_code,
:country,
:listing_type,
:price,
:lat,
:lng,
:is_live,
:max_guests,
:created_at, 
:updated_at,
:photo


if spot.photo.attached?
    json.photo (spot.photo.url) 
end
