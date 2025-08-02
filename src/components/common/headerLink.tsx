type HeaderLinkProps = {
  text: string;
  to: string;
  fontSize?: string | number;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  setActiveLink?: React.Dispatch<React.SetStateAction<string>>;
  activeLink?: string;
};

function HeaderLink({ text, to, fontSize, setIsOpen }: HeaderLinkProps) {
  return (
    <a
      onClick={() => setIsOpen?.((perv) => !perv)}
      href={to}
      style={{
        textDecoration: "none",
        color: "#FFF",
        fontWeight: 600,
        fontSize: fontSize ? fontSize : "28px",
      }}
    >
      {text}
    </a>
  );
}

export default HeaderLink;
