// 1) Create a free Firebase project.
// 2) Enable Authentication > Anonymous and create a Cloud Firestore database.
// 3) Paste your Web App config below.
// The site automatically falls back to local-only demo storage until this is configured.
window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyCtZ-Ij9mHMovj24cT4AgxfJCl9rYfOiMI",
  authDomain: "riga-russian-course.firebaseapp.com",
  projectId: "riga-russian-course",
  storageBucket: "riga-russian-course.firebasestorage.app",
  messagingSenderId: "592995403191",
  appId: "1:592995403191:web:26ee4ab44fa8052cf39432"
};
window.RUSSIAN_TEAM_SETTINGS = {
  defaultTripDate: "2026-12-01",
  profiles: [
    { id: "rose", name: "Rose", emoji: "🌹" },
    { id: "aiden", name: "Aiden", emoji: "🧭" },
    { id: "adrian", name: "Adrian", emoji: "📚" }
  ]
};
