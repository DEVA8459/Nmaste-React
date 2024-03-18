## Namaste React Course by Akshay Saini
# _Chapter 01 - Inception_

## Q: What is `Emmet`?
A: `Emmet` is the essential toolkit for web-developers. It allows you to `type shortcuts` that are then expanded into full pieces of code for writing `HTML and CSS`, based on an abbreviation structure most developers already use that expands into full-fledged HTML markup and CSS rules.


## Q: Difference between a `Library and Framework`?
A: A `library` is a collection of packages that perform specific operations whereas a `framework` contains the basic flow and architecture of an application. The major difference between them is the complexity. Libraries contain a number of methods that a developer can just call whenever they write code. React js is library and Angular is Framework.
The `framework` provides the flow of a software application and tells the developer what it needs and calls the code provided by the developer as required. If a `library` is used, the application calls the code from the library.


## Q: What is `CDN`? Why do we use it?
A: A `content delivery network (CDN)` refers to a geographically distributed group of servers that work together to provide fast delivery of Internet content.
The main use of a CDN is to deliver content through a network of servers in a secure and efficient way.


## Q: Why is `React known as React`?
A: `React` is named React because of its ability to `react to changes in data`.
React is called React because it was designed to be a declarative, efficient, and flexible JavaScript library for building user interfaces.
The name `React` was chosen because the library was designed to allow developers to "react" to changes in state and data within an application, and to update the user interface in a declarative and efficient manner.
`React` is a `JavaScript-based UI development library`. `Facebook` and an `open-source developer community` run it.


## Q: What is `crossorigin in script tag`?
A: The `crossorigin` attribute sets the mode of the request to an HTTP CORS Request. 
The purpose of crossorigin attribute is used to share the resources from one domain to another domain. Basically, it is used to handle the CORS request. It is used to handle the CORS request that checks whether it is safe to allow for sharing the resources from other domains.
### _Syntax_
```
<script crossorigin="anonymous|use-credentials">
```

## Q: What is difference between `React and ReactDOM`?
A: `React` is a JavaScript library for building User Interfaces whereas `ReactDOM` is also JavaScript library that allows `React to interact with the DOM`.
The react package contains `React.createElement()`, `React.Component`, `React.Children`, and other helpers related to **elements and component classes**. You can think of these as the **isomorphic or universal helpers** that you need to build components. The **react-dom** package contains `ReactDOM.render()`, and in react-dom/server we have server-side rendering support with `ReactDOMServer.renderToString()` and `ReactDOMServer.renderToStaticMarkup()`.


## Q: What is difference between `react.development.js` and `react.production.js` files via `CDN`?
A: `Development` is the stage of an application before it's made public while `production` is the term used for the same application when it's made `public`.
**`Development build` is several times (maybe 3-5x)`slower`** than the `production build`.


## Q: What is `async and defer`?
A: async and defer are attributes used in HTML to control the loading and execution of external scripts (JavaScript files) in web pages. They are particularly useful for improving page loading performance and managing script execution.

async: When you include the async attribute in a script tag, **it tells the browser to download the script file asynchronously while continuing to parse the HTML document**. Once the script is downloaded, it will be executed asynchronously, meaning it **won't block the parsing of the HTML document** or the rendering of the page. Multiple scripts with the async attribute can be downloaded concurrently, but their **execution order is not guaranteed**

```
<script async src="script.js"></script>

````
defer: The defer attribute, like async, allows the browser to download the script file asynchronously**. However, scripts with the defer attribute will be **executed only after the HTML document has been fully parsed but before the DOMContentLoaded event is fired**. 
This means that deferred scripts will execute in the order they appear in the document, ensuring that they don't block the rendering of the page but still maintain the order of execution.
```
<script defer src="script.js"></script>
```
In summary:

**Use async** if the script can be **executed independently** and **doesn't rely on the DOM structure or other scripts**.
**Use defer** if you want to **ensure that scripts are executed after the HTML document** is parsed **but before the DOMContentLoaded event, and if the order of execution matters.**

## IN SHORT 
async: Loads the script asynchronously and executes it as soon as it's downloaded. Order of execution isn't guaranteed.

defer: Loads the script asynchronously but waits until the HTML document is fully parsed before executing. Maintains the order of execution.


## TYPE MODULE 

Unless you're supporting ancient legacy systems, always add `type="module"` to all your script tags:
```sh
<script type="module" src="main.js"></script> and place the tag inside <head>
```
```sh
 <script defer nomodule> can be used as a legacy fallback.
```


As the name suggests, **it allows you to import `modules`, which makes it easier to organize your code.**
Enable `strict mode` by default. This makes your code run faster, and reports more runtime errors instead of silently ignoring them.
Execute your code only after the DOM has `initialized`, which makes DOM manipulation easier. Thanks to this, you won't need to listen to load/readystatechange/DOMContentLoaded events.
Prevent top level variables from implicitly polluting the global namespace.
Allow you to use top-level await in supported engines.
Load and parse your code `asynchronously`, which improves load performance.

