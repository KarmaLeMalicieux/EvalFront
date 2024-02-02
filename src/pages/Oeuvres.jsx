import "./style_oeuvre.css"
import { useContext } from "react"
import { MyContext } from "../context/MyContext"
import BookCard from "../Components/BookCard"

function Oeuvres() {
  const { books } = useContext(MyContext)
  return (
    <div>
      <h2>Ma vie, mon oeuvre</h2>
      <div id="flex">

        {books.map(book => (
          <BookCard img={book.img} description={book.description} id={book.id} key={book.id} />
        ))}

      </div>
    </div>
  )
}

export default Oeuvres
