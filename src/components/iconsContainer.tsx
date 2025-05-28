import TechIcon from "./common/techicon";

function IconContainer() {
  const techIcons = [
    <TechIcon text="HTML" className="devicon-html5-plain colored" />,
    <TechIcon text="CSS" className="devicon-css3-plain colored" />,
    <TechIcon text="Javascript" className="devicon-javascript-plain colored" />,
    <TechIcon text="Typescript" className="devicon-typescript-plain colored" />,
    <TechIcon text="React" className="devicon-react-original colored" />,
    <TechIcon text="MongoDB" className="devicon-mongodb-plain colored" />,
    <TechIcon
      text="NodeJS"
      className="devicon-nodejs-plain-wordmark colored"
    />,
  ];

  return (
    <div className="icons-container">
      <ul>
        {techIcons.map((icon) => {
          return <li>{icon}</li>;
        })}
      </ul>
      <ul>
        {techIcons.map((icon) => {
          return <li>{icon}</li>;
        })}
      </ul>
    </div>
  );
}

export default IconContainer;
