# Module 1 Assignment 2: Campus Connect

## Objective

Build your first React Native application one visible step at a time. You will begin with a working Expo screen, create one campus-life card directly in `App.js`, turn that card into a reusable component, pass information with props, add state and `Pressable` interaction, move repeated data into an array, and finish by organizing the app into the standard course folder structure.

This build is intentionally progressive: **build it → see it → understand it → reuse it → organize it**.

## What You Are Building

**Campus Connect** is a colorful student-life dashboard with cards for things students may actually want to find quickly:

- 🎮 Game Lounge
- 📚 Study Jam
- 🍕 Campus Eats
- One original activity you create

Pressing a card will update a visible selection panel on the screen. This assignment does **not** use native alerts, so the interaction works in the Codespaces web preview.

---

# Before You Code

Open your repository in GitHub Codespaces and run:

```bash
git status
git pull
git switch -c feature/campus-connect
npm install
npx expo start --web
```

The provided project already includes the web packages needed by Expo, so you should not have to install them separately.

If the preview does not refresh correctly, stop Expo with `Ctrl + C` and restart with:

```bash
npx expo start --web -c
```

**Do not run `git init`.** Your GitHub repository is already a Git repository.

### Checkpoint 0 – Prove the environment works

Before changing code, you should see a dark Campus Connect starter screen with a purple header and a card that says **Your starter app is running.**

If you do not see that screen, fix the environment before continuing.

Commit the working setup if `package-lock.json` was created or changed:

```bash
git add .
git commit -m "Confirm Campus Connect starter setup"
```

---

# Build Stage 1 – Build One Card in `App.js`

Open `App.js`.

Keep the existing Campus Connect header. Replace the starter message card with a new section heading:

```text
What's Happening?
```

Under that heading, build **one card directly in `App.js`** using `View` and `Text`.

Your first card must display:

```text
🎮 Game Lounge
Drop in, play games, and meet other students.
OPEN TODAY
```

Do not create a custom component yet.

### Why this stage matters

You need to understand what the card is before you make it reusable. React becomes easier when you first build something once, then recognize the repeated pattern.

### Test before moving on

You should see:

- Campus Connect header
- `What's Happening?`
- One Game Lounge card
- No red error screen

Commit:

```bash
git add .
git commit -m "Add the first Campus Connect card"
```

---

# Build Stage 2 – Make the Card Look Like an App

Add styles for the Game Lounge card.

Your card should have:

- Dark card background
- Rounded corners
- Comfortable padding
- Large emoji
- Bold title
- Readable description
- Bright status chip or label
- Space between sections

Use a fun accent color such as purple, aqua, orange, blue, or pink.

### Test before moving on

Ask yourself: **Would this look normal inside a modern student app?**

Do not move on while the card still looks like plain text on a white page.

Commit:

```bash
git add .
git commit -m "Style the Campus Connect activity card"
```

---

# Build Stage 3 – Manually Add Two More Cards

Copy the card pattern in `App.js` and create two more cards.

### 📚 Study Jam

```text
Find a study space and get ready for your next exam.
STUDY NOW
```

### 🍕 Campus Eats

```text
Find food, snacks, and student dining options around campus.
GET FOOD
```

At this stage you are intentionally repeating code.

### Why this stage matters

You should now notice that the three cards have the same structure but different information. That repeated pattern is the reason we create reusable React components.

### Test before moving on

All three cards should be visible and styled consistently.

Commit:

```bash
git add .
git commit -m "Add three campus activity cards"
```

---

# Build Stage 4 – Create Your First Reusable Component

Open:

```text
src/components/CampusCard.js
```

Replace the comments with a React Native function component.

Move the repeated card layout from `App.js` into `CampusCard.js`.

For the first version, the component may still contain the Game Lounge information directly.

Import `CampusCard` into `App.js` and replace one hard-coded card with:

```jsx
<CampusCard />
```

### Test before moving on

The screen should look the same as before. Refactoring should improve organization without breaking the design.

Commit:

```bash
git add .
git commit -m "Create the reusable CampusCard component"
```

---

# Build Stage 5 – Add Props

Change `CampusCard` so it receives information instead of hard-coding it.

Your component will eventually receive:

```text
emoji
title
description
status
accent
```

Use the component three times in `App.js` and pass different values into each card.

Example shape:

```jsx
<CampusCard
  emoji="🎮"
  title="Game Lounge"
  description="Drop in, play games, and meet other students."
  status="OPEN TODAY"
  accent="#8B5CF6"
/>
```

### What you should understand

`App.js` sends information **down** to `CampusCard` through props.

```text
App.js
   ↓ props
CampusCard
   ↓
Visible card
```

### Test before moving on

You should still see all three different cards even though they now use one shared component.

Commit:

```bash
git add .
git commit -m "Pass activity information with props"
```

---

# Build Stage 6 – Add Interaction with State and `Pressable`

Import `useState` in the screen.

Create state for the selected activity.

The starting value should represent no selection yet.

Add a `Pressable` inside `CampusCard` and pass an `onPress` prop from the parent screen.

When a card is pressed, update state in the parent.

Display a selection panel under the cards.

