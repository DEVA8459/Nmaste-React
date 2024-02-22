import React from "react";
import ReactDOM from "react-dom/client";
//do planning before writting code
/**
 * planning
 * header
 *    -logo
 *    -nav Item(right Side)
 *    -cart
 * Body
 *    -Search bar
 *    -Restaurent List
 *    -   restaurent card
 *            -image
 *            -name
 *            -Rating
 *            -Cusines
 *     -footer
 *        -links
 *        -copyright
 *
 *  *
 */

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
