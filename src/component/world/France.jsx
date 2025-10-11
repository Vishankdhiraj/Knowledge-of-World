import "./france.css";

export default function France() {
  const onhandleClick = () => {
    alert("Redirected to Wikipedia");
    const proceed = window.confirm("You are being redirected to Wikipedia");
    if (proceed) {
      window.location.href = "https://en.wikipedia.org/wiki/France";
    } else {
      alert("You cancelled the redirection");
    }
  };

  return (
    <>

    <div className="pic2">
      <img src="./image/france.jpeg" alt="France" />
      <b>FRANCE</b>
      <p>
        France is a country in Western Europe known for its history, culture, and monuments.
      </p>
      <a href="https://www.google.com/maps/place/Eiffel+Tower/@48.8583701,2.2922926,17z/data=!3m1!4b1!4m6!3m5!1s0x47e66fdeb0f7b9b7:0x423d9521f3e8e6!8m2!3d48.8583701!4d2.2944813!16zL20vMDM0eDQi?entry=ttu&g_ep=EgoyMDI1MDkxNi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="map2">(📍View on Map)</a>
      <button className="button2" onClick={onhandleClick}>
        Explore More
      </button>
    </div>
    </>
  );
}
