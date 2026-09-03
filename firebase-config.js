// 1) Create a free Firebase project.
// 2) Enable Authentication > Anonymous and create a Cloud Firestore database.
// 3) Paste your Web App config below.
// The site automatically falls back to local-only demo storage until this is configured.
window.FIREBASE_CONFIG = {
  apiKey: "PASTE_FIREBASE_API_KEY_HERE",
  authDomain: "PASTE_PROJECT.firebaseapp.com",
  projectId: "PASTE_PROJECT_ID_HERE",
  storageBucket: "PASTE_PROJECT.firebasestorage.app",
  messagingSenderId: "PASTE_MESSAGING_SENDER_ID_HERE",
  appId: "PASTE_APP_ID_HERE"
};

window.RUSSIAN_TEAM_SETTINGS = {
  defaultTripDate: "2026-12-01",
  profiles: [
    { id: "rose", name: "Rose", emoji: "🌹" },
    { id: "aiden", name: "Aiden", emoji: "🧭" },
    { id: "adrian", name: "Adrian", emoji: "📚" }
  ]
};
