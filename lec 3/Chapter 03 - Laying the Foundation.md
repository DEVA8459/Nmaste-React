## Namaste React Course by Akshay Saini

# Chapter 03 - Laying the Foundation


 ## Parcel Feature
 * Created A Server
 * HMR - Hot Module Replacement
 * File Watcher algorithm - C++ (Execute File when changes occur) * 
 * BUNDLING
 * MINIFY
 * Cleaning our Code (Example - Remove Console.log)
 * Dev and Production Build
 * Super Fast build algorithm
 * Image Optimization
 * Caching while development
 * Compression
 * Compatible with older version of browser
 * HTTPS on dev [Example - npx parcel index.html --https]
 * Port Number [Example - If port number using in localhost then it will change in port number in another project running on localhost]
 * Consistent Hashing Algorithm
 * Zero Config
 * Tree shaking-Removing unwanted code
 *
 *
 * Transitive Dependencies- dependecy in  anathor dependency

## Q: new way to ignite app ?

A:in package.json in script tag add before test
"start":"parcel index.html",
"build":"parcel build index.html",

so now we can ignite app through' npm run build' followe by , 'npm start'

## Q: doese parcel removes console.log

A: no it doese not remove console.log it needs baybel plugins to remove it

## Q: how to install plugin

A:go to npm website and search for command

for console it is "npm install babel-plugin-transform-remove-console --save-dev"

but note here that if we write --save.dev it put as dev dependency otherwise it is normal dependecny

then we needd to configure it create .babelrc

## Q. key and chiild

A: when we have two similar Element in html (child ) there we need to give separate ket to every child to reduce the work of react

```
const heading = React.createElement(
    "h1",
    {
      id: "title",
      key:"h1",
    },
    "heading"
  );
  const heading1 = React.createElement(
    "h2",
    {
      id: "title",
      key:"h2",
    },
    "heading2 is from react client "
  );
```

## Q: What is `JSX`?

A: jsx is not a html inside js,this is fancy way of writing html,its a html like syntax,faccebook devlopers built jsx
JSX stands for JavaScript XML(unofficially named).
JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement() and/or appendChild() methods.
JSX makes it easier to write and add HTML in React.
JSX converts HTML tags into react elements.

### Example 1 using JSX:

```
const myElement = <h1 id="title" key="h1">I Love JSX!</h1>;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);
```

### Example 2 Without JSX:

```
const myElement = React.createElement('h1', {}, 'I do not use JSX!');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);
```

## Q:Html v/s jsx

A: HTML is the standard markup language for web pages, while JSX is a syntax extension for JavaScript, often used with React to create dynamic and interactive user interfaces. With JSX, developers can write UI components in a more concise and expressive manner, directly within their JavaScript code.

So, HTML is like following a recipe to make a cake, and JSX is like having pre-made cake mix where you just need to add water and eggs. Both get you a yummy cake, but one is a bit more interactive and fun!

## JSX behind the scene

A: jsx => babel convert it into => React.CreateElement=> object => html DOM

## Q: Superpowers of `JSX`.

A: Using JSX, you can write markup inside Javascript, providing you with a superpower to write logic and markup of a component inside a single .jsx file. JSX is easy to maintain and debug.

### Example

```
function greeting(user) {
//JSX
  return <h1>{user}, How are you!!!</h1>;
}
```

## Q: Role of `type` attribute in script tag? What options can I use there?

A: The `type` attribute specifies the type of the script. The type attribute identifies the content between the `<script>` and `</script>` tags. It has a Default value which is “text/javascript”.

### `type` attribute can be of the following types:

- `text/javascript` : It is the basic standard of writing javascript code inside the `<script>` tag.
  ### Syntax
  ```
  <script type="text/javascript"></script>
  ```
- `text/ecmascript` : this value indicates that the script is following the `EcmaScript` standards.
- `module`: This value tells the browser that the script is a module that can import or export other files or modules inside it.
- `text/babel` : This value indicates that the script is a babel type and required bable to transpile it.
- `text/typescript`: As the name suggest the script is written in `TypeScript`.

## Q: `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in `JSX`.

A: The Difference is stated below:

- `{TitleComponent}`: This value describes the `TitleComponent` as a javascript expression or a variable.
  The `{}` can embed a javascript expression or a variable inside it.
- `<TitleComponent/>` : This value represents a Component that is basically returning Some JSX value. In simple terms `TitleComponent` a function that is returning a JSX value.
  A component is written inside the `{<  />}` expression.
- `<TitleComponent></TitleComponent>` : `<TitleComponent />` and `<TitleComponent></TitleComponent>` are equivalent only when `< TitleComponent />` has no child components. The opening and closing tags are created to include the child components.

### Example

```
<TitleComponent>
    <FirstChildComponent />
    <SecondChildComponent />
    <ThirdChildComponent />
</TitleComponent>

```

## notes

## 1 .component

=> two types of component

      1.functional - new way of writing code,

      2.classBased component- old way of writing code

    here we are going to use functional comp for most of the time

## 1.1 Functional component

=> functional component is nothing but a js-function
we can write in small (headercomponent) but for good practise we use camel cassing (HeaderComponent)

```
const HeaderComponent = () =>{
  return <h1>Nmaste React functional component </h1>;
};
```

if single line code then above code is good but if multiline code then wrap that in ()
example

```
const HeaderComponent = () =>{
  return(
    <div>
  <h1>Nmaste React functional component </h1>
  <h2>this is an h2 tag </h2>
  </div>
  );
};

we can also be skip writing return if we want to be extraa smart or a cool devloper
 but then we use ()and not {}
 ```
const HeaderComponent = () =>(
  return <h1>Nmaste React functional component </h1>;
);
 ```


//to render react element 

root.render(header)

//to render react component(function)

root.render(<HeaderComponent/>)
 
```
## Q: react Element vs react component
A: at the end of the day React element is a object and reacct component is a function

## =>using element inside component
```
//react element
const heading = (
  <h1 id="title" key="h1">
    Namaste React
  </h1>
);

//React component
const HeaderComponent = () => {
  return (
    <div>
      {heading}
      <h1>Nmaste React functional component </h1>
      <h2>this is an h2 tag </h2>
    </div>
  );
};

// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(<HeaderComponent />);
```
## =>composing component --- i.e using function component inside anathor func component aka nested component
```
//react element
const title = () => (
  <h1 id="title" key="h1 ">
    Namaste React
  </h1>
);

//React component
const HeaderComponent = () => {
  return (
    <div>
      < title/> //or we can use  {title()}
      {we can write any piece of js code inside curly braces}
      <h1>Nmaste React functional component </h1>
      <h2>this is an h2 tag </h2>
    </div>
  );
};

// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(<HeaderComponent />);
```
## => {we can write any js inside curly braces}
```
//React component
const HeaderComponent = () => {
  return (
    <div>
      {we can write any piece of js code inside curly braces}
      <h1>Nmaste React functional component </h1>
      <h2>this is an h2 tag </h2>
    </div>
  );
};

