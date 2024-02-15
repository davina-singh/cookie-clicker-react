// import child components
import CookieCounter from "./Components/CookieCounter"; // dispkays the current cookie count
import CookieIncrementButton from "./Components/CookieIncrementButton"; // button that manuallty increases the cookie count by 1
import ResetButton from "./Components/ResetButton"; // reset button
import Shop from "./Components/Shop"; // displays items that can be purchased to increases the cookie incrememt rate
// import list of items for the shop
import { ShopItems } from "./Components/ShopItems"; // list of items that can be purchased in the shop

import { useState, useEffect } from "react";
// define the App component for the game
export default function App() {
  // state to track the number of cookies
  const [count, setCount] = useState(0);
  // state to track the cookie incrememnt rate
  const [incrementRate, setIncrementRate] = useState(1);
  // effect hook that sets up an interval to automatically increases the cookie count
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((preCount) => preCount + incrementRate);
    }, 1000); // count is increased every second
    return () => clearInterval(interval); // cleanup interval on component unmount or incrementRate change
  }, [incrementRate]); // dependency array - effect reruns when incrementRate changes
  // function to handle purchasing items from the shop
  function purchaseItem(itemCost, itemIncrementValue) {
    if (count >= itemCost) {
      // check if user has enough cookies to purchase the item
      setCount(count - itemCost); // subtract the item cost from the current cookie count
      setIncrementRate(incrementRate + itemIncrementValue); // increase the incrememnt rate of the cookie counter
    } else {
      alert("You cannot afford this item!"); // or alert with this message if they do not have enough cookies to purchase the item
    }
  }
  // function to reset the state of the game
  function resetGame() {
    setCount(0); // reset cookie count to 0
    setIncrementRate(1); // reset cookie increment rate to 1
  }
  // render the App component's UI
  return (
    <div>
      {/* display the current cookie count */}
      <CookieCounter count={count} />
      {/* button to manually increase the cookie count by 1 when clicked  */}
      <CookieIncrementButton
        increment={() => setCount(count + incrementRate)}
      />
      {/* displays shop items to purchase and handles purchase */}
      <Shop items={ShopItems} purchaseItem={purchaseItem} />
      {/* button that resets the game  */}
      <ResetButton reset={resetGame} />
    </div>
  );
}
