function Root({ children, ...props }: React.ComponentProps<"div">) {
  return (
    <div className="global__bottom" {...props}>
      <div className="center__bottom">{children}</div>
    </div>
  );
}

function ContentLeft({ children, ...props }: React.ComponentProps<"div">) {
  return (
    <div className="left__bottom" {...props}>
      <div className="comment__bottom">
        {children}
      </div>
    </div>
  );
}

function ContentCenter({ children, ...props }: React.ComponentProps<"div">) {
  return (
    <div className="center__bottom" {...props}>
      <ul className="list__bottom">{children}</ul>
    </div>
  );
}

function ContentRight({ children, ...props }: React.ComponentProps<"div">) {
  return (
    <div className="right__bottom" {...props}>
      {children}
    </div>
  );
}

export const Bottom: typeof Root & {
  ContentLeft: typeof ContentLeft;
  ContentCenter: typeof ContentCenter;
  ContentRight: typeof ContentRight;
} = ({ ...props }) => {
  return <Root {...props}></Root>;
};

Bottom.ContentLeft = ContentLeft;
Bottom.ContentCenter = ContentCenter;
Bottom.ContentRight = ContentRight;
