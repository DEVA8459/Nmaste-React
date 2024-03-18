//name export just write export before name

//here we first import tilte bc title is being use here it has nothing to do with name exxport
//this how we import default export
import { useState } from "react";
import Title from "./Title";
import { About } from "../2.pages/About";
import { Link } from "react-router-dom";

const loggedInUser = () => {
  //
  return true;
};

//exporting name export
export const HeaderComponent = () => {
  const titles = [
    "Nourishment",
    "Cuisine",
    " Diet",
    "Fare",
    "Grub",
    "Nutrition",
    "Rations",
    "Refreshment",
  ];
  const [index, setIndex] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <>
      <div className="header">
        <Title />
        <h1>
          {"Foooood is "}
          {titles[index]}
        </h1>
        <button
          onPointerEnter={() => {
            // Increment the index (cycle through titles)
            setIndex((prevIndex) => (prevIndex + 1) % titles.length);
          }}
        >
          hover to see magic what is food
        </button>
        <div className="nav-items">
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About-Us</li>
            </Link>
            <Link to="/ContactUs">
              <li>Contact-Us</li>
            </Link>
            <Link to="/Offer">
              <li>Offer</li>
            </Link>
            <Link to="/Cart">
              <li>cart</li>
            </Link>
          </ul>
        </div>
        <div>
          {isLoggedIn ? (
            <button onClick={() => setIsLoggedIn(false)}>logout</button>
          ) : (
            <button onClick={() => setIsLoggedIn(true)}>login</button>
          )}
        </div>
      </div>
    </>
  );
};
