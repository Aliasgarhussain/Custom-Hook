# Custom Hook Assignment

This is a small React project where I built a custom `useFetch` hook to make API calls easier and reusable. The app fetches product data and shows it on the screen in a simple card layout.

## Live Demo

Netlify link: https://custom-hook-phot.netlify.app

## What this project does

- Uses a custom `useFetch` hook to fetch data from an API.
- Handles loading and error states in a basic way.
- Shows a list of products in cards (image, title, price).
- Uses simple CSS for layout and styling.

## Tech stack

- React (with Vite)
- JavaScript
- CSS

## The `useFetch` hook

The hook takes a URL and returns three things:

- **products** – the data coming back from the API.
- **isLoading** – `true` while the data is being fetched.
- **err** – any error message if something goes wrong.

I used `useState` and `useEffect` to manage the fetch and state updates.

## API used

Right now the project is using a fake products API:

- `https://picsum.photos/v2/list?limit=400`
