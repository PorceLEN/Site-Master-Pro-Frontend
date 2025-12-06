function Root({ children, ...props }: React.ComponentProps<"div">) {
  return (
    <header>
      <div className="global__header" {...props}>
        <div className="center__header">{children}</div>
      </div>
    </header>
  );
}

function Title({ children, ...props }: React.ComponentProps<"div">) {
  return (
    <div className="top__center__header" {...props}>
      <h1>{children}</h1>
    </div>
  );
}

function Description({ children, ...props }: React.ComponentProps<"div">) {
  return (
    <div className="bottom__center__header" {...props}>
      <p>{children}</p>
    </div>
  );
}

export const Header: typeof Root & {
  Title: typeof Title;
  Description: typeof Description;
} = ({ ...props }) => {
  return <Root {...props}></Root>;
};

Header.Title = Title;
Header.Description = Description;
