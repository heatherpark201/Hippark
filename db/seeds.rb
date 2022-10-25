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
        date_of_birth: '07/12/1994',
        password: 'password'
    )

    test2 = User.create!(
        id: 2,
        first_name: 'New',
    	last_name: 'Park',
    	email: 'newnew@user.io',
    	password: 'password123',
    	date_of_birth: '05/04/1994'
    )

    test3 = User.create!(
        id: 3,
        first_name: 'Bob',
    	last_name: 'Michael',
    	email: 'Bob.Michael@gmail.com',
    	password: 'password',
    	date_of_birth: '01/01/2000'
    )
    test4 = User.create!(
        id: 4,
        first_name: 'Han',
    	last_name: 'Chen',
    	email: 'HanChen@appacademy.com',
    	password: 'password',
    	date_of_birth: '01/01/2000'
    )
    test5 = User.create!(
        id: 5,
        first_name: 'Tommy',
    	last_name: 'Wommy',
    	email: 'TommyWommy@gmail.com',
    	password: 'password',
    	date_of_birth: '01/01/2000'
    )
    test6 = User.create!(
        id: 6,
        first_name: 'Ivy',
    	last_name: 'Liu',
    	email: 'Ivy@gmail.com',
    	password: 'password',
    	date_of_birth: '10/10/1010'
    )
    test7 = User.create!(
        id: 7,
        first_name: 'Brian',
    	last_name: 'Brian',
    	email: 'Brian@demo.com',
    	password: 'password',
    	date_of_birth: '01/01/2000'
    )
   

   