Before a selection, show something similar to:

```text
Pick a campus activity to see what you're checking out.
```

After a selection, show:

```text
You're checking out: Game Lounge 🎮
```

### Important

Do not use `Alert.alert()` for this assignment. The selected information must appear directly on the screen so the interaction is easy to test in Codespaces.

### Test every card

Press Game Lounge, Study Jam, and Campus Eats. The visible selection panel should update every time.

Commit:

```bash
git add .
git commit -m "Add interactive campus activity selection"
```

---

# Build Stage 7 – Move Repeated Data Into an Array

Open:

```text
src/data/campusActivities.js
```

Create and export an array containing the three starter activities.

Each object should have:

```text
id
emoji
title
description
status
accent
```

Import the array into the screen.

Replace the three manually written `CampusCard` components with `.map()` so one component is created for each data object.

Use each object's unique `id` as the React `key`.

### Why this stage matters

You are separating:

```text
DATA → what the app knows
COMPONENT → how one item looks
SCREEN → how the app organizes everything
```

### Test before moving on

The screen should still show the same three cards. If the appearance changes, check your props and object property names.

Commit:

```bash
git add .
git commit -m "Render Campus Connect cards from data"
```

---

# Build Stage 8 – Add Your Original Activity

Add a fourth object to `campusActivities.js`.

Create something you would actually want to see in a student app.

Ideas:

- 🎤 Open Mic Night
- 🏀 Rec Center
- 💼 Career Pop-Up
- 🎬 Movie Night
- 🕹️ Esports Tournament
- ☕ Coffee Break
- 🎨 Student Art Show
- 💻 Coding Club
- 🎵 Campus Concert

Your original activity must have its own unique ID, emoji, title, description, status, and accent color.

### Test before moving on

Your fourth card must appear automatically from the data array and respond when pressed.

Commit:

```bash
git add .
git commit -m "Add an original Campus Connect activity"
```

---

# Build Stage 9 – Refactor Into the Course Folder Structure

Up to this point, keeping the main build in `App.js` helped you see how the pieces connect.

Now move the finished screen code into:

```text
src/screens/HomeScreen.js
```

`App.js` should become very small and simply load `HomeScreen`.

Your final project structure should include:

```text
campus-connect/
├── src/
│   ├── assets/
│   │   ├── images/
│   │   ├── icons/
│   │   └── fonts/
│   ├── components/
│   │   └── CampusCard.js
│   ├── screens/
│   │   └── HomeScreen.js
│   ├── navigation/
│   ├── hooks/
│   ├── services/
│   ├── context/
│   ├── data/
│   │   └── campusActivities.js
│   └── utils/
├── App.js
├── index.js
├── app.json
├── package.json
├── .gitignore
└── README.md
```

### Test before moving on

The app must look and behave exactly as it did before the refactor.

Commit:

```bash
git add .
git commit -m "Organize Campus Connect into course folders"
```

---

# Build Stage 10 – Final Quality Check

Before submitting, verify:

- The app has a dark, colorful student-focused design.
- Campus Connect and the subtitle are visible.
- At least four activity cards appear.
- Each card has an emoji, title, description, and status.
- The same reusable `CampusCard` component renders all cards.
- Pressing every card updates the visible selection panel.
- Your original activity works.
- No placeholder text remains.
- No `TODO` text appears in the finished interface.
- There are no red runtime errors.

Then run:

```bash
git status
git log --oneline --graph --all
```

---

# Push and Merge

```bash
git push -u origin feature/campus-connect
git switch main
git pull
git merge feature/campus-connect
git push
git status
git log --oneline --graph --all
```

---

# Blackboard Submission

Upload screenshots only. Do not submit a repository link.

Use `SUBMISSION_CHECKLIST.md` for the required screenshots.

---

# Grading Rubric – 100 Points

| Criteria | Points |
|---|---:|
| Starter app runs before development begins | 5 |
| One hard-coded card is built and styled correctly | 10 |
| Three campus activity cards are completed | 10 |
| Reusable `CampusCard` component works | 15 |
| Props display different card information correctly | 15 |
| State and `Pressable` update the selected activity | 15 |
| Data array and `.map()` correctly render activities | 10 |
| Original student-created activity is complete | 5 |
| Final course folder structure is organized correctly | 5 |
| Git history and Blackboard screenshots are complete | 10 |

---

# Student Reference Links

React Native – React Fundamentals  
https://reactnative.dev/docs/intro-react

React Native – Core Components and APIs  
https://reactnative.dev/docs/components-and-apis

React Native – View  
https://reactnative.dev/docs/view

React Native – Text  
https://reactnative.dev/docs/text

React Native – StyleSheet  
https://reactnative.dev/docs/stylesheet

React Native – Pressable  
https://reactnative.dev/docs/pressable

Expo – Create a Project  
https://docs.expo.dev/get-started/create-a-project/

Expo – Start Developing  
https://docs.expo.dev/get-started/start-developing/

Expo – Web Development  
https://docs.expo.dev/workflow/web/

GitHub – Using Source Control in Codespaces  
https://docs.github.com/en/codespaces/developing-in-a-codespace/using-source-control-in-your-codespace
