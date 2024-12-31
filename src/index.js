import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   // <React.StrictMode>
//     {/* <BrowserRouter> */}
//     {/* <Routes> */}
//     // <Route path="/" element={<App />} />

//     {/* </Routes>
//     </BrowserRouter> */}
//   // </React.StrictMode>
// );
root.render(
  <Auth0Provider
    domain="dev-8n3s5ej84rxv51dg.us.auth0.com"
    clientId="42D7eDlnk0yKhIiOSH6NeFdspJisHNJX"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <App />
  </Auth0Provider>
);
