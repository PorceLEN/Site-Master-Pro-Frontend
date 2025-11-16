import "./App.css";
import Navigation from "./components/navigation";
import Header from "./components/html_struct/header";
import Main from "./components/html_struct/main";
import Footer from "./components/html_struct/footer";

export default function App() {
  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <Main>
        <></>
      </Main>
      <Footer>
        <></>
      </Footer>
    </>
  );
}
