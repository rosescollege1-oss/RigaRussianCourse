# До Риги! — Shared Russian Course (Riga Sprint + B2 Continuation)

A static GitHub Pages course for Rose, Aiden, and Adrian with optional shared progress through Firebase.

## What changed in this expanded version

- 24 weeks total
- 192 study sessions
- Weeks 1–13 = intensive Riga sprint toward strong B1 / emerging B2 travel ability
- Weeks 14–24 = full B2 continuation
- 240 weekly quiz questions
- Every graded quiz question now shows:
  - whether your answer was correct
  - the answer you chose
  - the correct answer
  - an explanation of the grammar/usage
- 5 targeted repeatable review quizzes (50 additional questions)
- 201 sentence-building exercises made from the course's Russian phrases
- Drag-and-drop on desktop and tap-to-move word tiles on phones/tablets
- About 785 unique vocabulary flashcards across the course and thematic decks
- 20 detailed grammar-reference chapters
- Separate B1 and B2 CEFR-style self-checklists
- Shared team progress still works through Firebase

## Files

- `index.html` — site structure
- `styles.css` — layout and responsive design
- `data.js` — original 13-week Riga-sprint curriculum
- `expansion.js` — B2 continuation, expanded quizzes, grammar reference, vocabulary decks and sentence builders
- `app.js` — progress, quizzes, feedback, flashcards, sentence builder, grammar lab and Firebase sync
- `firebase-config.js` — paste your Firebase Web App configuration here
- `firestore.rules` — Firestore rules for this three-person shared course

## Publish on GitHub Pages

1. Create a new GitHub repository, for example `riga-russian`.
2. Upload every file in this folder to the repository root.
3. In GitHub open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select your main branch and `/ (root)`.
6. Save. GitHub will give you the Pages URL after deployment.

The course itself works immediately in local-demo mode. Progress is saved only on that browser/device until Firebase is configured.

## Set up shared progress with Firebase

### 1. Create a Firebase project

Go to Firebase Console and create a project. The Spark/free plan is enough for this small three-person progress tracker under ordinary personal use.

### 2. Add a Web App

In Firebase project settings, add a Web App. Firebase gives you a configuration object containing values such as:

```js
apiKey
appId
authDomain
projectId
storageBucket
messagingSenderId
```

Open `firebase-config.js` and replace the placeholder values with the values Firebase gives you.

### 3. Enable Anonymous Authentication

In Firebase Console:

**Build → Authentication → Sign-in method → Anonymous → Enable**

The course does not need three separate email/password accounts. The profile selector determines whose progress is being edited; Firebase anonymous auth allows the website to access the private group document under the supplied rules.

### 4. Create Firestore

Go to:

**Build → Firestore Database → Create database**

Then publish the contents of `firestore.rules` in the **Rules** tab.

Do **not** leave a public GitHub Pages site using open Firestore test-mode rules.

### 5. Connect the three devices

Open the website on each device.

1. Go to **Setup**.
2. Enter the exact same long private group phrase on all three devices.
3. Press **Save / connect group**.
4. Select the correct profile (Rose, Aiden, or Adrian) before checking off work or taking quizzes.

The raw phrase is hashed in the browser before it is used as the Firestore document ID. Use a long phrase that other people would not guess.

## Recommended study plan before Riga

The first 13 weeks are deliberately travel-focused. A true beginner reaching a complete, balanced B2 level in roughly three months is not a normal expectation; B2 requires broad listening, reading, interaction, production, vocabulary, and grammatical control. Treat B2 by departure as a stretch goal, while aiming to make the Week 1–13 material automatic enough to handle travel problems without immediately switching to English.

For the sprint, each person should ideally do:

- all 8 weekly sessions
- the weekly quiz, then review every missed explanation
- at least 3 Sentence Lab sessions per week
- 40–80 flashcards on most study days
- at least 2 partner speaking sessions each week
- real native audio from the linked university/free resources

After Week 13, continue Weeks 14–24 for the full upper-intermediate grammar and discourse track.

## Why the course uses outside resources

The site is the organizer, practice engine, grammar handbook and progress tracker. Native listening and longer authentic reading still matter. The linked resources include the University of Kansas `Между нами` OER, Cornell's Russian grammar materials, the Pushkin Institute, Forvo, OpenRussian, and the Council of Europe CEFR descriptors.

## Updating the course later

Because the site is static, you can replace these files in GitHub and the next Pages deployment will update the course. Existing Firebase/local progress remains stored separately; adding new weeks does not erase already-completed session IDs or quiz scores.
