import React from "react";
import ReactDOM from "react-dom/client";
//name import - when we want export more than one component
import {HeaderComponent} from "./component/header";
//how to default import 
//import HeaderComponent from "./component/header";
import Body from "./component/Body";
import Footer from "./component/footer";

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


