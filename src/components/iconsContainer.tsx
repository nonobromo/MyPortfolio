import TechIcon from "./common/techicon";

function IconContainer() {
  const techIcons = [
    <TechIcon
      text="HTML"
      className="devicon-html5-plain colored"
      flexDirection="column"
    />,
    <TechIcon
      text="CSS"
      className="devicon-css3-plain colored"
      flexDirection="column"
    />,
    <TechIcon
      text="Javascript"
      className="devicon-javascript-plain colored"
      flexDirection="column"
    />,
    <TechIcon
      text="Typescript"
      className="devicon-typescript-plain colored"
      flexDirection="column"
    />,
    <TechIcon
      text="React"
      className="devicon-react-original colored"
      flexDirection="column"
    />,
    <TechIcon
      text="MongoDB"
      className="devicon-mongodb-plain colored"
      flexDirection="column"
    />,
    <TechIcon
      text="NodeJS"
      className="devicon-nodejs-plain-wordmark colored"
      flexDirection="column"
    />,
  ];

  return (
    <div className="icons-container">
      <ul>
        {techIcons.map((icon, i) => (
          <li key={`first-${i}`}>{icon}</li>
        ))}
      </ul>
      <ul>
        {techIcons.map((icon, i) => (
          <li key={`second-${i}`}>{icon}</li>
        ))}
      </ul>
    </div>
  );
}

export default IconContainer;
