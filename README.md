# React Photo Gallery with Custom Hooks

The project develops a photo gallery system based on React technology which the developers built using Vite. The project demonstrates how to create custom hooks which help developers share code between functions by making it easy to retrieve information from external APIs.

The application shows multiple images through a responsive grid system which enables users to scroll through its entire content without interruptions.

## Technologies Used

- React
- Vite
- JavaScript (ES6+)
- CSS
- JSONPlaceholder API
- Picsum Photos

## Project Description

The application operates through its main feature which uses the `useFetch` custom hook for all data retrieval processes in the application. This hook manages data fetching tasks which include loading data and handling errors. The custom hook enables developers to build more efficient code that can be reused across multiple applications while simplifying the debugging process.

The main `Photos` component uses the custom hook to display pictures according to the information it retrieves.

## Infinite Scrolling

The developers added infinite scrolling to the application so users could view all their photos. The application shows a small selection of photo cards which it expands when users scroll down to the lower section of the web page.

The method enhances system efficiency while creating a more pleasant experience for users.

## Image Handling

The application retrieves photo title and ID information from the JSONPlaceholder API. The application uses Picsum to produce dependable placeholder images which it uses to display images. The solution prevents problems that occur when image URLs become inaccessible or outdated because it ensures all images load correctly on different web browsers.

The system fetches only the images that users can currently see on their screens which helps to optimize system performance

https://customhaoksreact.netlify.app
