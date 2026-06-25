// Traviora Site Data (Destinations, Tours, Testimonials, Blogs, Services, FAQs)

export const destinations = [
  {
    id: 1,
    image: "/Images/santorini.png",
    title: "Santorini, Greece",
    description: "Whitewashed cliffside villages, blue domes, and glowing Aegean sunsets.",
    tourCount: "12 Tours",
  },
  {
    id: 2,
    image: "/Images/bali.png",
    title: "Bali, Indonesia",
    description: "Lush rice terraces, tropical beaches, and peaceful island escapes.",
    tourCount: "18 Tours",
  },
  {
    id: 3,
    image: "/Images/kyoto.png",
    title: "Kyoto, Japan",
    description: "Historic temples, serene gardens, and timeless cultural experiences.",
    tourCount: "8 Tours",
  },
  {
    id: 4,
    image: "/Images/paris.png",
    title: "Paris, France",
    description: "Romantic streets, iconic landmarks, and unforgettable food and art.",
    tourCount: "15 Tours",
  },
  {
    id: 5,
    image: "/Images/maldives.png",
    title: "Maldives",
    description: "Crystal lagoons, overwater villas, and relaxed luxury by the sea.",
    tourCount: "10 Tours",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&h=400&q=80",
    title: "Swiss Alps, Switzerland",
    description: "Snow-capped peaks, alpine lakes, and world-class ski resorts.",
    tourCount: "9 Tours",
  }
]

export const tours = [
  {
    id: 1,
    name: "Santorini Sunset & Sailing Cruise",
    destination: "Santorini, Greece",
    price: 189,
    duration: "5 Hours",
    rating: 4.9,
    reviews: 142,
    image: "/Images/santorini.png",
    tripType: "Luxury",
    activity: "Sightseeing",
    featured: true,
    description: "Sail across the beautiful caldera, swim in warm thermal springs, and watch the legendary sunset from the catamaran deck.",
  },
  {
    id: 2,
    name: "Bali Jungle Adventure & Rafting",
    destination: "Bali, Indonesia",
    price: 79,
    duration: "1 Day",
    rating: 4.8,
    reviews: 215,
    image: "/Images/bali.png",
    tripType: "Adventure",
    activity: "Adventure",
    featured: true,
    description: "Experience white-water rafting down Ayung River, visit ancient temples, and swing over the tropical jungle canopy.",
  },
  {
    id: 3,
    name: "Kyoto Traditional Tea Ceremony & Walk",
    destination: "Kyoto, Japan",
    price: 95,
    duration: "4 Hours",
    rating: 4.7,
    reviews: 98,
    image: "/Images/kyoto.png",
    tripType: "Solo",
    activity: "Sightseeing",
    featured: true,
    description: "Discover hidden bamboo paths, participate in an authentic tea ceremony, and walk alongside Gion's historic wooden streets.",
  },
  {
    id: 4,
    name: "Paris Art & Gourmet Walking Tour",
    destination: "Paris, France",
    price: 120,
    duration: "6 Hours",
    rating: 4.9,
    reviews: 180,
    image: "/Images/paris.png",
    tripType: "Family",
    activity: "Sightseeing",
    featured: true,
    description: "Skip the lines at famous galleries and indulge in pastry tastings led by a Parisian food expert in Montmartre.",
  },
  {
    id: 5,
    name: "Maldives Overwater Resort Getaway",
    destination: "Maldives",
    price: 850,
    duration: "5 Days",
    rating: 5.0,
    reviews: 64,
    image: "/Images/maldives.png",
    tripType: "Luxury",
    activity: "Relaxation",
    featured: true,
    description: "Unwind in your private overwater bungalow. Package includes marine-biologist led snorkeling, daily massage, and meals.",
  },
  {
    id: 6,
    name: "Swiss Alps Hiking & Summit Express",
    destination: "Swiss Alps, Switzerland",
    price: 340,
    duration: "3 Days",
    rating: 4.8,
    reviews: 86,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&h=400&q=80",
    tripType: "Solo",
    activity: "Hiking",
    featured: false,
    description: "Trek scenic passes under the shadow of the Matterhorn, ending each day in cozy, traditional mountainside lodges.",
  },
  {
    id: 7,
    name: "Sydney Surf & Coastal Trail Hike",
    destination: "Sydney, Australia",
    price: 65,
    duration: "3 Hours",
    rating: 4.6,
    reviews: 110,
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=600&h=400&q=80",
    tripType: "Budget",
    activity: "Adventure",
    featured: false,
    description: "Learn to surf at Bondi Beach and take a guided walk along the spectacular limestone cliffs towards Coogee.",
  },
  {
    id: 8,
    name: "Amazon Basin Wilderness Expedition",
    destination: "Brazil",
    price: 490,
    duration: "4 Days",
    rating: 4.9,
    reviews: 52,
    image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=600&h=400&q=80",
    tripType: "Adventure",
    activity: "Adventure",
    featured: false,
    description: "Spot river dolphins, track exotic wildlife on night treks, and camp in secure eco-lodges deep within the rainforest.",
  }
]

