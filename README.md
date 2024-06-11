Count increases automatically by 1 per second
Clicking cookie button (manually) increases count by one 
Purchasing shop items at a cost (of the count) increases the count by 10 cps etc 
(and reset sets the cookies back to zero)

# Week 6 Assignment - Build a Cookie Clicker in React

Example: https://all-the-cookies.vercel.app/

Workshop
- 🎯 Start another React app with vite. It's convenient to use the Vite starter template for React.
npx create-vite
- ⛳️ Choose React, and JavaScript.
- 💭 Using the vite template sets up your build script too, plus .gitignore file, eslint and a simple vite.config.js with the react plugin installed.

User Stories:
- 🐿️ As a user, I want to be able to click the cookie and increment the counter
- 🐿️ As a user, I want to see the counter automatically increment using an interval timer
- 🐿️ As a user, I want to purchase items i can afford in the shop and increase the number of cookies every time the interval passes

Requirements:
- 🎯 Create state variables to store the current number of cookies and the cookies PerSecond value (useState)
- 🎯 Set up a timer to increment the number of cookies by the cookiesPerSecond value (useEffect). Be sure to handle clearing the timer using the useEffect return value.
- 🎯 Set up an array of objects containing the items available for purchase in the store, their cost and their increment increase value. Map through these and create buttons for each.
- 🎯 Create a function to handle the purchase of an item. This should check if the user has enough cookies to purchase the item, and if so, subtract the cost of the item from the number of cookies and add the increment value to the cookiesPerSecond value.

Stretch Goals:
- 🏹 Store the cookies and cookiesPerSecond values in localStorage so they persist between page refreshes
- 💭 You can load saved values from localStorage as the default value passed to the useState hook

const [cookies, setCookies] = useState(
  parseInt(localStorage.getItem("cookies")) || 0 // parseInt converts the string from local storage to a number
);
const [cookiesPerSecond, setCookiesPerSecond] = useState(
  parseInt(localStorage.getItem("cookiesPerSecond")) || 1
);


- 💭 The useEffect dependency array can be used to trigger a function to save the values to localStorage every time they change

// Store cookies and cookiesPerSecond to local storage
useEffect(() => {
  localStorage.setItem("cookies", cookies.toString()); // local storage supports strings so we convert it to a string before saving it
  localStorage.setItem("cookiesPerSecond", cookiesPerSecond.toString());
}, [cookies, cookiesPerSecond]);
