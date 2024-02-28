//name export just write export before name

//here we first import tilte bc title is being use here it has nothing to do with name exxport
//this how we import default export
import { useState } from "react";
import Title from "./Title";

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
            <li>Home</li>
            <li>About-Us</li>
            <li>Contact-Us</li>
            <li>Offer</li>
            <li>cart</li>
          </ul>
          {isLoggedIn ?  (
            <button onClick={() => setIsLoggedIn(false)}>logout</button>
          ) : (
            <button onClick={() => setIsLoggedIn(true)}>login</button>
          )}
        </div>
      </div>
    </>
  );
};
