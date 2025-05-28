import { NavLink } from "react-router-dom";

type HeaderLinkProps = {
  text: string;
  to: string;
};

function HeaderLink({ text, to }: HeaderLinkProps) {
  return (
    <NavLink
      to={to}
      style={{
        textDecoration: "none",
        color: "#FFF",
        fontWeight: 600,
        fontSize: "28px",
      }}>
      {text}
    </NavLink>
  );
}

export default HeaderLink;
