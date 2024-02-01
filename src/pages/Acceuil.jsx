import img1 from "../assets/cover2.55ab26d3.jpg"
import "./Acceuil.css"

function Acceuil() {
  return (
    <div>
      <h1 id="titleAcceuil"> Prochainement en librairie! </h1>
      <div className="div_acceuil">
        <div className="top">

          <img src={img1} alt="" />
          <p> Il me reste encore un œil </p>

        </div>
        <div className="bottom">

          <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur voluptatum adipisci nihil beatae, quia ea iure ad vero ipsa, eos temporibus culpa, aliquid placeat magnam. Vero sit atque eaque ex?</p>

        </div>
      </div>
    </div>
  )
}

export default Acceuil
