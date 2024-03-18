import React from "react";
import ReactDOM from "react-dom/client";
//name import - when we want export more than one component
import {HeaderComponent} from "./component/1.structure/header";
//how to default import 
//import HeaderComponent from "./component/header";
import Body from "./component/1.structure/Body";
import Footer from "./component/1.structure/footer";
import { About } from "./component/2.pages/About";
import ContactUs from "./component/2.pages/Contact-us"
import Offer from "./component/2.pages/offer";
import Cart from "./component/2.pages/cart"
import Error from "./component/4.other/error";
import RestaurantDetails from "./component/3.Menu/1.RestDetail";
import { createBrowserRouter ,Outlet,RouterProvider} from "react-router-dom";



//React.Fragmnet
const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      <Outlet/>
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <AppLayout/>,
    errorElement : <Error/>, 
    children:[
      {
    path:"/",
    element: <Body/> 
    },
      {
    path:"/about",
    element: <About/> 
    },
      {
    path:"/ContactUs",
    element: <ContactUs/> 
    },
      {
    path:"/Cart",
    element: <Cart/> 
    },
      {
    path:"/Offer",
    element: <Offer/> 
    },
      {
    path:"/restaurent/:resId",
    element: <RestaurantDetails/> 
    },
  ]}
  ])
// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(<RouterProvider router={appRouter} />);