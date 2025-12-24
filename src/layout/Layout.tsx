import { Outlet } from "react-router";
import Footer from "../components/global/FooterPage";
import Navigation from "../components/Navigation";
import { Body } from "../components/ui-structures/bodyStruct";

export default function Layout() {
  return (
    <>
      <Body.Header>
        <Navigation />
      </Body.Header>
      <Body.Main>
        <Outlet />
      </Body.Main>
      <Body.Footer>
        <Footer />
      </Body.Footer>
    </>
  );
}
