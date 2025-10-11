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
        <a href="https://www.google.com/maps/place/Gateway+Of+India+Mumbai/@18.9219841,72.8346543,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7d1c73a0d5cad:0xc70a25a7209c733c!8m2!3d18.9219841!4d72.8346543!16zL20vMDJoN3Iy?entry=ttu&g_ep=EgoyMDI1MDkxNi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="map1">(📍View on Map)</a>
        <p>
          The image in the block is known as "Gateway of India" <br /> Which is
          located in Mumbai, India.
        </p>
        <button className="button1" onClick={onhandleClick}>
          Explore More
        </button>
      </div>
      )
     }