function Header({ children }: React.ComponentProps<"header">) {
  return <header>{children}</header>;
}

function Main({ children }: React.ComponentProps<"main">) {
  return <main>{children}</main>;
}

function Footer({ children }: React.ComponentProps<"footer">) {
  return <footer>{children}</footer>;
}

export const Body: typeof Header & {
  Header: typeof Header;
  Main: typeof Main;
  Footer: typeof Footer;
} = ({ children }) => {
  return <Header>{children}</Header>;
};

Body.Header = Header;
Body.Main = Main;
Body.Footer = Footer;