puts "Creating spots..."
  random_description = proc { Faker::Lorem.paragraphs(number: rand(1..8)).join("\n\n") }

  spot1 = Spot.create!(
      title: 'Camp Happy App Academy',
      description: random_description.call,
      host_id: test1.id,
      street_address: '360 Mammoth Cave Rd',
      city: 'Brownsville',
      state: 'Kentucky',
      region: 'South',
      acres: 56,
      sites: 2,
      zip_code: '42210',
      country: 'USA',
      listing_type: 'lodge',
      price: 104,
      lat: 37.17148,
      lng: -86.19666,
      is_live: 'true',
      max_guests: 8,
      photo_urls: [
        'https://hippark-photos.s3.amazonaws.com/spot_photos/chris-holder-uY2UIyO5o5c-unsplash.jpg',
         'https://hippark-photos.s3.amazonaws.com/spot_photos/denys-nevozhai-63Znf38gnXk-unsplash.jpg',
         'https://hippark-photos.s3.amazonaws.com/spot_photos/everett-mcintire-BPCsppbNRMI-unsplash.jpg',
         'https://hippark-photos.s3.amazonaws.com/spot_photos/mier-chen-TfPVLEtIG74-unsplash.jpg'
        ]
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
      acres: 43,
      sites: 1,
      price: 87,
      lat: 39.48658,
      lng: -105.07412,
      is_live: 'true',
      max_guests: 4,
      photo_urls: [
        'https://hippark-photos.s3.amazonaws.com/spot_photos/jonathan-forage-1azAjl8FTnU-unsplash.jpg',
        'https://hippark-photos.s3.amazonaws.com/spot_photos/kyle-glenn-xY4r7y-Cllo-unsplash.jpg',
        'https://hippark-photos.s3.amazonaws.com/spot_photos/mier-chen-TfPVLEtIG74-unsplash.jpg'
        ]
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
      acres: 4,
      sites: 2,
      listing_type: 'campsite',
      price: 210,
      lat: 41.78897,
      lng: -123.37559,
      is_live: 'true',
      max_guests: 14,
      photo_urls: [
        'https://hippark-photos.s3.amazonaws.com/spot_photos/roadpass-rg-YHCIyays-unsplash.jpg',
        'https://hippark-photos.s3.amazonaws.com/spot_photos/scott-goodwill-y8Ngwq34_Ak-unsplash.jpg'
      ]
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
      acres: 34,
      sites: 23,
      country: 'USA',
      listing_type: 'campsite',
      price: 5000,
      lat: 41.78897,
      lng: -123.37559,
      is_live: 'true',
      max_guests: 2,
      photo_urls: [
        'https://hippark-photos.s3.amazonaws.com/spot_photos/spot1a.jpeg',
        'https://hippark-photos.s3.amazonaws.com/spot_photos/spot1b.jpeg',
        'https://hippark-photos.s3.amazonaws.com/spot_photos/spot2a.jpeg',
        'https://hippark-photos.s3.amazonaws.com/spot_photos/spot3a.jpeg'
      ]
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
      acres: 345,
      sites: 2,
      country: 'USA',
      listing_type: 'campsite',
      price: 30,
      lat: 41.78897,
      lng: -123.37559,
      is_live: 'true',
      max_guests: 14,
      photo_urls: [
        'https://hippark-photos.s3.amazonaws.com/spot_photos/spot3b.jpeg',
        'https://hippark-photos.s3.amazonaws.com/spot_photos/spot4a.jpeg'
      ]
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
      acres: 25,
      sites: 1,
      listing_type: 'RV',
      price: 120,
      lat: 41.78897,
      lng: -123.37559,
      is_live: 'true',
      max_guests: 14,
      photo_urls: [
        'https://hippark-photos.s3.amazonaws.com/spot_photos/stijn-te-strake-0ialT4fXAaA-unsplash.jpg',
        'https://hippark-photos.s3.amazonaws.com/spot_photos/suhyeon-choi-aoAvYRsjr1M-unsplash.jpg'
      ]
    )
  spot7 = Spot.create!(
      title: 'Champion Way',
      description: random_description.call,
      host_id: test1.id,
      street_address: '75 Gashes Creek Rd',
      city: 'Asheville',
      state: 'North Carolina',
      region: 'Smokey Mountains',
      acres: 21,
      sites: 1,
      zip_code: '28805',
      country: 'USA',
      listing_type: 'campsite',
      price: 160,
      lat: 35.58181,
      lng: -82.49281,
      is_live: 'true',
      max_guests: 12,
      photo_urls: [
        'https://hippark-photos.s3.amazonaws.com/spot_photos/thomas-le-UMxZIS6CPvQ-unsplash.jpg',
        'https://hippark-photos.s3.amazonaws.com/spot_photos/denys-nevozhai-63Znf38gnXk-unsplash.jpg',
        'https://hippark-photos.s3.amazonaws.com/spot_photos/denys-nevozhai-63Znf38gnXk-unsplash.jpg'
      ]
    )
  spot8 = Spot.create!(
      title: 'Santa Land Fun Park Campsite',
      description: random_description.call,
      host_id: test2.id,
      street_address: '571 Wolfetown Rd',
      city: 'Cherokee',
      state: 'North Carolina',
      acres: 34,
      sites: 1,
      region: 'The Rockies',
      zip_code: '28719',
      country: 'USA',
      listing_type: 'campsite',
      price: 89,
      lat: 35.47069,
      lng: -83.26123,
      is_live: 'true',
      max_guests: 8,
      photo_urls: [
        'https://hippark-photos.s3.amazonaws.com/spot_photos/suhyeon-choi-aoAvYRsjr1M-unsplash.jpg',
        'https://hippark-photos.s3.amazonaws.com/spot_photos/spot3a.jpeg',
        'https://hippark-photos.s3.amazonaws.com/spot_photos/denys-nevozhai-63Znf38gnXk-unsplash.jpg'
      ]
    )
  spot9 = Spot.create!(
      title: 'York Beautiful Park',
      description: random_description.call,
      host_id: test1.id,
      street_address: '2609 N York Hwy',
      city: 'Pall Mall',
      state: 'Tennessee',
      region: 'Smokey Mountains',
      zip_code: '38577',
      acres: 45,
      sites: 1,
      country: 'USA',
      listing_type: 'lodge',
      price: 420,
      lat: 36.54876,
      lng: -84.95107,
      is_live: 'true',
      max_guests: 12,
      photo_urls: [
        'https://hippark-photos.s3.amazonaws.com/spot_photos/spot4a.jpeg',
        'https://hippark-photos.s3.amazonaws.com/spot_photos/roadpass-rg-YHCIyays-unsplash.jpg',
        'https://hippark-photos.s3.amazonaws.com/spot_photos/scott-goodwill-y8Ngwq34_Ak-unsplash.jpg'
      ]
    )
  spot10 = Spot.create!(
      title: 'Big Sur Paradise',
      description: random_description.call,
      host_id: test2.id,
      street_address: '120 Highlands Dr',   
      city: 'Carmel-By-The-Sea',
      state: 'California',
      region: 'Pacific Coast',
      zip_code: '93923',
      country: 'USA',
      acres: 23,
      sites: 1,
      listing_type: 'lodge',
      price: 250,
      lat: 36.50228,
      lng: -121.93617,
      is_live: 'true',
      max_guests: 10,
      photo_urls: [
        'https://hippark-photos.s3.amazonaws.com/spot_photos/spot1b.jpeg',
        'https://hippark-photos.s3.amazonaws.com/spot_photos/roadpass-rg-YHCIyays-unsplash.jpg',
        'https://hippark-photos.s3.amazonaws.com/spot_photos/thomas-le-UMxZIS6CPvQ-unsplash.jpg',
        'https://hippark-photos.s3.amazonaws.com/spot_photos/denys-nevozhai-63Znf38gnXk-unsplash.jpg',
        'https://hippark-photos.s3.amazonaws.com/spot_photos/denys-nevozhai-63Znf38gnXk-unsplash.jpg'
      ]
    )


