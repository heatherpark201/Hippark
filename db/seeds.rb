# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

ApplicationRecord.transaction do 
    puts "Destroying tables..."
    # Unnecessary if using `rails db:seed:replant`
    User.destroy_all
  
    puts "Resetting primary keys..."
    # For easy testing, so that after seeding, the first `User` has `id` of 1
    ApplicationRecord.connection.reset_pk_sequence!('users')
  
    puts "Creating users..."
    test1 = User.create!(
        id: 1,
        first_name: 'Heather', 
        last_name: 'Park', 
        email: 'demo@user.io', 
        phone_number: 2015277876,
        date_of_birth: '07/12/1994',
        password: 'password'
    )

    test2 = User.create!(
        id: 2,
        first_name: 'New',
    	last_name: 'Park',
    	phone_number: 2015551234,
    	email: 'newnew@user.io',
    	password: 'password123',
    	date_of_birth: '05/04/1994'
    )

    test3 = User.create!(
        id: 3,
        first_name: 'Bob',
    	last_name: 'Michael',
    	phone_number: 1112221212,
    	email: 'Bob.Michael@gmail.com',
    	password: 'password',
    	date_of_birth: '01/01/2000'
    )

   

puts "Creating spots..."
  random_description = proc { Faker::Lorem.paragraphs(number: rand(1..3)).join("\n\n") }

  spot1 = Spot.create!(
      title: 'Camp Tester',
      description: random_description.call,
      host_id: test1.id,
      street_address: '360 Mammoth Cave Rd',
      city: 'Brownsville',
      state: 'Kentucky',
      region: 'South',
      zip_code: '42210',
      country: 'USA',
      listing_type: 'lodge',
      price: 104,
      lat: 37.17148,
      lng: -86.19666,
      is_live: 'true',
      max_guests: 8
    )
    
    
  spot2 = Spot.create!(
      title: 'Little Landing',
      description: random_description.call,
      host_id: test2.id,
      street_address: '10127 Waterton Rd',
      city: 'Littleton',
      state: 'Colorado',
      region: 'Rockies',
      zip_code: '80125',
      country: 'USA',
      listing_type: 'campsite',
      price: 87,
      lat: 39.48658,
      lng: -105.07412,
      is_live: 'true',
      max_guests: 4
    )

  spot3 = Spot.create!(
      title: 'Curly Jack Campground',
      description: random_description.call,
      host_id: test3.id,
      street_address: '63822 CA-96',
      city: 'Happy Camp',
      state: 'California',
      region: 'Pacific Northwest',
      zip_code: '96039',
      country: 'USA',
      listing_type: 'campsite',
      price: 210,
      lat: 41.78897,
      lng: -123.37559,
      is_live: 'true',
      max_guests: 14
    )
    
  spot4 = Spot.create!(
      title: '5th Ave Wonder by Ian',
      description: random_description.call,
      host_id: test3.id,
      street_address: '100 5th Ave',
      city: 'New York',
      state: 'New York',
      region: 'East Coast',
      zip_code: '00000',
      country: 'USA',
      listing_type: 'tent',
      price: 5000,
      lat: 41.78897,
      lng: -123.37559,
      is_live: 'true',
      max_guests: 2
  )

  spot5 = Spot.create!(
      title: 'National Treasure Beauty',
      description: random_description.call,
      host_id: test3.id,
      street_address: '63822 CA-96',
      city: 'Omaha',
      state: 'Nebraska',
      region: 'Pacific Northwest',
      zip_code: '96039',
      country: 'USA',
      listing_type: 'campsite',
      price: 30,
      lat: 41.78897,
      lng: -123.37559,
      is_live: 'true',
      max_guests: 14
    )

  spot6 = Spot.create!(
      title: 'Hi Baby Gorgeous',
      description: random_description.call,
      host_id: test3.id,
      street_address: '63822 CA-96',
      city: 'Salt Lake City',
      state: 'Utah',
      region: 'The Rockies',
      zip_code: '96039',
      country: 'USA',
      listing_type: 'RV',
      price: 120,
      lat: 41.78897,
      lng: -123.37559,
      is_live: 'true',
      max_guests: 14
    )

  puts "Attaching photos..."
  spot1.photo.attach(
    io: File.open("db/assets/images/camp_tester.jpeg"), 
    filename: "camp_tester.jpeg"
  )

  spot1.photo.attach(
    io: File.open("db/assets/images/prop1a.jpeg"), 
    filename: "prop1a.jpeg"
  )
 end