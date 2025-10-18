import "./india.css";

export default function India() {
  const onhandleClick = () => {
    alert("Redirected to Wikipedia");
    const proceed = window.confirm("You are being redirected to Wikipedia");
    if (proceed) {
      window.location.href = "https://en.wikipedia.org/wiki/Gateway_of_India";
    } else {
      alert("You cancelled the redirection");
    }
  };

  return (
    <div className="pic1">
      <img src="/image/india.jpeg" alt="main" />
      <b>INDIA</b>

      {/* ✅ Fixed anchor tag */}
      <a
        href="https://www.google.com/maps?q=Gateway+of+India,+Mumbai,+Maharashtra,+India"
        target="_blank"
        rel="noopener noreferrer"
        className="map1"
      >
        (📍View on Map)
      </a>

      <p>
        The image in the block is known as "Gateway of India" <br />
        Which is located in Mumbai, India.
      </p>

      <button className="button1" onClick={onhandleClick}>
        Explore More
      </button>
    </div>
  );
}
