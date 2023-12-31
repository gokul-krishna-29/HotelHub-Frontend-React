const hotelsData = [
  {
    id: 1,
    name: "Luxury Hotel",
    location: "Chennai, India",
    availableRooms: 50,
    price: 200,
    rating: 4.5,
    description: "A luxurious hotel with stunning views.",
    images: ["/image1.jpg", "/image2.jpg", "/image3.jpg", "/image4.jpg"],
  },
  {
    id: 2,
    name: "Cozy Inn",
    location: "Berlin, Germany",
    availableRooms: 20,
    price: 100,
    rating: 3.8,
    description: "A charming inn with a homely atmosphere.",
    images: ["/image5.jpg", "/image6.jpg", "/image7.jpg", "/image8.jpg"],
  },
  {
    id: 3,
    name: "Riverside Lodge",
    location: "Chicago, America",
    availableRooms: 30,
    price: 150,
    rating: 4.2,
    description: "A lodge by the river for nature lovers.",
    images: ["/image9.jpg", "/image10.jpg", "/image11.jpg", "/image12.jpg"],
  },
  {
    id: 4,
    name: "Mountain Retreat",
    location: "Madurai, India",
    availableRooms: 15,
    price: 180,
    rating: 4.6,
    description: "A retreat in the serene mountains.",
    images: ["/image13.jpg", "/image14.jpg", "/image15.jpg", "/image16.jpg"],
  },
  {
    id: 5,
    name: "Seaside Resort",
    location: "Birmingham, England",
    availableRooms: 40,
    price: 250,
    rating: 4.7,
    description: "A resort by the beautiful seaside.",
    images: ["/image17.jpg", "/image18.jpg", "/image19.jpg", "/image20.jpg"],
  },
  {
    id: 6,
    name: "Urban Oasis",
    location: "Osasuna, Spain",
    availableRooms: 25,
    price: 120,
    rating: 3.9,
    description: "An oasis in the heart of the city.",
    images: ["/image18.jpg", "/image19.jpg", "/image20.jpg", "/image1.jpg"],
  },
  {
    id: 7,
    name: "Historic Mansion",
    location: "Munchen, Germany",
    availableRooms: 10,
    price: 300,
    rating: 4.9,
    description: "A historic mansion with classic charm.",
    images: ["/image18.jpg", "/image19.jpg", "/image20.jpg", "/image1.jpg"],
  },
  {
    id: 8,
    name: "Desert Retreat",
    location: "Marsaille, France",
    availableRooms: 20,
    price: 190,
    rating: 4.4,
    description: "A tranquil retreat in the desert.",
    images: ["/image18.jpg", "/image19.jpg", "/image20.jpg", "/image1.jpg"],
  },
  {
    id: 9,
    name: "Ski Lodge",
    location: "Riyadh, Saudi Arabia",
    availableRooms: 35,
    price: 220,
    rating: 4.5,
    description: "A cozy lodge for ski enthusiasts.",
    images: ["/image18.jpg", "/image19.jpg", "/image20.jpg", "/image1.jpg"],
  },
  {
    id: 10,
    name: "Tropical Paradise",
    location: "Kolkata, India",
    availableRooms: 60,
    price: 280,
    rating: 4.8,
    description: "A tropical paradise with lush gardens.",
    images: ["/image18.jpg", "/image19.jpg", "/image20.jpg", "/image1.jpg"],
  },
  {
    id: 11,
    name: "Countryside Cottage",
    location: "kerala, India",
    availableRooms: 12,
    price: 130,
    rating: 3.7,
    description: "A charming cottage in the countryside.",
    images: ["/image18.jpg", "/image19.jpg", "/image20.jpg", "/image1.jpg"],
  },
  {
    id: 12,
    name: "Lakefront Lodge",
    location: "Rio De Janiero, Brazil",
    availableRooms: 18,
    price: 160,
    rating: 4.0,
    description: "A lodge with stunning lake views.",
    images: ["/image5.jpg", "/image6.jpg", "/image7.jpg", "/image8.jpg"],
  },
  {
    id: 13,
    name: "Beach House",
    location: "Shaktar, Russia",
    availableRooms: 22,
    price: 210,
    rating: 4.3,
    description: "A beachfront house for relaxation.",
    images: ["/image5.jpg", "/image6.jpg", "/image7.jpg", "/image8.jpg"],
  },
  {
    id: 14,
    name: "Eco-friendly Resort",
    location: "Manchester, England",
    availableRooms: 30,
    price: 190,
    rating: 4.1,
    description: "An eco-friendly resort in the woods.",
    images: ["/image5.jpg", "/image6.jpg", "/image7.jpg", "/image8.jpg"],
  },
  {
    id: 15,
    name: "City Center Hotel",
    location: "Troyes, France",
    availableRooms: 28,
    price: 180,
    rating: 3.9,
    description: "A hotel in the heart of the city.",
    images: ["/image5.jpg", "/image6.jpg", "/image7.jpg", "/image8.jpg"],
  },
  {
    id: 16,
    name: "Vineyard Retreat",
    location: "Cape Town, South Africa",
    availableRooms: 16,
    price: 240,
    rating: 4.4,
    description: "A retreat in the midst of vineyards.",
    images: ["/image9.jpg", "/image10.jpg", "/image11.jpg", "/image12.jpg"],
  },
  {
    id: 17,
    name: "Island Paradise",
    location: "Colombo, Sri Lanka",
    availableRooms: 50,
    price: 260,
    rating: 4.6,
    description: "An island paradise for relaxation.",
    images: ["/image9.jpg", "/image10.jpg", "/image11.jpg", "/image12.jpg"],
  },
  {
    id: 18,
    name: "Rustic Cabin",
    location: "Lahore, Pakistan",
    availableRooms: 8,
    price: 110,
    rating: 3.5,
    description: "A cozy cabin in the woods.",
    images: ["/image9.jpg", "/image10.jpg", "/image11.jpg", "/image12.jpg"],
  },
  {
    id: 19,
    name: "Family-Friendly Resort",
    location: "Kashmir, India",
    availableRooms: 42,
    price: 220,
    rating: 4.2,
    description: "A resort with activities for the whole family.",
    images: ["/image9.jpg", "/image10.jpg", "/image11.jpg", "/image12.jpg"],
  },
  {
    id: 20,
    name: "Historic Hotel",
    location: "Brighton, England",
    availableRooms: 14,
    price: 250,
    rating: 4.7,
    description: "A historic hotel with a rich past.",
    images: ["/image9.jpg", "/image10.jpg", "/image11.jpg", "/image12.jpg"],
  },
  {
    id: 21,
    name: "Safari Lodge",
    location: "Brisbane,Australia",
    availableRooms: 24,
    price: 280,
    rating: 4.8,
    description: "A lodge for safari adventurers.",
    images: ["/image9.jpg", "/image10.jpg", "/image11.jpg", "/image12.jpg"],
  },
  {
    id: 22,
    name: "Mountain View Resort",
    location: "Tampa Bay, America",
    availableRooms: 30,
    price: 190,
    rating: 4.1,
    description: "A resort with breathtaking mountain views.",
    images: ["/image9.jpg", "/image10.jpg", "/image11.jpg", "/image12.jpg"],
  },
  {
    id: 23,
    name: "Secluded Villa",
    location: "Atlanta, America",
    availableRooms: 6,
    price: 350,
    rating: 5.0,
    description: "A secluded villa for ultimate privacy.",
    images: ["/image1.jpg", "/image2.jpg", "/image3.jpg", "/image4.jpg"],
  },
  {
    id: 24,
    name: "Chic Boutique Hotel",
    location: "Toronto, Canada",
    availableRooms: 18,
    price: 180,
    rating: 4.0,
    description: "A chic boutique hotel with style.",
    images: ["/image1.jpg", "/image2.jpg", "/image3.jpg", "/image4.jpg"],
  },
  {
    id: 25,
    name: "Historic Inn",
    location: "Rome, Italy",
    availableRooms: 12,
    price: 150,
    rating: 3.7,
    description: "A historic inn with character.",
    images: ["/image1.jpg", "/image2.jpg", "/image3.jpg", "/image4.jpg"],
  },
  {
    id: 26,
    name: "Ski Chalet",
    location: "Lazio, Italy",
    availableRooms: 14,
    price: 210,
    rating: 4.3,
    description: "A chalet for ski enthusiasts.",
    images: ["/image1.jpg", "/image2.jpg", "/image3.jpg", "/image4.jpg"],
  },
  {
    id: 27,
    name: "Desert Oasis",
    location: "Napoli, Italy",
    availableRooms: 20,
    price: 220,
    rating: 4.5,
    description: "An oasis in the midst of the desert.",
    images: ["/image1.jpg", "/image2.jpg", "/image3.jpg", "/image4.jpg"],
  },
  {
    id: 28,
    name: "Lakefront Resort",
    location: "Florida, America",
    availableRooms: 28,
    price: 260,
    rating: 4.6,
    description: "A resort with stunning lakefront views.",
    images: ["/image1.jpg", "/image2.jpg", "/image3.jpg", "/image4.jpg"],
  },
  {
    id: 29,
    name: "Hidden Gem",
    location: "London, England",
    availableRooms: 10,
    price: 130,
    rating: 3.9,
    description: "A hidden gem for a peaceful getaway.",
    images: ["/image1.jpg", "/image2.jpg", "/image3.jpg", "/image4.jpg"],
  },
  {
    id: 30,
    name: "Rainforest Retreat",
    location: "Liverpool, England",
    availableRooms: 25,
    price: 230,
    rating: 4.4,
    description: "A retreat in the heart of the rainforest.",
    images: ["/image1.jpg", "/image2.jpg", "/image3.jpg", "/image4.jpg"],
  },
  {
    id: 31,
    name: "Tranquil Cabin",
    location: "Delhi, India",
    availableRooms: 8,
    price: 150,
    rating: 4.1,
    description: "A peaceful cabin in a secluded forest.",
    images: ["/image1.jpg", "/image2.jpg", "/image3.jpg", "/image4.jpg"],
  },
  {
    id: 32,
    name: "Modern City Hotel",
    location: "Auckland, New Zealand",
    availableRooms: 40,
    price: 180,
    rating: 4.2,
    description: "A contemporary hotel in the city center.",
    images: ["/image1.jpg", "/image2.jpg", "/image3.jpg", "/image4.jpg"],
  },
  {
    id: 33,
    name: "Rustic Lodge",
    location: "Perth, Australia",
    availableRooms: 15,
    price: 220,
    rating: 4.3,
    description: "A cozy lodge with a rustic charm.",
    images: ["/image1.jpg", "/image2.jpg", "/image3.jpg", "/image4.jpg"],
  },
  {
    id: 34,
    name: "Beachfront Villa",
    location: "Shanghai, China",
    availableRooms: 12,
    price: 350,
    rating: 4.8,
    description: "A luxurious villa right on the beach.",
    images: ["/image5.jpg", "/image6.jpg", "/image7.jpg", "/image8.jpg"],
  },
  {
    id: 35,
    name: "Mountain Cabin",
    location: "Brussels, Belgium",
    availableRooms: 6,
    price: 200,
    rating: 4.6,
    description: "A cabin with stunning mountain views.",
    images: ["/image5.jpg", "/image6.jpg", "/image7.jpg", "/image8.jpg"],
  },
  {
    id: 36,
    name: "Historic Manor",
    location: "Lisbon, Portugal",
    availableRooms: 18,
    price: 280,
    rating: 4.9,
    description: "A historic manor with grandeur.",
    images: ["/image5.jpg", "/image6.jpg", "/image7.jpg", "/image8.jpg"],
  },
  {
    id: 37,
    name: "Lakeside Retreat",
    location: "Rosario, Argentina",
    availableRooms: 22,
    price: 260,
    rating: 4.7,
    description: "A retreat by the serene lakeside.",
    images: ["/image5.jpg", "/image6.jpg", "/image7.jpg", "/image8.jpg"],
  },
  {
    id: 38,
    name: "Eco Lodge",
    location: "Texas, America",
    availableRooms: 20,
    price: 190,
    rating: 4.4,
    description: "An eco-friendly lodge in the wilderness.",
    images: ["/image18.jpg", "/image19.jpg", "/image20.jpg", "/image1.jpg"],
  },
  {
    id: 39,
    name: "Charming Cottage",
    location: "Hyderabad, India",
    availableRooms: 14,
    price: 110,
    rating: 4.0,
    description: "A charming cottage for a cozy stay.",
    images: ["/image19.jpg", "/image20.jpg", "/image1.jpg", "/image2.jpg"],
  },
  {
    id: 40,
    name: "Luxury Resort",
    location: "Coimbatore, India",
    availableRooms: 30,
    price: 400,
    rating: 5.0,
    description: "A luxurious resort with top-notch amenities.",
    images: ["/image1.jpg", "/image3.jpg", "/image20.jpg", "/image6.jpg"],
  },
];

export default hotelsData;
