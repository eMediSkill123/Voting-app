export const posts = [
  {
    id: 1,
    user: {
      name: "Shivam Patsariya",
      avatar: "https://randomuser.me/api/portraits/men/11.jpg",
      department: "Admin",
      phone: "9123456789",
      email: "shivam.patsariya@email.com"
    },
    images: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
    ],
    caption: "Main Gate to Remain Closed During Festival Days. The college administration has announced that the main gate will remain closed during the upcoming festival period...",
    timestamp: "2025-03-02T09:00:00Z"
  },
  {
    id: 2,
    user: {
      name: "Anjali Kumar",
      avatar: "https://randomuser.me/api/portraits/women/12.jpg",
      department: "Student Council",
      phone: "9876543211",
      email: "anjali.kumar@email.com"
    },
    images: [
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80"
    ],
    caption: "Debate competition open for all! Register now.",
    timestamp: "2025-03-03T10:30:00Z"
  },
  {
    id: 3,
    user: {
      name: "Priya Patil",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
      department: "Cultural Committee",
      phone: "9988776655",
      email: "priya.patil@email.com"
    },
    images: [
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80"
    ],
    caption: "Enjoying the day!",
    timestamp: "2024-06-01T12:00:00Z"
  },
  {
    id: 4,
    user: {
      name: "Rahul Singh",
      avatar: "https://randomuser.me/api/portraits/men/13.jpg",
      department: "Sports",
      phone: "9001122334",
      email: "rahul.singh@email.com"
    },
    images: [
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80"
    ],
    caption: "Annual sports meet highlights!",
    timestamp: "2025-02-28T15:45:00Z"
  }
];

export const years = ["2025-2026", "2024-2025", "2023-2024"];

export const membersByYear = {
  "2025-2026": [
    {
      id: 1,
      name: "Joshua Lawrence",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      department: "IT Department",
      voted: true,
      phone: "9876543210",
      email: "joshualawrence@gmail.com"
    },
    {
      id: 2,
      name: "Ayesha Khan",
      avatar: "https://randomuser.me/api/portraits/women/3.jpg",
      department: "Cultural Committee",
      voted: false,
      phone: "9123456780",
      email: "ayesha.khan@email.com"
    },
    {
      id: 3,
      name: "Rohit Sharma",
      avatar: "https://randomuser.me/api/portraits/men/4.jpg",
      department: "Sports",
      voted: false,
      phone: "9988776654",
      email: "rohit.sharma@email.com"
    }
  ],
  "2024-2025": [
    {
      id: 4,
      name: "Sneha Verma",
      avatar: "https://randomuser.me/api/portraits/women/5.jpg",
      department: "Admin",
      voted: true,
      phone: "9001122335",
      email: "sneha.verma@email.com"
    }
  ],
  "2023-2024": [
    {
      id: 5,
      name: "Amit Patel",
      avatar: "https://randomuser.me/api/portraits/men/6.jpg",
      department: "Student Council",
      voted: false,
      phone: "9112233445",
      email: "amit.patel@email.com"
    }
  ]
}; 