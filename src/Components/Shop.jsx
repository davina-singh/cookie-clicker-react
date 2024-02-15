// shop function that takes props 'items' and 'purchaseItem'
export default function Shop({ items, purchaseItem }) {
  // returns JSX to render the component UI
  return (
    <div>
      {/* displays the heading shop at the top of the component */}
      <h2>Shop</h2>
      {/* iterates over yhe 'items' array passed as a prop */}
      {items.map((item) => (
        // each item is wrapped in a div with unique 'key'prop for React's list rendering optimisation
        <div key={item.id}>
          <span>
            {item.name} - Cost: {item.cost} Cookies{" "}
            {/* Displays the name and cost of each item */}
          </span>
          <button onClick={() => purchaseItem(item.cost, item.incrementValue)}>
            Purchase {/* Text displayed on the button */}
          </button>
          {/* Button to purchase an item. When clicked, it calls the 'purchaseItem' function, also passed as a prop, with the item's cost and incrementValue */}
        </div>
      ))}
    </div>
  );
}
