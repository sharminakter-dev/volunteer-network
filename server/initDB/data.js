const sampleEvents = [
  {
    "title": "Child Support Drive",
    "description": "Support underprivileged children with food, education, and emotional care.",
    "date": "2025-08-05",
     "image": {
      "url": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      "fileName": "photo-1500648767791-00dcc994a43e"
    }
  },
  {
    "title": "Refuge Shelter Initiative",
    "description": "Help provide safe shelter for refugees and displaced families.",
    "date": "2025-08-08",
    "image": {
      "url": "https://images.unsplash.com/photo-1531379410504-4f51a6a9b55f",
      "fileName": "photo-1531379410504-4f51a6a9b55f"
    }
  },
  {
    "title": "Food Charity Week",
    "description": "Join hands to distribute meals and groceries to people in need.",
    "date": "2025-08-10",
    "image": {
      "url": "https://images.unsplash.com/photo-1472653431158-6364773b2a56",
      "fileName": "photo-1472653431158-6364773b2a56"
    }
  },
  {
    "title": "Clothing Swap Event",
    "description": "Host a swap to reduce waste and give clothes to those in need.",
    "date": "2025-08-12",
    "image": {
      "url": "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91",
      "fileName": "photo-1508214751196-bcfd4ca60f91"
    }
  },
  {
    "title": "River Clean-Up Campaign",
    "description": "Participate in cleaning up local rivers and raising awareness.",
    "date": "2025-08-14",
    "image": {
      "url": "https://images.unsplash.com/photo-1515377905703-c4788e51af15",
      "fileName": "photo-1515377905703-c4788e51af15"
    }
  },
  {
    "title": "Clean Water for Children",
    "description": "Install clean water filters and teach hygiene to children.",
    "date": "2025-08-16",
    "image": {
      "url": "https://images.unsplash.com/photo-1496347646636-ea76fef6ec14",
      "fileName": "photo-1496347646636-ea76fef6ec14"
    }
  },
  {
    "title": "Good Education Day",
    "description": "Volunteer as a tutor or provide learning materials to students.",
    "date": "2025-08-18",
    "image": {
      "url": "https://images.unsplash.com/photo-1580281657529-c5e28fa86c7a",
      "fileName": "photo-1580281657529-c5e28fa86c7a"
    }
  },
  {
    "title": "New Books for Kids",
    "description": "Donate and distribute new books to local schools and libraries.",
    "date": "2025-08-20",
     "image": {
      "url": "https://images.unsplash.com/photo-1500534623283-312aade485b7",
      "fileName": "photo-1500534623283-312aade485b7"
    }
  },
  {
    "title": "Study Group Leader",
    "description": "Lead a study group and help students with homework and test prep.",
    "date": "2025-08-21",
    "image": {
      "url": "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa",
      "fileName": "photo-1446776811953-b23d57bd21aa"
    }
  },
  {
    "title": "Build Birdhouses",
    "description": "Construct and place birdhouses to support neighborhood wildlife.",
    "date": "2025-08-22",
     "image": {
      "url":"",
      "fileName":""
    }
  },
  {
    "title": "Library Organizer Day",
    "description": "Help categorize and shelve books at your community library.",
    "date": "2025-08-24",
    "image": {
      "url": "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa",
      "fileName": "photo-1446776811953-b23d57bd21aa"
    }
  },
  {
    "title": "Driving Safety Seminar",
    "description": "Present or attend a community seminar on safe driving practices.",
    "date": "2025-08-26",
    "image": {
      "url": "https://images.unsplash.com/photo-1532635242-9f731c129df9",
      "fileName": "photo-1532635242-9f731c129df9"
    }
  },
  {
    "title": "Free Music Lessons",
    "description": "Offer your musical talents by teaching children or adults for free.",
    "date": "2025-08-27",
    "image": {
      "url": "https://images.unsplash.com/photo-1486308510493-cb6118a82f6f",
      "fileName": "photo-1486308510493-cb6118a82f6f"
    }
  },
  {
    "title": "Voter Registration Help",
    "description": "Educate and assist people on how to register to vote locally.",
    "date": "2025-08-29",
    "image": {
      "url": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
      "fileName": "photo-1504384308090-c894fdcc538d"
    }
  },
  {
    "title": "Park Clean-Up Day",
    "description": "Join a community effort to clean and beautify local parks.",
    "date": "2025-08-30",
    "image": {
      "url": "https://images.unsplash.com/photo-1508672019048-805c876b67e2",
      "fileName": "photo-1508672019048-805c876b67e2"
    }
  },
  {
    "title": "IT Help for Adults",
    "description": "Offer basic tech support and computer lessons to adults.",
    "date": "2025-09-01",
    "image": {
      "url": "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91",
      "fileName": "photo-1508214751196-bcfd4ca60f91"
    }
  },
  {
    "title": "Foster a Shelter Animal",
    "description": "Give a temporary loving home to a rescued animal.",
    "date": "2025-09-03",
    "image": {
      "url": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      "fileName": "photo-1522202176988-66273c2fd55f"
    }
  },
  {
    "title": "PTA Babysitting Support",
    "description": "Babysit children during PTA meetings to help parents participate.",
    "date": "2025-09-05",
    "image": {
      "url": "https://images.unsplash.com/photo-1515377905703-c4788e51af15",
      "fileName": "photo-1515377905703-c4788e51af15"
    }
  },
  {
    "title": "Stuffed Animal Collection",
    "description": "Collect stuffed animals to donate to children in hospitals.",
    "date": "2025-09-07",
    "image": {
      "url": "https://images.unsplash.com/photo-1525351484163-7529414344d8",
      "fileName": "photo-1525351484163-7529414344d8"
    }
  },
  {
    "title": "School Supply Drive",
    "description": "Collect backpacks, notebooks, and supplies for school kids.",
    "date": "2025-09-10",
    "image": {
      "url": "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91",
      "fileName": "photo-1508214751196-bcfd4ca60f91"
    }
  }
]

module.exports = sampleEvents;