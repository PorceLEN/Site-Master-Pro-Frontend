import { BrowserRouter, Route, Routes } from "react-router";

import "./App.css";
import Navigation from "./components/Navigation";
import Greeting from "./pages/Greeting";
import Contact from "./pages/Contact";
import Catalog from "./pages/Catalog";
import Promos from "./pages/Promos";

export default function App() {
  return (
    <BrowserRouter>
      <>
        <Navigation />
        <Routes>
          <Route path="/" element={<Greeting />}></Route>
          <Route path="/nous-contacter" element={<Contact />}></Route>
          <Route path="/nos-catalogues" element={<Catalog />}></Route>
          <Route path="/les-promos-du-moment" element={<Promos />}></Route>
        </Routes>
      </>
    </BrowserRouter>
  )
}
