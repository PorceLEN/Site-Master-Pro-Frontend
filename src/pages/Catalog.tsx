import Footer from "../components/ui-structures/Footer";
import { Header } from "../components/ui-structures/Header";

export default function Catalog() {
  return (
    <>
      <Header>
        <Header.Title>nos catalogues</Header.Title>
        <Header.Description>
          Parcourez nos catalogues et découvrez nos sélections de fournitures,
          outillage et matériel, adaptés à chaque situation rencontrée au
          quotidien dans votre travail. Vous y retrouverez également de
          nombreuses informations sur les normes en vigueur et des conseils
          d'utilisation.
        </Header.Description>
      </Header>

      <main>
        <div className="global__main">
            <article className="black">fzefz</article>
            <article className="black">fzefz</article>
            <article className="black">fzefz</article>
            <article className="black">fzefz</article>
            <article className="black">fzefz</article>
            <article className="black">fzefz</article>

            {/* A modifier pour pouvoir changer de catalogue dynamiquement */}
        </div>
      </main>

      <Footer/>
    </>
  )
}
