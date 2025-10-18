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
      <img src="/image/france.jpeg" alt="France" />
      <b>FRANCE</b>
      <p>
        France is a country in Western Europe known for its history, culture, and monuments.
      </p>
      <a href="https://https://www.google.com/maps/place/Gateway+Of+India+Mumbai/@18.9219892,72.8320794,17z/data=!3m1!4b1!4m16!1m9!4m8!1m0!1m6!1m2!1s0x3be7d1c73a0d5cad:0xc70a25a7209c733c!2sApollo+Bandar,+Colaba,+Mumbai,+Maharashtra!2m2!1d72.8346543!2d18.9219841!3m5!1s0x3be7d1c73a0d5cad:0xc70a25a7209c733c!8m2!3d18.9219841!4d72.8346543!16zL20vMDJoN3Iy?entry=ttu&g_ep=EgoyMDI1MTAxNC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="map2">(📍View on Map)</a>
      <button className="button2" onClick={onhandleClick}>
        Explore More
      </button>
    </div>
    </>
  );
}
