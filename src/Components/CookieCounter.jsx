import "../App.css";

// CookieCounter function defined (and exported) - takes count props
export default function CookieCounter({ count }) {
  return (
    <div>
      {/* p tag that dispalys the number of cookies from the count prop(passed from the parent) */}
      <p id="numberOfCookies">
        Number Of Cookies: <p id="cookieCount">{count}</p>
      </p>
    </div>
  );
}
