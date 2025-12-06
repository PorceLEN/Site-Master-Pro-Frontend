import { Link } from "react-router";

export default function Button({
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <>
      <div className="button__global" {...props}>
        <Link to="/">
          <i className="fa-solid fa-arrow-right-from-bracket"></i>
          <p>{children}</p>
        </Link>
      </div>
    </>
  );
}
