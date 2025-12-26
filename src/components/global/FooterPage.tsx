import { Bottom } from "../ui-structures/Bottom";
import Picture from "../PictureMasterPro";
import Button from "./Button";

export default function Footer() {
  return (
    <Bottom>
      <Bottom.ContentLeft>
        Master Pro, la référence en fourniture industrielle, outillage
        professionnel et équipement pour l'industrie
        <Picture />
      </Bottom.ContentLeft>

      <Bottom.ContentCenter>
        <li>Enseigne et services</li>
        <li>Catalogues</li>
        <li>Devenir Adhérent</li>
        <li>Points de vente</li>
        <li>Conseils de pros</li>
      </Bottom.ContentCenter>

      <Bottom.ContentRight>
        <Button>Prendre contact</Button>
      </Bottom.ContentRight>
    </Bottom>
  );
}