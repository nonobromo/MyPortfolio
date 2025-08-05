type HeaderLinkProps = {
  text: string;
  to: string;
  fontSize?: string | number;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  setActiveLink?: React.Dispatch<React.SetStateAction<string>>;
  activeLink?: string;
};

function HeaderLink({
  text,
  to,
  fontSize,
  setIsOpen,
  activeLink,
  setActiveLink,
}: HeaderLinkProps) {
  const isActive = to === activeLink;

  return (
    <a
      onClick={() => {
        setIsOpen?.((perv) => !perv);
        setActiveLink?.(to);
      }}
      href={to}
      style={{
        textDecoration: "none",
        color: isActive ? "#0672ff" : "#fff",
        fontWeight: 600,
        fontSize: fontSize ? fontSize : "28px",
        borderBottom: isActive ? "2px solid #0672FF" : "",
        transition: "all .5s ease",
      }}
    >
      {text}
    </a>
  );
}

export default HeaderLink;
