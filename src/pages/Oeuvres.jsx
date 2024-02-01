import img1 from "../assets/cover1.9f367c22.jpg"
import img2 from "../assets/cover2.55ab26d3.jpg"
import img0 from "../assets/cover0.240e1126.jpg"
import "./style_oeuvre.css"

function Oeuvres() {
  return (
    <div>
      <h2>Ma vie, mon oeuvre</h2>
      <div id="flex">

        <div className="oeuvres">
          <img src={img0} alt="" />
          <p> Après coup, Jean rigole </p>
        </div>

        <div className="oeuvres">
          <img src={img1} alt="" />
          <p> Des vacances aux Bahamas </p>
        </div>


        <div className="oeuvres">
          <img src={img2} alt="" />
          <p> Il me reste encore un œi </p>
        </div>


      </div>
    </div>
  )
}

export default Oeuvres
