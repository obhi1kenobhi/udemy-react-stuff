import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

// App is the main component rendered to the root element of the page
function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

const Avatar = () => {
  return <img className="avatar" src="../images/pp.png" alt="Anirban" />;
};

const Intro = () => {
  return (
    <div>
      <h1>Anirban Bhattacharya</h1>
      <p>Lorem ipsum pee pee poo poo</p>
    </div>
  );
};

const SkillList = () => {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="💪" color="orangered" />
      <Skill skill="HTML+CSS" emoji="💪" color="aquamarine" />
      <Skill skill="JavaScript" emoji="💪" color="yellow" />
      <Skill skill="Svelte" emoji="💪" color="lavender" />
    </div>
  );
};

const Skill = (props) => {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
};

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
