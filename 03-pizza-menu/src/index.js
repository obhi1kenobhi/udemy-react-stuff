//React from scratch

import React from "react";
import ReactDOM from "react-dom/client";
import { pizzaData } from "./data.js";
import "./index.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

const Header = () => {
  //style={{ color: "red", fontSize: "48px", textTransform: "uppercase" }}
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
};

const Menu = () => {
  return (
    <main className="menu">
      <h2>Our menu</h2>

      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza pizzaObj={pizza} key={pizza.name} />
        ))}
      </ul>

      {/* <Pizza
        name={pizzaData[1].name}
        ingredients={pizzaData[1].ingredients}
        photoName="../pizzas/margherita.jpg"
        price={12}
      />
      <Pizza
        name={pizzaData[2].name}
        ingredients={pizzaData[2].ingredients}
        photoName="../pizzas/spinaci.jpg"
        price={10}
      /> */}
    </main>
  );
};

const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  return (
    <footer>
      We're currently {hour >= openHour && hour < closeHour ? "open" : "closed"}
      . The current time's {new Date().toLocaleTimeString()}
    </footer>
  );
};

function Pizza(props) {
  return (
    <li className="pizza">
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name}></img>
      <div className="">
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.price + 3}</span>
      </div>
    </li>
  );
}

//React v 18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
//strict mode - mode of React - get more info on it
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//React before v 18
//// React.render(<App />);
