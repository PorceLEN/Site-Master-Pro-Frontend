import { Outlet, useLocation } from "react-router";
import Footer from "../components/global/FooterPage";
import Navigation from "../components/Navigation";
import { Body } from "../components/ui-structures/bodyStruct";
import { Top } from "../components/ui-structures/Top";
import { isRoute, routes, topPageData } from "../typageComponents/topPageData";

export default function Layout() {
  const location = useLocation();

  const routeName = Object.entries(routes).find(
    ([_, value]) => value === location.pathname
  )?.[0];

  if (!isRoute(routeName)) {
    throw new Error("routeName has not a true type"); // à remplacer pour enlever le plantage
  }

  const topData = topPageData[routeName];

  return (
    <>
      <Body.Header>
        <Navigation />
      </Body.Header>
      <Body.Main>
        {topData ? (
          <Top>
            <Top.Title>{topData.title}</Top.Title>
            <Top.Description>{topData.description}</Top.Description>
          </Top>
        ) : null}
        <Outlet />
      </Body.Main>
      <Body.Footer>
        <Footer />
      </Body.Footer>
    </>
  );
}
