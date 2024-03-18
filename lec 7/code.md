## component inside component 
1. just avoide to make component inside component instead of just import and nest it ,like we did in applayout we nest header ,body and footer component inside the applayout
2. dont use useState inside a if conditions ,same goes for for loop
3. never create a use state outside the functional component
4. can we us emore than one use effect
    1. yes
5. 

## Q.shimmer 
1. wecan insatll shimmer package  or we can create ourselves 
2. what is shimmer -is nothing but a empty restaurent card 
3. use array.map to multiply it many times
4. use css mindfully

## Q.creating pages
1. using react router library
2. npm i react-router-dom
3. features that we are going to build today
    1. about us page 
    2. contact page
4. just write rafce in about.js it will write a component 
5. but we are not going to use it ,more you write yourself bette tyou get 
6. after creating about component , so now to intigrate about us we need to create router configuration 
    1. importing in app.js
        1.```
                import { createBrowserRouter ,RouterProvider } from "react-router-dom";
            ``` 
    2.  createBrowserRouter--   this cconfiguration decide what will happen if i load  ACERTAIN PATH IN approuter component
    ```
           const appRouter = createBrowserRouter([
                {
                    path:"/",
                    element: <AppLayout/>  
                },
                {
                    path:"/about",
                    element: <About/>  
                }
                ])

    ```
    2. create component calld approuter after applayout
    4. RouterProvider - provide router to the render
    ```  root.render(<RouterProvider router={appRouter  } />);

    ```
## error page
1. create Error component in Error.js
2. write errorElement after app layout
```
const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <AppLayout/>,
    errorElement : <Error/> 

  },])
```
## to show more information abour error
1. import { useRouteError } from "react-router-dom" in error.js
2. 
```
 import { useRouteError } from "react-router-dom"
const Error =() => {
    const err = useRouteError();
    //to see how to write for destructure
    console.log(err)
    return(
    <div>
        <h1>Oops!!</h1>
        <h1>something went wrong</h1>
        {/*destructuring the useRouteError */}
        <h2>{err.status +" : " + err.statusText}</h2>
    </div>    
    )
}
export default Error
```
## to make work navbar
1. here we are using link instead og a (anchor tag)
beacause a reload aal the pages but link can be use in single page aaplication 
2. Using React Router Link Component:
    1. React Router provides client-side routing for single-page applications (SPAs), enabling seamless navigation without full-page reloads.
    2. When building SPAs with React Router, using the Link component is preferable. It provides declarative navigation and ensures that the navigation **doesn't trigger a full page refresh**, enhancing user experience.
    3. Link components are also useful for internal navigation within the application, **allowing you to define routes and navigate between different components without reloading the entire page**.
           
```
import { Link } from "react-router-dom";


   <div className="nav-items">
          <ul>
           
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About-Us</li>
            </Link>
            <Link to="/contact">
              <li>Contact-Us</li>
            </Link>
            <Link to="/offer">
              <li>Offer</li>
            </Link>
            <Link to="/cart">
              <li>cart</li>
            </Link>
          </ul>
          {isLoggedIn ? (
            <button onClick={() => setIsLoggedIn(false)}>logout</button>
          ) : (
            <button onClick={() => setIsLoggedIn(true)}>login</button>
          )}
        </div>

```

## navigating a nav bar but making header footer constantly available for each nav link we create outlet and child component
```
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
    path:"/about",
    element: <About/> 
    },
      {
    path:"/about",
    element: <About/> 
    },]}
     ])
```
## dynamic routing -restaurent details
1. to hum chahate hai ki kisi restaurent pe hum click kare to hume uski puri info mill jaye naye page me

