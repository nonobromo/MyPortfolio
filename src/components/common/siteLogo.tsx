type HeaderLinkProps = {
  text: string;
  to: string;
  fontSize?: string | number;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  setActiveLink?: React.Dispatch<React.SetStateAction<string>>;
};

function SiteLogo({
  text,
  to,
  fontSize,
  setIsOpen,
  setActiveLink,
}: HeaderLinkProps) {
  return (
    <a
      onClick={() => {
        setIsOpen?.((perv) => !perv);
        setActiveLink?.("#home");
      }}
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

export default SiteLogo;
