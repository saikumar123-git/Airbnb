import React, { useState, useEffect, useRef } from 'react';
import { 
  Heart, Share, Star, Award, ShieldCheck, User, 
  ChevronRight, ChevronLeft, X, Sparkles, Check, 
  Search, Globe, Menu, SlidersHorizontal, MapPin, 
  Calendar as CalendarIcon, Users, Wifi, Tv, Coffee, Utensils, 
  Car, Wind, Bath, Dumbbell, Waves, CheckCircle2,
  ChevronDown, Flame, Bed, Home, ThumbsUp, Trophy,
  MessageSquare, Key, Map, Tag
} from 'lucide-react';

const LISTING_DATA = {
  id: "listing-01",
  title: "Romantic Jacuzzi 1BHK Candolim | Mirashya UG10",
  rating: 4.95,
  reviewsCount: 19,
  isSuperhost: true,
  location: "Candolim, Goa, India",
  pricePerNight: 5699,
  cleaningFee: 45,
  serviceFee: 35,
  maxGuests: 6,
  bedrooms: 3,
  beds: 4,
  baths: 3.5,
  ratingsBreakdown: {
    cleanliness: 5.0,
    accuracy: 5.0,
    checkIn: 5.0,
    communication: 5.0,
    location: 4.8,
    value: 4.8
  },
  reviewsList: [
    {
      name: "Jessica M.",
      date: "September 2026",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
      comment: "Absolutely breathtaking villa! The photos don't even do justice to how serene and magical the jungle views are. Kadek and Sarah were phenomenal hosts."
    },
    {
      name: "Alexander K.",
      date: "August 2026",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      comment: "A masterclass in modern tropical architecture. Immaculate cleanliness, lightning fast wifi, and the infinity pool at sunset is unforgettable."
    },
    {
      name: "Elena R.",
      date: "July 2026",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80",
      comment: "We loved every single second of our stay. Very quiet, private, yet just minutes away from amazing organic cafes and yoga studios."
    },
    {
      name: "Marcus T.",
      date: "June 2026",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
      comment: "Top tier Airbnb experience. The host's local recommendations guide was super helpful and the check-in process was effortless."
    }
  ],
  host: {
    name: "Kadek & Sarah",
    role: "Superhost",
    joined: "May 2017",
    responseRate: "100%",
    responseTime: "within an hour",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
    bio: "Passionate architects and designers who love creating serene sanctuaries immersed in nature."
  },
  description: `Welcome to Villa Sol y Sombra, a architectural masterpiece nestled in the tranquil jungle of Ubud. Designed with open-plan living in mind, this stunning retreat offers seamless indoor-outdoor living, a private infinity pool overlooking lush green canopies, high-end modern amenities, and bespoke artisan furniture throughout.`,
  categories: [
    {
      id: "living1",
      name: "Living room 1",
      subtitle: "Sofa · Air conditioning · Ceiling fan · TV",
      photos: [
        { url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80", caption: "Main seating area with designer sectional and jungle view" },
        { url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80", caption: "Evening ambiance with warm recessed lighting" },
        { url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80", caption: "Open layout connecting to the patio" }
      ]
    },
    {
      id: "living2",
      name: "Living room 2",
      subtitle: "Ceiling fan · Hot tub access",
      photos: [
        { url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80", caption: "Lower lounge area with minimalist concrete aesthetics" },
        { url: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80", caption: "Reading corner overlooking the private courtyard" },
        { url: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80", caption: "Zen garden view from lounge 2" }
      ]
    },
    {
      id: "kitchen",
      name: "Full kitchen",
      subtitle: "Refrigerator · Microwave · Cooking basics · Coffee maker",
      photos: [
        { url: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80", caption: "Fully equipped chef's kitchen with island counter" },
        { url: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&w=1200&q=80", caption: "Espresso machine and artisan tea bar" }
      ]
    },
    {
      id: "bedroom",
      name: "Bedroom",
      subtitle: "Double bed · Air conditioning · Dedicated workspace",
      photos: [
        { url: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80", caption: "Master suite with king bed and private balcony" },
        { url: "https://images.unsplash.com/photo-1540518614846-7ede433c4ef0?auto=format&fit=crop&w=1200&q=80", caption: "Guest bedroom with natural linen bedding" }
      ]
    },
    {
      id: "bathroom",
      name: "Full bathroom",
      subtitle: "Hair dryer · Hot water · Shampoo · Shower gel",
      photos: [
        { url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80", caption: "Modern bathroom with rainfall shower" },
        { url: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80", caption: "Dual vanity and warm lighting" }
      ]
    },
    {
      id: "gym",
      name: "Gym",
      subtitle: "Air conditioning · Gym · Exercise equipment · Ceiling fan",
      photos: [
        { url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80", caption: "Private fitness studio with weights and yoga mats" }
      ]
    },
    {
      id: "exterior",
      name: "Exterior",
      subtitle: "Drone view of surrounding tropical landscape",
      photos: [
        { url: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80", caption: "Aerial view of Villa Sol y Sombra and jungle canopy" },
        { url: "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1200&q=80", caption: "Property entrance surrounded by bamboo groves" }
      ]
    },
    {
      id: "pool",
      name: "Pool",
      subtitle: "Private infinity pool open year-round",
      photos: [
        { url: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80", caption: "Infinity pool at sunset" },
        { url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80", caption: "Sun loungers by the pool deck" }
      ]
    },
    {
      id: "additional",
      name: "Additional photos",
      subtitle: "Extra architectural angles and interior details",
      photos: [
        { url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80", caption: "Additional angle 1" },
        { url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80", caption: "Additional angle 2" },
        { url: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80", caption: "Additional angle 3" },
        { url: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80", caption: "Additional angle 4" }
      ]
    }
  ]
};

export default function App() {
  const [isPhotoTourOpen, setIsPhotoTourOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState(LISTING_DATA.categories[0].id);
  const [isLiked, setIsLiked] = useState(false);
  const [checkInDate, setCheckInDate] = useState('Oct 12, 2026');
  const [checkOutDate, setCheckOutDate] = useState('Oct 17, 2026');
  const [guestsCount, setGuestsCount] = useState(2);
  const [showGuestDropdown, setShowGuestDropdown] = useState(false);
  const [showCalendarDropdown, setShowCalendarDropdown] = useState(false);

  const containerRef = useRef(null);
  const isManualScrolling = useRef(false);

  const allPhotos = LISTING_DATA.categories.flatMap(cat => cat.photos);

  // Injects Tailwind via CDN to ensure styles load even if local config is broken
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://cdn.tailwindcss.com";
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex !== null) {
        if (e.key === 'ArrowRight') {
          setLightboxIndex((prev) => (prev + 1) % allPhotos.length);
        } else if (e.key === 'ArrowLeft') {
          setLightboxIndex((prev) => (prev - 1 + allPhotos.length) % allPhotos.length);
        } else if (e.key === 'Escape') {
          setLightboxIndex(null);
        }
      } else if (isPhotoTourOpen && e.key === 'Escape') {
        setIsPhotoTourOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, isPhotoTourOpen, allPhotos.length]);

  const handleScroll = () => {
    if (isManualScrolling.current) return;
    const container = containerRef.current;
    if (!container) return;

    const sections = LISTING_DATA.categories.map(cat => document.getElementById(`tour-cat-${cat.id}`));
    const scrollPos = container.scrollTop + 150;

    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i];
      if (section && section.offsetTop <= scrollPos) {
        setActiveCategory(LISTING_DATA.categories[i].id);
        break;
      }
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans antialiased selection:bg-rose-500 selection:text-white">
      
      {/* Header */}
      <header className="sticky top-0 z-30 bg-white border-b border-gray-200 px-6 lg:px-20 py-4 flex items-center justify-between shadow-xs">
        <div className="flex items-center gap-2 cursor-pointer">
          <svg className="w-8 h-8 text-rose-500" viewBox="0 0 32 32" fill="currentColor">
            <path d="M16 1c2.008 0 3.463.963 4.751 3.269l.533 1.025c1.954 3.83 6.114 12.54 7.1 14.836l.145.353c.667 1.591.91 2.472.96 3.396l.01.335c0 3.967-3.033 6.76-7.003 6.76-2.583 0-4.908-1.34-6.496-3.554l-.397-.577c-.574-.847-1.428-1.328-2.55-1.328-1.123 0-1.977.481-2.55 1.328l-.398.577c-1.587 2.214-3.912 3.554-6.495 3.554-3.97 0-7.003-2.793-7.003-6.76 0-.924.293-1.805.96-3.396l.145-.353c.986-2.296 5.146-11.006 7.1-14.836l.533-1.025C7.537 1.963 8.992 1 11.001 1h4.999zm0 3.5h-5c-.93 0-1.64.444-2.316 1.764l-.49 1.004C4.85 10.155 1.037 18.232.146 20.302l-.128.324c-.456 1.089-.668 1.769-.668 2.374 0 2.227 1.637 3.76 4.003 3.76 1.815 0 3.552-.971 4.783-2.686l.412-.601c.792-1.168 2.05-1.827 3.557-1.827s2.765.659 3.557 1.827l.412.601c1.231 1.715 2.968 2.686 4.783 2.686 2.366 0 4.003-1.533 4.003-3.76 0-.605-.212-1.285-.668-2.374l-.128-.324c-.891-2.07-4.704-10.147-5.048-11.034l-.49-1.004C17.64 4.444 16.93 4.5 16 4.5zm0 8.5c2.485 0 4.5 2.015 4.5 4.5s-2.015 4.5-4.5 4.5-4.5-2.015-4.5-4.5 2.015-4.5 4.5-4.5zm0 2.5a2 2 0 100 4 2 2 0 000-4z"/>
          </svg>
          <span className="text-rose-500 font-bold text-xl tracking-tight">airbnb</span>
        </div>

        <div className="hidden md:flex items-center border border-gray-300 rounded-full py-2 px-4 shadow-sm hover:shadow-md transition cursor-pointer gap-4 text-sm font-medium">
          <button className="px-3 border-r border-gray-200">Anywhere</button>
          <button className="px-3 border-r border-gray-200">Any week</button>
          <button className="px-3 text-gray-500 font-normal flex items-center gap-2">
            Add guests 
            <span className="bg-rose-500 text-white p-2 rounded-full">
              <Search className="w-3.5 h-3.5" />
            </span>
          </button>
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden md:block text-sm font-semibold py-2.5 px-4 rounded-full hover:bg-gray-100 transition">
            Airbnb your home
          </button>
          <button className="p-3 rounded-full hover:bg-gray-100 transition">
            <Globe className="w-4 h-4" />
          </button>
          <div className="flex items-center gap-3 border border-gray-300 rounded-full py-1.5 px-3 hover:shadow-md transition cursor-pointer">
            <Menu className="w-4 h-4 text-gray-600" />
            <div className="bg-gray-500 text-white rounded-full p-1 w-7 h-7 flex items-center justify-center font-bold text-xs">
              <User className="w-4 h-4" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Listing Content */}
      <main className="max-w-7xl mx-auto px-6 lg:px-20 pt-6">
        <h1 className="text-2xl lg:text-3xl font-semibold text-gray-900 tracking-tight">
          {LISTING_DATA.title}
        </h1>

        <div className="flex flex-wrap items-center justify-between gap-4 mt-3 text-sm">
          <div className="flex items-center gap-3 font-medium">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-current text-gray-900" />
              <span>{LISTING_DATA.rating}</span>
            </div>
            <span>·</span>
            <button className="underline font-semibold hover:text-gray-600">
              {LISTING_DATA.reviewsCount} reviews
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 py-1.5 px-3 rounded-lg hover:bg-gray-100 transition font-semibold underline text-sm">
              <Share className="w-4 h-4" /> Share
            </button>
            <button 
              onClick={() => setIsLiked(!isLiked)} 
              className="flex items-center gap-2 py-1.5 px-3 rounded-lg hover:bg-gray-100 transition font-semibold underline text-sm"
            >
              <Heart className={`w-4 h-4 ${isLiked ? 'fill-rose-500 text-rose-500' : ''}`} /> 
              {isLiked ? 'Saved' : 'Save'}
            </button>
          </div>
        </div>

        {/* Hero Photo Grid */}
        <div className="mt-6 relative rounded-2xl overflow-hidden shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2 h-[350px] md:h-[480px]">
            <div 
              onClick={() => { setActiveCategory(LISTING_DATA.categories[0].id); setIsPhotoTourOpen(true); }}
              className="md:col-span-2 h-full cursor-pointer relative group overflow-hidden"
            >
              <img 
                src={LISTING_DATA.categories[0].photos[0].url} 
                alt="Main villa view" 
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition"></div>
            </div>

            <div className="hidden md:grid grid-cols-2 col-span-2 gap-2 h-full">
              {LISTING_DATA.categories.slice(0, 4).map((cat) => (
                <div 
                  key={cat.id}
                  onClick={() => { setActiveCategory(cat.id); setIsPhotoTourOpen(true); }}
                  className="h-[236px] cursor-pointer relative group overflow-hidden"
                >
                  <img 
                    src={cat.photos[0].url} 
                    alt={cat.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition"></div>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={() => setIsPhotoTourOpen(true)}
            className="absolute bottom-6 right-6 bg-white hover:bg-gray-50 text-gray-900 border border-gray-900 font-semibold py-2 px-4 rounded-lg shadow-md flex items-center gap-2 text-sm transition"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" role="presentation" focusable="false" className="w-4 h-4 fill-current"><path d="M3 5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V5zm16 14V5H5v14h14zM8.5 11a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm5 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3 zM18.5 15a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM5.5 15a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/></svg>
            Show all photos
          </button>
        </div>

        {/* Main Details and Sticky Booking Card */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-16 pb-20">
          
          <div className="lg:col-span-2 space-y-8">
            
            <div className="flex items-center justify-between pb-6 border-b border-gray-200">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  Entire villa hosted by {LISTING_DATA.host.name}
                </h2>
                <p className="text-gray-600 text-sm mt-1">
                  {LISTING_DATA.maxGuests} guests · {LISTING_DATA.bedrooms} bedrooms · {LISTING_DATA.beds} beds · {LISTING_DATA.baths} baths
                </p>
              </div>
              <img 
                src={LISTING_DATA.host.image} 
                alt={LISTING_DATA.host.name} 
                className="w-14 h-14 rounded-full object-cover shadow-sm"
              />
            </div>

            <div className="space-y-6 pb-6 border-b border-gray-200">
              <div className="flex items-start gap-4">
                <Award className="w-6 h-6 text-rose-500 mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">{LISTING_DATA.host.name} is a Superhost</h3>
                  <p className="text-gray-500 text-sm mt-0.5">Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-gray-700 mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Great Location</h3>
                  <p className="text-gray-500 text-sm mt-0.5">100% of recent guests gave the location a 5-star rating.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CalendarIcon className="w-6 h-6 text-gray-700 mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Free cancellation for 48 hours</h3>
                  <p className="text-gray-500 text-sm mt-0.5">Get a full refund if you change your mind.</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-r from-rose-50 to-orange-50 rounded-2xl border border-rose-100">
              <div className="flex items-center gap-2">
                <span className="font-black italic text-xl tracking-tighter text-rose-500">air</span>
                <span className="font-black italic text-xl tracking-tighter text-gray-900">cover</span>
              </div>
              <p className="text-gray-700 text-sm mt-2">
                Every booking includes free protection from Host cancellations, listing inaccuracies, and other issues like trouble checking in.
              </p>
              <button className="mt-3 text-sm font-semibold underline text-gray-900 hover:text-gray-600">
                Learn more
              </button>
            </div>

            <div className="pb-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold mb-3">About this space</h3>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {LISTING_DATA.description}
              </p>
            </div>

            <div className="pb-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold mb-4">What this place offers</h3>
              <div className="grid grid-cols-2 gap-4 text-gray-700 text-sm">
                <div className="flex items-center gap-3">
                  <Wifi className="w-5 h-5" /> Fast wifi (150 Mbps)
                </div>
                <div className="flex items-center gap-3">
                  <Tv className="w-5 h-5" /> 65" HDTV with Netflix
                </div>
                <div className="flex items-center gap-3">
                  <Utensils className="w-5 h-5" /> Full kitchen
                </div>
                <div className="flex items-center gap-3">
                  <Car className="w-5 h-5" /> Free parking on premises
                </div>
                <div className="flex items-center gap-3">
                  <Wind className="w-5 h-5" /> Central air conditioning
                </div>
                <div className="flex items-center gap-3">
                  <Bath className="w-5 h-5" /> Private hot tub
                </div>
                <div className="flex items-center gap-3">
                  <Dumbbell className="w-5 h-5" /> Private gym
                </div>
                <div className="flex items-center gap-3">
                  <Waves className="w-5 h-5" /> Private outdoor pool
                </div>
              </div>
              <button className="mt-6 border border-gray-900 font-semibold py-3 px-6 rounded-lg hover:bg-gray-50 transition text-sm">
                Show all 42 amenities
              </button>
            </div>

            <div className="pb-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold mb-4">Where you'll sleep</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="border border-gray-200 rounded-xl p-4 bg-gray-50/50">
                  <Bed className="w-6 h-6 mb-3 text-gray-800" />
                  <div className="font-semibold text-sm">Bedroom 1</div>
                  <div className="text-xs text-gray-500 mt-1">1 king bed</div>
                </div>
                <div className="border border-gray-200 rounded-xl p-4 bg-gray-50/50">
                  <Bed className="w-6 h-6 mb-3 text-gray-800" />
                  <div className="font-semibold text-sm">Bedroom 2</div>
                  <div className="text-xs text-gray-500 mt-1">1 queen bed</div>
                </div>
                <div className="border border-gray-200 rounded-xl p-4 bg-gray-50/50">
                  <Home className="w-6 h-6 mb-3 text-gray-800" />
                  <div className="font-semibold text-sm">Living room</div>
                  <div className="text-xs text-gray-500 mt-1">1 sofa bed</div>
                </div>
              </div>
            </div>

            {}
            <div className="pb-6 border-b border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-1">5 nights in Candolim</h3>
              <p className="text-gray-500 text-sm mb-6">Oct 12, 2026 - Oct 17, 2026</p>

              <div className="flex gap-x-8">
                {/* Month 1 - October 2026 */}
                <div className="flex-1">
                  <div className="text-center font-semibold mb-4 text-gray-900 text-sm">October 2026</div>
                  <div className="grid grid-cols-7 text-center text-xs font-semibold text-gray-400 mb-2">
                    <div>Su</div><div>Mo</div><div>Tu</div><div>We</div><div>Th</div><div>Fr</div><div>Sa</div>
                  </div>
                  <div className="grid grid-cols-7 gap-y-1 text-center text-sm font-medium text-gray-900">
                    <div className="p-2 text-gray-300">27</div><div className="p-2 text-gray-300">28</div><div className="p-2 text-gray-300">29</div><div className="p-2 text-gray-300">30</div>
                    <div className="p-2">1</div><div className="p-2">2</div><div className="p-2">3</div>
                    <div className="p-2">4</div><div className="p-2">5</div><div className="p-2">6</div><div className="p-2">7</div><div className="p-2">8</div><div className="p-2">9</div><div className="p-2">10</div>
                    <div className="p-2">11</div>
                    <div className="p-2 bg-gray-900 text-white rounded-l-full">12</div>
                    <div className="p-2 bg-gray-100">13</div>
                    <div className="p-2 bg-gray-100">14</div>
                    <div className="p-2 bg-gray-100">15</div>
                    <div className="p-2 bg-gray-100">16</div>
                    <div className="p-2 bg-gray-900 text-white rounded-r-full">17</div>
                    <div className="p-2">18</div><div className="p-2">19</div><div className="p-2">20</div><div className="p-2">21</div><div className="p-2">22</div><div className="p-2">23</div><div className="p-2">24</div>
                    <div className="p-2">25</div><div className="p-2">26</div><div className="p-2">27</div><div className="p-2">28</div><div className="p-2">29</div><div className="p-2">30</div><div className="p-2">31</div>
                  </div>
                </div>

                {/* Month 2 - November 2026 */}
                <div className="flex-1 hidden md:block">
                  <div className="text-center font-semibold mb-4 text-gray-900 text-sm">November 2026</div>
                  <div className="grid grid-cols-7 text-center text-xs font-semibold text-gray-400 mb-2">
                    <div>Su</div><div>Mo</div><div>Tu</div><div>We</div><div>Th</div><div>Fr</div><div>Sa</div>
                  </div>
                  <div className="grid grid-cols-7 gap-y-1 text-center text-sm font-medium text-gray-900">
                    <div className="p-2">1</div><div className="p-2">2</div><div className="p-2">3</div><div className="p-2">4</div><div className="p-2">5</div><div className="p-2">6</div><div className="p-2">7</div>
                    <div className="p-2">8</div><div className="p-2">9</div><div className="p-2">10</div><div className="p-2">11</div><div className="p-2">12</div><div className="p-2">13</div><div className="p-2">14</div>
                    <div className="p-2">15</div><div className="p-2">16</div><div className="p-2">17</div><div className="p-2">18</div><div className="p-2">19</div><div className="p-2">20</div><div className="p-2">21</div>
                    <div className="p-2">22</div><div className="p-2">23</div><div className="p-2">24</div><div className="p-2">25</div><div className="p-2">26</div><div className="p-2">27</div><div className="p-2">28</div>
                    <div className="p-2">29</div><div className="p-2">30</div>
                    <div className="p-2 text-gray-300">1</div><div className="p-2 text-gray-300">2</div><div className="p-2 text-gray-300">3</div><div className="p-2 text-gray-300">4</div><div className="p-2 text-gray-300">5</div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end mt-4">
                <button className="text-sm font-semibold underline text-gray-900 hover:text-gray-600">
                  Clear dates
                </button>
              </div>
            </div>

            {/* Reviews Section with Guest Favorite Badge */}
            <div className="pb-8 border-b border-gray-200">
              
              {/* Guest Favorite Banner Badge Card */}
              <div className="flex flex-col items-center justify-center py-10 mb-6">
                <div className="relative flex items-center justify-center">
                  {/* Left Wreath (Robust Bezier Path) */}
                  <svg className="w-[65px] h-[85px] text-gray-900 absolute -left-[90px]" viewBox="0 0 32 32" fill="currentColor">
                    <path d="M22 3.5c-1.5-.5-3.5-.2-5 1C14 6.5 12 10 11.2 13.8c-1.2 5.5-.5 11.8 1.8 16.7.6 1.2 2.3 1.2 2.9 0 1.7-3.3 1.2-7.2-.5-10.5-1.2-2.3-1.8-5.1-1.2-7.9.6-2.2 2.8-4.4 5-5.5 1.7-.8 3.4-1.2 4-2.3.4-.6 0-.4-1.2-.8z" />
                    <path d="M14.5 13.5c-3.8-1.2-7.2-4.5-8.8-8.4C5 3.9 5.6 2.8 6.8 2.8c2.8 0 6.2 2.8 8.4 6.7 1.2 1.7.7 3.4-.7 4z" />
                    <path d="M12.5 21c-3.8 0-7.2-2.2-8.8-6.1-.7-1.2-.1-2.3 1.1-2.3 2.8 0 6.2 2.8 8.4 6.7 1.2 1.7.7 3.4-.7 1.7z" />
                  </svg>
                  
                  {/* Central Rating */}
                  <div className="text-[110px] leading-[0.8] font-bold tracking-tighter text-gray-900 mx-4">
                    {LISTING_DATA.rating}
                  </div>

                  {/* Right Wreath (Mirrored) */}
                  <svg className="w-[65px] h-[85px] text-gray-900 absolute -right-[90px]" viewBox="0 0 32 32" fill="currentColor" style={{ transform: 'scaleX(-1)' }}>
                    <path d="M22 3.5c-1.5-.5-3.5-.2-5 1C14 6.5 12 10 11.2 13.8c-1.2 5.5-.5 11.8 1.8 16.7.6 1.2 2.3 1.2 2.9 0 1.7-3.3 1.2-7.2-.5-10.5-1.2-2.3-1.8-5.1-1.2-7.9.6-2.2 2.8-4.4 5-5.5 1.7-.8 3.4-1.2 4-2.3.4-.6 0-.4-1.2-.8z" />
                    <path d="M14.5 13.5c-3.8-1.2-7.2-4.5-8.8-8.4C5 3.9 5.6 2.8 6.8 2.8c2.8 0 6.2 2.8 8.4 6.7 1.2 1.7.7 3.4-.7 4z" />
                    <path d="M12.5 21c-3.8 0-7.2-2.2-8.8-6.1-.7-1.2-.1-2.3 1.1-2.3 2.8 0 6.2 2.8 8.4 6.7 1.2 1.7.7 3.4-.7 1.7z" />
                  </svg>
                </div>
                
                <h3 className="text-[22px] font-semibold text-gray-900 mt-8 mb-2">Guest favourite</h3>
                <p className="text-[#717171] text-center text-[17px] max-w-[420px] mb-5 leading-snug">
                  This home is a guest favourite based on ratings, reviews and reliability
                </p>
                
                <button className="text-[15px] font-semibold text-gray-900 underline underline-offset-2 decoration-gray-900 hover:decoration-gray-600">
                  How reviews work
                </button>
              </div>

              {/* Category Ratings List Format */}
              <div className="flex justify-center border-t border-gray-200 py-8 mb-8 overflow-x-auto">
                <div className="flex w-full max-w-5xl justify-between items-start gap-4">
                  {/* Overall Rating Histogram */}
                  <div className="flex flex-col pr-6 border-r border-gray-200 w-1/4 min-w-[150px]">
                    <span className="text-[14px] font-medium text-gray-900 mb-3">Overall rating</span>
                    <div className="space-y-1.5">
                      {[5, 4, 3, 2, 1].map((star) => (
                        <div key={star} className="flex items-center gap-3 text-xs text-gray-900">
                          <span className="w-2 font-medium">{star}</span>
                          <div className="w-full max-w-[120px] h-[4px] bg-gray-200 rounded-full overflow-hidden flex items-center">
                            <div 
                              className="bg-gray-900 h-full rounded-full" 
                              style={{ width: star === 5 ? '95%' : star === 4 ? '5%' : '0%' }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Individual Categories */}
                  <div className="flex flex-1 justify-between gap-4">
                    <div className="flex flex-col items-start pl-2">
                      <span className="text-[14px] font-medium text-gray-900 mb-1">Cleanliness</span>
                      <span className="text-[18px] font-semibold text-gray-900 mb-3">{LISTING_DATA.ratingsBreakdown.cleanliness.toFixed(1)}</span>
                      {/* Spray Bottle Custom SVG */}
                      <svg className="w-8 h-8 text-gray-900 stroke-[1.2]" fill="none" stroke="currentColor" viewBox="0 0 32 32">
                        <path d="M12 12V7a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5" strokeLinecap="round" />
                        <path d="M8 15a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4h-8a4 4 0 0 1-4-4V15Z" strokeLinecap="round" />
                        <path d="M5 9h5" strokeLinecap="round" />
                        <circle cx="16" cy="19" r="1.5" fill="currentColor" stroke="none" />
                        <path d="M4 5 Q2 7 3 10" strokeLinecap="round" />
                      </svg>
                    </div>
                    
                    <div className="flex flex-col items-start pl-6 border-l border-gray-200">
                      <span className="text-[14px] font-medium text-gray-900 mb-1">Accuracy</span>
                      <span className="text-[18px] font-semibold text-gray-900 mb-3">{LISTING_DATA.ratingsBreakdown.accuracy.toFixed(1)}</span>
                      <CheckCircle2 className="w-8 h-8 text-gray-900 stroke-[1.2]" />
                    </div>

                    <div className="flex flex-col items-start pl-6 border-l border-gray-200">
                      <span className="text-[14px] font-medium text-gray-900 mb-1">Check-in</span>
                      <span className="text-[18px] font-semibold text-gray-900 mb-3">{LISTING_DATA.ratingsBreakdown.checkIn.toFixed(1)}</span>
                      <Key className="w-8 h-8 text-gray-900 stroke-[1.2]" />
                    </div>

                    <div className="flex flex-col items-start pl-6 border-l border-gray-200">
                      <span className="text-[14px] font-medium text-gray-900 mb-1">Communication</span>
                      <span className="text-[18px] font-semibold text-gray-900 mb-3">{LISTING_DATA.ratingsBreakdown.communication.toFixed(1)}</span>
                      <MessageSquare className="w-8 h-8 text-gray-900 stroke-[1.2]" />
                    </div>

                    <div className="flex flex-col items-start pl-6 border-l border-gray-200">
                      <span className="text-[14px] font-medium text-gray-900 mb-1">Location</span>
                      <span className="text-[18px] font-semibold text-gray-900 mb-3">{LISTING_DATA.ratingsBreakdown.location.toFixed(1)}</span>
                      <Map className="w-8 h-8 text-gray-900 stroke-[1.2]" />
                    </div>

                    <div className="flex flex-col items-start pl-6 border-l border-gray-200">
                      <span className="text-[14px] font-medium text-gray-900 mb-1">Value</span>
                      <span className="text-[18px] font-semibold text-gray-900 mb-3">{LISTING_DATA.ratingsBreakdown.value.toFixed(1)}</span>
                      <Tag className="w-8 h-8 text-gray-900 stroke-[1.2]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Keyword Pills */}
              <div className="flex gap-3 overflow-x-auto pb-4 no-scrollbar">
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-full shrink-0">
                  <span className="text-gray-500 text-sm">Comfort</span>
                  <span className="text-gray-900 font-semibold text-sm">6</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-full shrink-0">
                  <span className="text-gray-500 text-sm">Accuracy</span>
                  <span className="text-gray-900 font-semibold text-sm">5</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-full shrink-0">
                  <span className="text-gray-500 text-sm">Hot tub</span>
                  <span className="text-gray-900 font-semibold text-sm">5</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-full shrink-0">
                  <span className="text-gray-500 text-sm">Condition</span>
                  <span className="text-gray-900 font-semibold text-sm">4</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-full shrink-0">
                  <span className="text-gray-500 text-sm">Hospitality</span>
                  <span className="text-gray-900 font-semibold text-sm">8</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-full shrink-0">
                  <span className="text-gray-500 text-sm">Cleanliness</span>
                  <span className="text-gray-900 font-semibold text-sm">4</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-full shrink-0">
                  <span className="text-gray-500 text-sm">Amenities</span>
                  <span className="text-gray-900 font-semibold text-sm">2</span>
                </div>
              </div>

              {/* Guest Reviews Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {LISTING_DATA.reviewsList.map((review, idx) => (
                  <div key={idx} className="flex flex-col gap-3">
                    <div className="flex items-center gap-4">
                      <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full object-cover bg-gray-200" />
                      <div>
                        <div className="font-semibold text-gray-900">{review.name}</div>
                        <div className="text-sm text-gray-500">{review.date}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-gray-900 text-gray-900" />
                      ))}
                    </div>
                    <p className="text-gray-700 leading-relaxed text-[15px]">{review.comment}</p>
                    {review.comment.length > 100 && (
                      <button className="text-gray-900 font-semibold underline text-sm text-left w-fit hover:text-gray-600">Show more</button>
                    )}
                  </div>
                ))}
              </div>
              <button className="mt-8 border border-gray-900 font-semibold py-3 px-6 rounded-lg hover:bg-gray-50 transition text-sm">
                Show all {LISTING_DATA.reviewsCount} reviews
              </button>
            </div>

            <div className="pb-6 border-b border-gray-200 bg-gray-50/80 p-6 rounded-2xl border border-gray-200">
              <div className="flex items-center gap-4 mb-4">
                <img src={LISTING_DATA.host.image} alt={LISTING_DATA.host.name} className="w-16 h-16 rounded-full object-cover shadow" />
                <div>
                  <h3 className="text-lg font-semibold">Hosted by {LISTING_DATA.host.name}</h3>
                  <p className="text-gray-500 text-xs">Joined {LISTING_DATA.host.joined} · 🌟 482 Reviews · 🛡️ Identity verified</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                {LISTING_DATA.host.bio}
              </p>
              <div className="space-y-2 text-xs text-gray-600 mb-6">
                <div>Response rate: {LISTING_DATA.host.responseRate}</div>
                <div>Response time: {LISTING_DATA.host.responseTime}</div>
              </div>
              <button className="bg-gray-900 text-white font-semibold py-2.5 px-5 rounded-lg hover:bg-gray-800 transition text-sm">
                Contact Host
              </button>
            </div>

            <div className="pb-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold mb-6">Things to know</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">House rules</h4>
                  <ul className="space-y-1.5 text-gray-600 text-xs">
                    <li>Check-in: 3:00 PM - 9:00 PM</li>
                    <li>Checkout: 11:00 AM</li>
                    <li>Self check-in with lockbox</li>
                    <li>Not suitable for pets</li>
                    <li>No parties or events</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Safety & property</h4>
                  <ul className="space-y-1.5 text-gray-600 text-xs">
                    <li>Pool/hot tub without gate or lock</li>
                    <li>Nearby body of water</li>
                    <li>Security camera on property</li>
                    <li>Carbon monoxide alarm</li>
                    <li>Smoke alarm</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Cancellation policy</h4>
                  <ul className="space-y-1.5 text-gray-600 text-xs">
                    <li>Free cancellation for 48 hours.</li>
                    <li>Review the full cancellation policy which applies even if you cancel for illness or disruptions caused by COVID-19.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Additional Photo Gallery Grid at the bottom */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Explore more views</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div 
                  onClick={() => setLightboxIndex(0)}
                  className="cursor-pointer group rounded-xl overflow-hidden shadow-sm h-36 bg-gray-100"
                >
                  <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80" alt="Gallery 1" className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
                </div>
                <div 
                  onClick={() => setLightboxIndex(1)}
                  className="cursor-pointer group rounded-xl overflow-hidden shadow-sm h-36 bg-gray-100"
                >
                  <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80" alt="Gallery 2" className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
                </div>
                <div 
                  onClick={() => setLightboxIndex(2)}
                  className="cursor-pointer group rounded-xl overflow-hidden shadow-sm h-36 bg-gray-100"
                >
                  <img src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80" alt="Gallery 3" className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
                </div>
                <div 
                  onClick={() => setLightboxIndex(3)}
                  className="cursor-pointer group rounded-xl overflow-hidden shadow-sm h-36 bg-gray-100"
                >
                  <img src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=600&q=80" alt="Gallery 4" className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
                </div>
              </div>
            </div>

          </div>

          {/* Sticky Booking Card with Interactive Calendar */}
          <div className="relative">
            <div className="sticky top-28 bg-white border border-gray-200 rounded-2xl p-6 shadow-xl">
              <div className="flex items-baseline justify-between mb-4">
                <div>
                  <span className="text-2xl font-bold">${LISTING_DATA.pricePerNight}</span>
                  <span className="text-gray-500 text-sm"> night</span>
                </div>
                <div className="flex items-center gap-1 text-sm font-semibold">
                  <Star className="w-4 h-4 fill-current text-gray-900" />
                  <span>{LISTING_DATA.rating}</span>
                  <span className="text-gray-400 font-normal">({LISTING_DATA.reviewsCount})</span>
                </div>
              </div>

              <div className="border border-gray-300 rounded-xl overflow-hidden mb-4 relative">
                <div 
                  onClick={() => setShowCalendarDropdown(!showCalendarDropdown)}
                  className="grid grid-cols-2 border-b border-gray-300 cursor-pointer hover:bg-gray-50 transition"
                >
                  <div className="p-3 border-r border-gray-300">
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-700">Check-in</label>
                    <div className="text-xs font-medium text-gray-900 mt-0.5">{checkInDate}</div>
                  </div>
                  <div className="p-3">
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-700">Checkout</label>
                    <div className="text-xs font-medium text-gray-900 mt-0.5">{checkOutDate}</div>
                  </div>
                </div>

                {/* Calendar Dropdown Popup */}
                {showCalendarDropdown && (
                  <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-2xl shadow-2xl p-6 mt-2 z-30 w-[350px]">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-semibold text-sm text-gray-900">October 2026</h4>
                      <div className="flex items-center gap-2">
                        <button className="p-1.5 rounded-full hover:bg-gray-100 text-gray-600">
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button className="p-1.5 rounded-full hover:bg-gray-100 text-gray-600">
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-7 text-center text-xs font-bold text-gray-400 mb-2">
                      <div>Su</div><div>Mo</div><div>Tu</div><div>We</div><div>Th</div><div>Fr</div><div>Sa</div>
                    </div>

                    <div className="grid grid-cols-7 gap-y-1 text-center text-xs">
                      <div className="p-2 text-gray-300">27</div><div className="p-2 text-gray-300">28</div><div className="p-2 text-gray-300">29</div><div className="p-2 text-gray-300">30</div>
                      <div className="p-2 hover:bg-gray-100 rounded-full cursor-pointer">1</div>
                      <div className="p-2 hover:bg-gray-100 rounded-full cursor-pointer">2</div>
                      <div className="p-2 hover:bg-gray-100 rounded-full cursor-pointer">3</div>

                      <div className="p-2 hover:bg-gray-100 rounded-full cursor-pointer">4</div>
                      <div className="p-2 hover:bg-gray-100 rounded-full cursor-pointer">5</div>
                      <div className="p-2 hover:bg-gray-100 rounded-full cursor-pointer">6</div>
                      <div className="p-2 hover:bg-gray-100 rounded-full cursor-pointer">7</div>
                      <div className="p-2 hover:bg-gray-100 rounded-full cursor-pointer">8</div>
                      <div className="p-2 hover:bg-gray-100 rounded-full cursor-pointer">9</div>
                      <div className="p-2 hover:bg-gray-100 rounded-full cursor-pointer">10</div>

                      <div className="p-2 hover:bg-gray-100 rounded-full cursor-pointer">11</div>
                      <div 
                        onClick={() => { setCheckInDate('Oct 12, 2026'); setCheckOutDate('Oct 17, 2026'); setShowCalendarDropdown(false); }}
                        className="p-2 bg-gray-900 text-white font-bold rounded-l-full cursor-pointer"
                      >12</div>
                      <div className="p-2 bg-gray-100 cursor-pointer">13</div>
                      <div className="p-2 bg-gray-100 cursor-pointer">14</div>
                      <div className="p-2 bg-gray-100 cursor-pointer">15</div>
                      <div className="p-2 bg-gray-100 cursor-pointer">16</div>
                      <div 
                        onClick={() => { setCheckInDate('Oct 12, 2026'); setCheckOutDate('Oct 17, 2026'); setShowCalendarDropdown(false); }}
                        className="p-2 bg-gray-900 text-white font-bold rounded-r-full cursor-pointer"
                      >17</div>

                      <div className="p-2 hover:bg-gray-100 rounded-full cursor-pointer">18</div>
                      <div className="p-2 hover:bg-gray-100 rounded-full cursor-pointer">19</div>
                      <div className="p-2 hover:bg-gray-100 rounded-full cursor-pointer">20</div>
                      <div className="p-2 hover:bg-gray-100 rounded-full cursor-pointer">21</div>
                      <div className="p-2 hover:bg-gray-100 rounded-full cursor-pointer">22</div>
                      <div className="p-2 hover:bg-gray-100 rounded-full cursor-pointer">23</div>
                      <div className="p-2 hover:bg-gray-100 rounded-full cursor-pointer">24</div>

                      <div className="p-2 hover:bg-gray-100 rounded-full cursor-pointer">25</div>
                      <div className="p-2 hover:bg-gray-100 rounded-full cursor-pointer">26</div>
                      <div className="p-2 hover:bg-gray-100 rounded-full cursor-pointer">27</div>
                      <div className="p-2 hover:bg-gray-100 rounded-full cursor-pointer">28</div>
                      <div className="p-2 hover:bg-gray-100 rounded-full cursor-pointer">29</div>
                      <div className="p-2 hover:bg-gray-100 rounded-full cursor-pointer">30</div>
                      <div className="p-2 hover:bg-gray-100 rounded-full cursor-pointer">31</div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-gray-200 flex justify-end">
                      <button 
                        onClick={() => setShowCalendarDropdown(false)}
                        className="text-xs font-semibold underline text-gray-900 px-3 py-1.5"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                )}

                <div className="p-3 relative">
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-700">Guests</label>
                  <button 
                    onClick={() => setShowGuestDropdown(!showGuestDropdown)}
                    className="w-full flex items-center justify-between text-xs font-medium text-gray-900 mt-0.5 text-left"
                  >
                    <span>{guestsCount} guest{guestsCount > 1 ? 's' : ''}</span>
                    <ChevronDown className="w-4 h-4 text-gray-500" />
                  </button>

                  {showGuestDropdown && (
                    <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-xl shadow-xl p-4 mt-2 z-20">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-semibold text-sm">Guests</div>
                          <div className="text-xs text-gray-500">Ages 13 or above</div>
                        </div>
                        <div className="flex items-center gap-3">
                          <button 
                            onClick={() => setGuestsCount(Math.max(1, guestsCount - 1))}
                            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-gray-900"
                          >-</button>
                          <span className="text-sm font-semibold">{guestsCount}</span>
                          <button 
                            onClick={() => setGuestsCount(Math.min(LISTING_DATA.maxGuests, guestsCount + 1))}
                            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-gray-900"
                          >+</button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white font-semibold py-3.5 rounded-xl shadow-md transition text-base">
                Reserve
              </button>

              <p className="text-center text-xs text-gray-500 mt-3">You won't be charged yet</p>

              <div className="mt-6 space-y-3 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span className="underline">${LISTING_DATA.pricePerNight} x 5 nights</span>
                  <span>${LISTING_DATA.pricePerNight * 5}</span>
                </div>
                <div className="flex justify-between">
                  <span className="underline">Cleaning fee</span>
                  <span>${LISTING_DATA.cleaningFee}</span>
                </div>
                <div className="flex justify-between">
                  <span className="underline">Airbnb service fee</span>
                  <span>${LISTING_DATA.serviceFee}</span>
                </div>
              </div>

              <div className="border-t border-gray-200 mt-6 pt-4 flex justify-between font-bold text-gray-900">
                <span>Total before taxes</span>
                <span>${(LISTING_DATA.pricePerNight * 5) + LISTING_DATA.cleaningFee + LISTING_DATA.serviceFee}</span>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* Photo Tour Modal Overlay */}
      {isPhotoTourOpen && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col animate-fade-in overflow-hidden">
          <div className="bg-white px-8 py-4 flex items-center justify-between border-b border-gray-200 z-10 shrink-0">
            <button 
              onClick={() => setIsPhotoTourOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-full transition flex items-center gap-2 font-semibold text-sm"
            >
              <ChevronLeft className="w-5 h-5" /> Back
            </button>
            <span className="font-semibold text-sm">Photo tour</span>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-1.5 text-xs font-semibold underline px-3 py-1.5 rounded-lg hover:bg-gray-100">
                <Share className="w-3.5 h-3.5" /> Share
              </button>
              <button 
                onClick={() => setIsLiked(!isLiked)}
                className="flex items-center gap-1.5 text-xs font-semibold underline px-3 py-1.5 rounded-lg hover:bg-gray-100"
              >
                <Heart className={`w-3.5 h-3.5 ${isLiked ? 'fill-rose-500 text-rose-500' : ''}`} /> Save
              </button>
            </div>
          </div>

          <div className="flex-1 flex overflow-hidden">
            <div className="w-1/3 border-r border-gray-200 p-8 overflow-y-auto space-y-4 bg-gray-50/50">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Photos</h2>
              {LISTING_DATA.categories.map((cat) => {
                const isSelected = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => {
                      isManualScrolling.current = true;
                      setActiveCategory(cat.id);
                      const el = document.getElementById(`tour-cat-${cat.id}`);
                      if (el && containerRef.current) {
                        containerRef.current.scrollTo({
                          top: el.offsetTop - 20,
                          behavior: 'smooth'
                        });
                        setTimeout(() => {
                          isManualScrolling.current = false;
                        }, 500);
                      }
                    }}
                    className={`w-full flex items-center gap-4 p-3 rounded-xl border text-left transition ${
                      isSelected 
                        ? 'border-gray-900 bg-white shadow-md' 
                        : 'border-transparent hover:bg-gray-100/80 bg-transparent'
                    }`}
                  >
                    <img src={cat.photos[0].url} alt={cat.name} className="w-16 h-12 object-cover rounded-lg shrink-0 shadow-xs" />
                    <div>
                      <div className="font-semibold text-sm text-gray-900">{cat.name}</div>
                      <div className="text-xs text-gray-500 mt-0.5">{cat.photos.length} photos</div>
                    </div>
                  </button>
                );
              })}
            </div>

            <div 
              ref={containerRef}
              onScroll={handleScroll}
              className="w-2/3 p-12 overflow-y-auto space-y-20 scroll-smooth bg-white"
            >
              {LISTING_DATA.categories.map((cat) => {
                return (
                  <div key={cat.id} id={`tour-cat-${cat.id}`} className="scroll-mt-8 flex flex-col lg:flex-row gap-8 items-start border-b border-gray-100 pb-16">
                    <div className="lg:w-1/3 shrink-0 sticky top-8">
                      <h2 className="text-xl font-bold text-gray-900">{cat.name}</h2>
                      <p className="text-gray-500 text-xs mt-1 leading-relaxed">{cat.subtitle}</p>
                    </div>

                    <div className="lg:w-2/3 w-full">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {cat.photos.map((photo, pIdx) => {
                          const globalIndex = allPhotos.findIndex(p => p.url === photo.url);
                          const isHero = pIdx === 0;
                          return (
                            <div 
                              key={pIdx}
                              onClick={() => setLightboxIndex(globalIndex)}
                              className={`cursor-pointer group rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition bg-gray-50 border border-gray-100 relative ${isHero ? 'sm:col-span-2 h-[350px] md:h-[450px]' : 'h-48 md:h-64'}`}
                            >
                              <img 
                                src={photo.url} 
                                alt={photo.caption} 
                                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                <span className="text-white text-sm font-medium">{photo.caption}</span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Lightbox Viewer */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-60 bg-black/95 flex flex-col items-center justify-between p-6">
          <div className="w-full max-w-7xl flex items-center justify-between text-white">
            <span className="text-sm font-medium">
              {lightboxIndex + 1} / {allPhotos.length}
            </span>
            <button 
              onClick={() => setLightboxIndex(null)}
              className="p-2.5 rounded-full hover:bg-white/10 transition text-white"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="relative flex-1 flex items-center justify-center w-full max-w-5xl my-4">
            <button 
              onClick={() => setLightboxIndex((lightboxIndex - 1 + allPhotos.length) % allPhotos.length)}
              className="absolute left-2 md:-left-12 p-3 rounded-full bg-white/20 hover:bg-white/40 text-white transition z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="max-h-[75vh] max-w-full flex flex-col items-center">
              <img 
                src={allPhotos[lightboxIndex].url} 
                alt="Fullscreen view" 
                className="max-h-[70vh] object-contain rounded-lg shadow-2xl"
              />
              <p className="text-white text-sm mt-3 text-center font-medium">
                {allPhotos[lightboxIndex].caption}
              </p>
            </div>

            <button 
              onClick={() => setLightboxIndex((lightboxIndex + 1) % allPhotos.length)}
              className="absolute right-2 md:-right-12 p-3 rounded-full bg-white/20 hover:bg-white/40 text-white transition z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="h-10"></div>
        </div>
      )}

    </div>
  );
}