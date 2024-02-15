import "../App.css";
// shop function that takes props 'items' and 'purchaseItem'
export default function Shop({ items, purchaseItem }) {
  // returns JSX to render the component UI
  return (
    <div>
      {/* displays the heading shop at the top of the component */}
      <h2 id="shopHeading">Shop</h2>
      {/* iterates over yhe 'items' array passed as a prop */}
      {items.map((item) => (
        // each item is wrapped in a div with unique 'key'prop for React's list rendering optimisation
        <div key={item.id}>
          <span id="shopItems">
            {item.name} - Cost: {item.cost} Cookies - Increment Rate:
            {item.incrementValue}
            {/* Displays the name and cost of each item */}
          </span>
          <button
            id="purchaseButton"
            onClick={() => purchaseItem(item.cost, item.incrementValue)}
          >
            Purchase {/* Text displayed on the button */}
          </button>
          {/* Button to purchase an item. When clicked, it calls the 'purchaseItem' function, also passed as a prop, with the item's cost and incrementValue */}
        </div>
      ))}
    </div>
  );
}