export const testimonials = [
  {
    id: 1,
    image: "/Images/client-1.png",
    name: "Ayesha Khan",
    location: "Lahore, Pakistan",
    rating: 5,
    body: "Traviora planned our honeymoon perfectly. Every hotel, transfer, and tour felt easy from start to finish. We'll definitely book again!",
  },
  {
    id: 2,
    image: "/Images/client-2.png",
    name: "Daniel Brooks",
    location: "New York, USA",
    rating: 5,
    body: "Their flight and hotel recommendations saved us time and gave us a much better trip than we expected. Outstanding service!",
  },
  {
    id: 3,
    image: "/Images/client-3.png",
    name: "Maya Chen",
    location: "Toronto, Canada",
    rating: 4,
    body: "I loved how personal the itinerary felt. The support team was incredibly responsive whenever we needed help during our travels.",
  }
]

export const blogs = [
  {
    id: 1,
    title: "10 Essential Tips for Solo Travelers in Europe",
    summary: "Traveling solo can be intimidating. Here is how to stay safe, pack smart, and make lifelong friends along the way.",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=600&h=400&q=80",
    date: "June 12, 2026",
    readTime: "5 min read",
    author: "Elena Rostova",
    category: "Solo Travel"
  },
  {
    id: 2,
    title: "Hidden Gems of Kyoto You Won't Find in Guidebooks",
    summary: "Step off the beaten path and explore quiet moss gardens, traditional tea houses, and ancient forest shrines.",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&h=400&q=80",
    date: "May 28, 2026",
    readTime: "7 min read",
    author: "Kenji Sato",
    category: "Culture"
  },
  {
    id: 3,
    title: "How to Plan a Luxury Maldives Trip on a Budget",
    summary: "Discover local islands, affordable speedboats, and guesthouses that offer the same white sand beaches for a fraction of the cost.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&h=400&q=80",
    date: "April 15, 2026",
    readTime: "6 min read",
    author: "Liam Fletcher",
    category: "Budget Hacks"
  }
]

export const faqs = [
  {
    id: 1,
    question: "What is included in the tour packages?",
    answer: "Our standard packages include premium hotel accommodations, guided excursions, transfers, and daily breakfasts. Detailed inclusions vary by package and can be customized upon request."
  },
  {
    id: 2,
    question: "Can I cancel or reschedule my booking?",
    answer: "Yes, you can cancel or reschedule bookings up to 14 days before departure with a full refund. Cancellation fees may apply within 14 days depending on third-party operators (airlines, hotels)."
  },
  {
    id: 3,
    question: "Do you offer travel insurance?",
    answer: "We offer comprehensive travel protection plans that cover trip cancellations, medical emergencies, lost baggage, and travel delays. We highly recommend adding insurance to all bookings."
  },
  {
    id: 4,
    question: "How do I receive my travel itineraries?",
    answer: "All travel details, flight tickets, vouchers, and contact information are sent digitally via email 7 days before your tour begins. You can also access them in our traveler portal."
  }
]
