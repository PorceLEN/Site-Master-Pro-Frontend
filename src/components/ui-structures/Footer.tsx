// function Root({children, ...props}: React.ComponentProps<"div">) {
//     return (
//         <footer>

//         </footer>
//     )
// }

import logo from "../../assets/master.png";
import Button from "../global/Button";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="global__footer">
          <div className="center__footer">
            <div className="">
              <div className="comment__footer">
                <p>
                  Master Pro, la référence en fourniture industrielle, outillage
                  professionnel et équipement pour l'industrie
                </p>

                <div className="logo logo__footer">
                  <img src={logo} alt="MASTER PRO" />
                </div>
              </div>
            </div>
            <div className="list__footer">
              <ul>
                <li>Enseigne et services</li>
                <li>Catalogues</li>
                <li>Devenir Adhérent</li>
                <li>Points de vente</li>
                <li>Conseils de pros</li>
              </ul>
            </div>
            <div className="contact__footer">
              <Button>Prendre contact</Button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
