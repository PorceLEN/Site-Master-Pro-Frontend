import { Link } from "react-router";

export default function Button({
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <>
      <div className="global__button" {...props}>
        <Link to={"/"}>
          <i className="fa-solid fa-arrow-right-from-bracket"></i>
          {children}
        </Link>
      </div>
    </>
  );
}
