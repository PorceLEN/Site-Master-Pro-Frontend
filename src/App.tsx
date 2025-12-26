import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Greeting from "./pages/Greeting";
import Contact from "./pages/Contact";
import Catalog from "./pages/Catalog";
import Promos from "./pages/Promos";
import Layout from "./layout/Layout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Greeting />}></Route>
          <Route path="/contactez-nous" element={<Contact />}></Route>
          <Route path="/nos-catalogues" element={<Catalog />}></Route>
          <Route path="/les-promos-du-moment" element={<Promos />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
