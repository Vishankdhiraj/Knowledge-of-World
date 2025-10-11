import "./italy.css";
const Italy = ()=>{
    const handleClick=()=>{
        alert("Welcome to Italy");
        const proceed = window.confirm("You are being Redirected to Knowledge Gallary")
        if(proceed){
            window.location.href="https://en.wikipedia.org/wiki/Italy";
        }
        else{
            alert("You cancelled the redirection");
        }
    };
    return(
        <>
        <div className="Italy">
            <img src="./image/italy.jpg" alt="Italy" />
            <b>ITALY</b>
            <a href="https://www.google.com/maps/place/Colosseum/@41.8902102,12.4900422,17z/data=!3m1!4b1!4m6!3m5!1s0x132f61aa3c5c6f7f:0x8ddf2ec4269d446!8m2!3d41.8902102!4d12.4922309!16zL20vMDM0bXo?entry=ttu" target="_blank" rel="noopener noreferrer" className="map">(📍View on Map)</a>
            <p>Italy is known for its Renaissance art and architecture, iconic landmarks like the Colosseum, its world-class cuisine (including pizza and pasta), and its fashion industry</p>
            <button className="button4" onClick={handleClick}>Explore More</button>
        </div>
        </>
    )
}
export default Italy;