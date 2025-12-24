function Root({ children, ...props }: React.ComponentProps<"div">) {
  return (
      <div className="global__top" {...props}>
        <div className="center__top">{children}</div>
      </div>
  );
}

function Title({ children, ...props }: React.ComponentProps<"div">) {
  return (
    <div className="top__center__top" {...props}>
      <h1>{children}</h1>
    </div>
  );
}

function Description({ children, ...props }: React.ComponentProps<"div">) {
  return (
    <div className="bottom__center__top" {...props}>
      <p>{children}</p>
    </div>
  );
}

export const Top: typeof Root & {
  Title: typeof Title;
  Description: typeof Description;
} = ({ ...props }) => {
  return <Root {...props}></Root>;
};

Top.Title = Title;
Top.Description = Description;
