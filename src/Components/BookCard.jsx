import { Link } from "react-router-dom"
import img1 from "../assets/cover1.9f367c22.jpg"
import img2 from "../assets/cover2.55ab26d3.jpg"
import img0 from "../assets/cover0.240e1126.jpg"
import "../pages/style_oeuvre.css"

function BookCard({ img, description, id }) {
  let image = 0
  if (img == 0) image = img0
  if (img == 1) image = img1
  if (img == 2) image = img2

  return (
    <div className="oeuvres">

      <Link className="nav-link  link" to={`/book/${id}`}>

        <img src={image} alt="" />
        <p> {description} </p>

      </Link>


    </div>
  )
}

export default BookCard
