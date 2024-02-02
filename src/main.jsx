import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Acceuil from "./pages/Acceuil";
import Oeuvres from "./pages/Oeuvres";
import ErrorPage from "./pages/ErrorPage";
import A_Propos from "./pages/A_Propos";
import { MyContextProvider } from "./context/MyContext";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "Acceuil",
        element: <Acceuil />,
      },
      {
        path: "Oeuvres",
        element: <Oeuvres />,
      },
      {
        path: "Apropos",
        element: <A_Propos />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MyContextProvider>
      <RouterProvider router={router} />
    </MyContextProvider>
  </React.StrictMode>
);
