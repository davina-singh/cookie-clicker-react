// CookieIncrementButton function defined (and exported) and takes 'increment' prop which is a function (and it has been destructured)
export default function CookieIncrementButton({ increment }) {
  return (
    <div className="cookie-button">
      {/* the cookie button has an event listener on it such that when the cookie is clicked, it calls the increment function which has been passed as props */}
      <button onClick={increment}>🍪</button>
    </div>
  );
}
