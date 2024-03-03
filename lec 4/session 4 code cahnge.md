## initial code 
```
import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="logo"
      src="https://yt3.ggpht.com/ytc/AKedOLSpK3T_2RxkMYb-pk9oENQB0NvYpeOdXRgQe8i5=s800-c-k-c0x00ffffff-no-rj"
    ></img>
  </a>
);

const HeaderComponent = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About-Us</li>
          <li>Contact-Us</li>
          <li>Offer</li>
          <li>cart</li>
        </ul>
      </div>
    </div>
  );
};

//body
const RestaurentCard = () => {
  return (
  <div className="card">
    <img alt="img" src="https://b.zmtcdn.com/data/pictures/chains/4/19564214/d74c31f2bde5530851209ad7790e2137_featured_v2.jpg?output-format=webp"></img>
    <h1>Burger king</h1>
    <h2>Burgers ,American</h2>
    <h3>4.2 stars</h3>
  </div>
  );
};
const Body = () => {
  return (
    <div>
    <RestaurentCard/>
    </div>
  );
};
//footer
const Footer = () => {
  return <h4>footer</h4>;
};

//React.Fragmnet
const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      <Body />
      <Footer />
    </>
  );
};
// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(<AppLayout />);
//khana_Mcangwale

```
## but the value is not allways going to be constant ,data is allwyas dynamic 
```
//Replace restaurent card with this 

//data generally dynamic 

 const burgerKIng={
  name:"Burger King",
  image :"https://b.zmtcdn.com/data/pictures/chains/4/19564214/d74c31f2bde5530851209ad7790e2137_featured_v2.jpg?output-format=webp",
  cusines:["Burger", "American"],
  rating :"4.2"

 }
//using abovr data 
const RestaurentCard = () => {
  return (
  <div className="card">
    <img alt="img" src={burgerKIng.image}></img>
    <h1>{burgerKIng.name}</h1>
    <h2>{burgerKIng.cusines.join(", ")}</h2> {/* to join th ehtml array otherwaise comma is not shown */}  
    <h3>{burgerKIng.rating} satrs</h3>
  </div>
  );
};
```
## but in real life data is not like this ,there are so many restaurent ,lets get real data

```
website > network >fetch/XHR >name >open v5 wala in new tab>seaarch for require data

//using json data after copying
//here acc to our json we use info instead of data -akshay uses data
//we can write any thing instead of props 

const RestaurentCard = (props) => {
  return (
  <div className="card">
    <img alt="img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+props.restaurent.info?.cloudinaryImageId}></img>
    <h1>{props.restaurent.info?.name}</h1>
    <h2>{props.restaurent.info?.cuisines.join(", ")}</h2> {/* to join the html array otherwaise comma is not shown */}  
    <h3>{props.restaurent.info?.avgRating} stars</h3>
    <h3>{props.restaurent.info?.locality}</h3>
    <h3>{props.restaurent.info?.areaName}</h3>
    <h3>{props.restaurent.info?.costForTwo}</h3>
    <h3>{props.restaurent.info?.isOpen ? "Open" : "Closed"} </h3>
  </div>
  );
};

const Body = () => {
  return (
    <div className="RL">
    <RestaurentCard restaurent={ResaturentList[0]}/>
    <RestaurentCard restaurent={ResaturentList[1]}/>
    <RestaurentCard restaurent={ResaturentList[2]}/>
    <RestaurentCard restaurent={ResaturentList[3]}/>
    <RestaurentCard restaurent={ResaturentList[4]}/>
    <RestaurentCard restaurent={ResaturentList[5]}/>
    
    </div>
  );
};
//In this line, the RestaurentCard component is being used, and the restaurent prop is assigned the value of ResaturentList[0].
we can take any string to assign value to ResaturentList[0]
This means that the first item in the ResaturentList array is passed as a prop named restaurent to the RestaurentCard component.
```
## props
A:In React, "props" is short for "properties". It's a special keyword in React which stands for properties and is used to pass data from one component to another. Props are read-only and are immutable.

In the context of the provided code, props is an object that contains properties passed to a React component. These properties can be accessed within the component using dot notation, like props.propertyName.
so in above code resaturent is used as prop

## to simply-fy the code we can destructure 
```
const RestaurentCard = ({restaurent}) => {
  const {name, cloudinaryImageId,cuisines,avgRating, locality ,areaName,costForTwo,isOpen}=restaurent.info;

  return (
  <div className="card">
    <img alt="img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}></img>
    <h1>{name}</h1>
    <h2>{cuisines.join(", ")}</h2> {/* to join the html array otherwaise comma is not shown */}  
    <h3>{avgRating} stars</h3>
    <h3>{locality}</h3>
    <h3>{areaName}</h3>
    <h3>{costForTwo}</h3>
    <h3>{isOpen ? "Open" : "Closed"} </h3>
  </div>
  );
};
```

## to make it moore readable,an ddestructure on the fly

```
const RestaurentCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  avgRating,
  locality,
  areaName,
  costForTwo,
  isOpen,
}) => {
  return (
    <div className="card">
      <img
        alt="img"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      ></img>
      <h1>{name}</h1>
      <h2>{cuisines.join(", ")}</h2>{" "}
      {/* to join the html array otherwaise comma is not shown */}
      <h3>{avgRating} stars</h3>
      <h3>{locality}</h3>
      <h3>{areaName}</h3>
      <h3>{costForTwo}</h3>
      <h3>{isOpen ? "Open" : "Closed"} </h3>
    </div>
  );
};

//to make body for all avilable restaurent 
const Body = () => {
  return (
<div className="RL">
        {ResaturentList.map((restaurant) => {
          return (
            < RestaurentCard {...restaurant.info} key={restaurant.info.id} />
          );
        })}
      </div>);
};

```