puts "Creating reviews..."

  r1 = Review.create!(
      title: 'Love',
      body: 'so cool loved my stay here! I would definitely stay here again',
      rating: 5,
      recommends: 'true',
      spot_id: spot1.id,
      author_id: test1.id
  )
  r2 = Review.create!(
      title: 'Truly Amazing',
      body: 'We had such a great time at this campsite. Almost anything imaginable was available there including the tiny cabin, smart tv, yard games, a smoker, pizza oven, etc. The site is very private with direct access to the Neversink river. It’s close to some really nice hiking too. Des and Tracy were very responsive and knowledgeable of the area. Highly recommend!',
      rating: 4,
      recommends: 'true',
      spot_id: spot1.id,
      author_id: test2.id
  )
  r3 = Review.create!(
      title: 'Bussin',
      body: 'My wife and I took a last minute glamping trip and we could not have picked a better spot than the Neversink sanctuary. The campsite is beautiful, and des & Tracy are extremely helpful. We will definitely be returning next year!',
      rating: 5,
      recommends: 'true',
      spot_id: spot1.id,
      author_id: test3.id
  )
  r4 = Review.create!(
      title: 'Getaway to the Stars',
      body: 'This is a fun little spot to do some car camping and they have some tentr spots and winnebagos you can rent. I brought some friends here for some weekend hang time. The sites are pretty classic. Space for a few tents, a fire ring, a grill, even a couple Adirondack chairs. Bathroom and cute camp store nearby. Everything you need, it’s all pretty cozy and the hosts are nice. The drive in is through a construction business and you can’t really leave the campground for hikes as it’s all private land. So if you want to go and do nature stuff you have to drive through the construction co driveway. But if you just wanna grill burgers and sit by the fire with your friends it’s perfect.',
      rating: 4,
      recommends: 'true',
      spot_id: spot6.id,
      author_id: test4.id
  )
  


  # puts "Attaching photos..."
  # spot1.photo.attach(
  #   io: File.open("db/assets/images/camp_tester.jpeg"), 
  #   filename: "camp_tester.jpeg"
  # )

  # spot1.photo.attach(
  #   io: File.open("db/assets/images/prop1a.jpeg"), 
  #   filename: "prop1a.jpeg"
  # )
 end