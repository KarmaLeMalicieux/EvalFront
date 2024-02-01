import { Link, Outlet } from "react-router-dom";
import "./App.css";


function main() {

  return (
    <main>
      <nav className="nav flex-column" id="sidebar">

        <h1 id="title"> Jean Neymar</h1>

        <div>
          <Link className="nav-link  link" to={"/Acceuil"}> Acceuil </Link>
          <Link className="nav-link  link" to={"/Oeuvres"}> Oeuvres </Link>
          <Link className="nav-link  link" to={"/Apropos"}> A propos </Link>
        </div>


      </nav>

      <div className="main-content">
        <Outlet />
      </div>
    </main>
  );
}

export default main;
