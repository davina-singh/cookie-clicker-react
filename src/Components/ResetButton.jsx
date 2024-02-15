import "../App.css";
// ResetButton function defined and exported - takes 'reset' prop which is a function
export default function ResetButton({ reset }) {
  // (component returns JSX to render its UI)
  return (
    // A div wrapper for the button. This can be useful for styling or grouping elements together.
    <div>
      {/* Button element - on click, the event listener is set to the 'reset' function passed in through the component's props so that whebn the button is clicked, the 'reset' function will be executed. */}
      <button id="resetButton" onClick={reset}>
        Reset
      </button>
    </div>
  );
}
