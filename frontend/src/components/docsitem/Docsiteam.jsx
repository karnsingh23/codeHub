 const HTML = [
    {
        id: 1,
        Topic: "HTML Basics",
        description: "HTML (HyperText Markup Language) is the standard language used to create and design web pages. It defines the structure of web content by using elements such as headings, paragraphs, links, images, and other media.",
        codeExample: `<html>
  <head>
    <title>My First HTML Page</title>
  </head>
  <body>
    <h1>Welcome to HTML!</h1>
    <p>This is a simple HTML document.</p>
  </body>
</html>`
    },
    {
        id: 2,
        Topic: "HTML Tags",
        description: "HTML uses tags to mark the beginning and end of elements. These tags usually come in pairs: an opening tag and a closing tag. Common tags include <h1> to <h6>, <p>, <a>, <img>, etc.",
        codeExample: `<h1>Heading Level 1</h1>
<p>This is a paragraph.</p>
<a href="https://example.com">Click here to visit Example</a>`
    },
    {
        id: 3,
        Topic: "HTML Forms",
        description: "Forms in HTML allow users to submit data to a server. Forms are built using the <form> tag, with input fields, buttons, and other interactive elements inside.",
        codeExample: `<form action="/submit" method="POST">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required />
  <button type="submit">Submit</button>
</form>`
    },
    {
        id: 4,
        Topic: "HTML Tables",
        description: "HTML tables are used to display data in rows and columns. Tables are created using the <table> tag, with rows (<tr>) and data cells (<td>).",
        codeExample: `<table>
  <tr>
    <th>Header 1</th>
    <th>Header 2</th>
  </tr>
  <tr>
    <td>Row 1, Col 1</td>
    <td>Row 1, Col 2</td>
  </tr>
</table>`
    },
    {
        id: 5,
        Topic: "HTML Lists",
        description: "HTML supports two main types of lists: ordered lists (<ol>) and unordered lists (<ul>). Each item in the list is defined by the <li> tag.",
        codeExample: `<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>`
    },
    {
        id: 6,
        Topic: "HTML Attributes",
        description: "HTML attributes provide additional information about HTML elements. Common attributes include 'class', 'id', 'href', 'src', etc.",
        codeExample: `<a href="https://example.com" target="_blank">Click me</a>`
    },
    {
        id: 7,
        Topic: "HTML Audio and Video",
        description: "HTML5 introduced <audio> and <video> elements to embed multimedia content directly in the page.",
        codeExample: `<video controls>
  <source src="movie.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>`
    },
    {
        id: 8,
        Topic: "HTML Forms (Input Types)",
        description: "The <input> element can be used for different types of inputs: text, password, email, checkbox, radio, etc.",
        codeExample: `<input type="text" placeholder="Enter your name">
<input type="password" placeholder="Enter your password">`
    },
    {
        id: 9,
        Topic: "HTML Links",
        description: "The <a> tag is used to create hyperlinks. Links can be used to navigate between pages or resources.",
        codeExample: `<a href="https://www.example.com">Go to Example</a>`
    },
    {
        id: 10,
        Topic: "HTML Comments",
        description: "HTML comments are used to annotate code for developers and are not displayed in the browser.",
        codeExample: `<!-- This is a comment -->
<p>This will be displayed</p>`
    }
];


 const CSS = [
    {
        id: 1,
        Topic: "CSS Basics",
        description: "CSS (Cascading Style Sheets) controls the layout and appearance of HTML elements. It defines properties like colors, fonts, spacing, and positioning.",
        codeExample: `body {
  background-color: #f0f0f0;
  font-family: Arial, sans-serif;
}
h1 {
  color: #3498db;
}`
    },
    {
        id: 2,
        Topic: "CSS Selectors",
        description: "CSS selectors target specific elements to apply styles. The most common selectors are element, class, and ID selectors.",
        codeExample: `/* Element Selector */
p {
  color: green;
}

/* Class Selector */
.button {
  background-color: red;
}

/* ID Selector */
#header {
  font-size: 24px;
}`
    },
    {
        id: 3,
        Topic: "CSS Box Model",
        description: "The CSS box model describes how elements are displayed. It includes margins, borders, padding, and the content area.",
        codeExample: `.box {
  width: 200px;
  height: 150px;
  padding: 20px;
  border: 2px solid black;
  margin: 15px;
}`
    },
    {
        id: 4,
        Topic: "CSS Flexbox",
        description: "Flexbox is a layout model that allows you to design complex layouts using flexible container items.",
        codeExample: `.container {
  display: flex;
  justify-content: center;
}
.item {
  margin: 10px;
  padding: 20px;
}`
    },
    {
        id: 5,
        Topic: "CSS Grid",
        description: "CSS Grid Layout is a two-dimensional layout system for the web, allowing you to design web pages using rows and columns.",
        codeExample: `.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
.grid-item {
  padding: 10px;
}`
    },
    {
        id: 6,
        Topic: "CSS Transitions",
        description: "CSS transitions allow you to change property values smoothly over a given duration.",
        codeExample: `.button {
  transition: background-color 0.3s ease;
}
.button:hover {
  background-color: #3498db;
}`
    },
    {
        id: 7,
        Topic: "CSS Animations",
        description: "CSS animations make elements move, change colors, or change other properties over time.",
        codeExample: `@keyframes move {
  0% { transform: translateX(0); }
  100% { transform: translateX(100px); }
}
.animated {
  animation: move 2s infinite;
}`
    },
    {
        id: 8,
        Topic: "CSS Positioning",
        description: "CSS positioning allows you to place elements in specific locations on the screen using static, relative, absolute, and fixed positions.",
        codeExample: `.absolute {
  position: absolute;
  top: 10px;
  left: 20px;
}`
    },
    {
        id: 9,
        Topic: "CSS Media Queries",
        description: "Media queries allow you to apply styles based on the device's characteristics like screen width, resolution, etc.",
        codeExample: `@media (max-width: 600px) {
  .container {
    background-color: lightblue;
  }
}`
    },
    {
        id: 10,
        Topic: "CSS Pseudo-Classes",
        description: "Pseudo-classes allow you to apply styles to elements in specific states, like :hover, :focus, and :active.",
        codeExample: `a:hover {
  color: red;
}
input:focus {
  border-color: green;
}`
    }
];

const JS = [
    {
        id: 1,
        Topic: "JavaScript Basics",
        description: "JavaScript is a dynamic programming language that adds interactivity to web pages. It allows for manipulating HTML and CSS and interacting with web APIs.",
        codeExample: `alert("Hello, World!");`
    },
    {
        id: 2,
        Topic: "JavaScript Variables",
        description: "Variables in JavaScript can store values of different data types. Use 'let', 'const', and 'var' to declare variables.",
        codeExample: `let name = "Alice";
const age = 25;
console.log(name, age);`
    },
    {
        id: 3,
        Topic: "JavaScript Functions",
        description: "Functions in JavaScript allow you to group code into reusable blocks. They can accept parameters and return values.",
        codeExample: `function greet(name) {
  return "Hello, " + name;
}
console.log(greet("Alice"));`
    },
    {
        id: 4,
        Topic: "JavaScript Loops",
        description: "JavaScript provides different looping structures, like 'for', 'while', and 'do-while', to repeat code multiple times.",
        codeExample: `for (let i = 0; i < 5; i++) {
  console.log(i);
}`
    },
    {
        id: 5,
        Topic: "JavaScript Objects",
        description: "Objects in JavaScript are collections of key-value pairs. They are used to store related data and methods.",
        codeExample: `const person = {
  name: "Alice",
  age: 25,
  greet: function() {
    console.log("Hello, " + this.name);
  }
};
person.greet();`
    },
    {
        id: 6,
        Topic: "JavaScript Arrays",
        description: "Arrays in JavaScript are ordered collections of values, which can be of different types. Arrays are zero-indexed.",
        codeExample: `const fruits = ["Apple", "Banana", "Orange"];
console.log(fruits[1]);`
    },
    {
        id: 7,
        Topic: "JavaScript Events",
        description: "Events in JavaScript allow you to trigger functions based on user actions, such as clicks or keystrokes.",
        codeExample: `document.getElementById("myButton").addEventListener("click", function() {
  alert("Button clicked!");
});`
    },
    {
        id: 8,
        Topic: "JavaScript Promises",
        description: "Promises in JavaScript are used for asynchronous operations. A promise represents a value that may be available now or in the future.",
        codeExample: `let promise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("Operation successful!");
  } else {
    reject("Operation failed!");
  }
});
promise.then(result => console.log(result)).catch(error => console.log(error));`
    },
    {
        id: 9,
        Topic: "JavaScript Classes",
        description: "JavaScript classes provide a blueprint for creating objects with shared properties and methods. Introduced in ES6, they are syntactic sugar over constructor functions.",
        codeExample: `class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log("Hello, " + this.name);
  }
}
const person = new Person("Alice", 25);
person.greet();`
    },
    {
        id: 10,
        Topic: "JavaScript Error Handling",
        description: "JavaScript uses try...catch to handle exceptions and avoid application crashes when errors occur.",
        codeExample: `try {
  let result = 10 / 0;
  if (!isFinite(result)) {
    throw "Division by zero error";
  }
} catch (error) {
  console.log(error);
}`
    }
];


 const REACT = [
    {
        id: 1,
        Topic: "Introduction to React",
        description: "React is a JavaScript library for building user interfaces. It helps developers create fast, scalable, and simple UIs by breaking the interface into reusable components.",
        codeExample: `import React from 'react';
const App = () => {
  return <h1>Hello, React!</h1>;
};
export default App;`
    },
    {
        id: 2,
        Topic: "React Components",
        description: "React applications are built using components. Components are reusable pieces of code that return JSX, which is a syntax extension that looks similar to HTML.",
        codeExample: `const MyComponent = () => {
  return <div>Welcome to MyComponent</div>;
};
export default MyComponent;`
    },
    {
        id: 3,
        Topic: "JSX Syntax",
        description: "JSX is a syntax extension for JavaScript that allows you to write HTML-like code inside your JavaScript. JSX is transformed into JavaScript by React.",
        codeExample: `const App = () => {
  return (
    <div>
      <h1>JSX in React</h1>
      <p>This is JSX syntax in action.</p>
    </div>
  );
};
export default App;`
    },
    {
        id: 4,
        Topic: "State in React",
        description: "State is a built-in object in React that allows components to create dynamic behavior. It is used to store data that can change over time and trigger UI updates when the state changes.",
        codeExample: `import React, { useState } from 'react';
const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
export default Counter;`
    },
    {
        id: 5,
        Topic: "Props in React",
        description: "Props (short for 'properties') allow you to pass data from a parent component to a child component. They are immutable and help make components reusable.",
        codeExample: `const Greeting = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};

const App = () => {
  return <Greeting name="Alice" />;
};
export default App;`
    },
    {
        id: 6,
        Topic: "Handling Events in React",
        description: "In React, event handling is similar to regular JavaScript, but with some differences. Events are written in camelCase, and instead of using strings, you pass functions as event handlers.",
        codeExample: `const Button = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };
  return <button onClick={handleClick}>Click Me</button>;
};
export default Button;`
    },
    {
        id: 7,
        Topic: "React Lifecycle Methods",
        description: "Lifecycle methods allow you to run code at different points in a component's lifecycle, such as when it is mounted, updated, or unmounted.",
        codeExample: `import React, { Component } from 'react';

class MyComponent extends Component {
  componentDidMount() {
    console.log('Component mounted');
  }
  
  render() {
    return <h1>Hello from lifecycle methods</h1>;
  }
}

export default MyComponent;`
    },
    {
        id: 8,
        Topic: "useEffect Hook",
        description: "The useEffect hook is used to perform side effects in function components. It replaces lifecycle methods like componentDidMount and componentDidUpdate.",
        codeExample: `import React, { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    console.log('Component mounted');
  }, []);
  
  return <h1>useEffect Example</h1>;
};
export default App;`
    },
    {
        id: 9,
        Topic: "useState Hook",
        description: "The useState hook is used to manage state in function components. It returns an array with the current state and a function to update it.",
        codeExample: `import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
export default Counter;`
    },
    {
        id: 10,
        Topic: "Conditional Rendering in React",
        description: "Conditional rendering in React allows you to display elements based on certain conditions, such as using JavaScript operators like 'if', 'ternary', and '&&'.",
        codeExample: `const Greeting = ({ isLoggedIn }) => {
  return (
    <div>
      {isLoggedIn ? <h1>Welcome Back!</h1> : <h1>Please Log In</h1>}
    </div>
  );
};
export default Greeting;`
    },
    {
        id: 11,
        Topic: "React Forms",
        description: "Forms in React are controlled components, where the form data is handled by the component's state. You can use the 'onChange' event to update state when a user inputs data.",
        codeExample: `import React, { useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <form>
      <input type="text" value={name} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
};
export default Form;`
    },
    {
        id: 12,
        Topic: "React Context API",
        description: "The Context API allows you to share data across the entire component tree without passing props down manually at each level.",
        codeExample: `import React, { createContext, useState, useContext } from 'react';

const MyContext = createContext();

const Parent = () => {
  const [value, setValue] = useState("Shared Value");
  
  return (
    <MyContext.Provider value={value}>
      <Child />
    </MyContext.Provider>
  );
};

const Child = () => {
  const value = useContext(MyContext);
  return <h1>{value}</h1>;
};

export default Parent;`
    },
    {
        id: 13,
        Topic: "React Router",
        description: "React Router is used to handle routing in React applications, allowing navigation between different views without reloading the page.",
        codeExample: `import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Home = () => <h1>Home Page</h1>;
const About = () => <h1>About Page</h1>;

const App = () => (
  <Router>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
    <Route path="/" exact component={Home} />
    <Route path="/about" component={About} />
  </Router>
);
export default App;`
    },
    {
        id: 14,
        Topic: "Handling Lists in React",
        description: "Rendering lists in React involves using the map() function to render an array of items as JSX elements.",
        codeExample: `const items = ['Apple', 'Banana', 'Orange'];

const List = () => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};
export default List;`
    },
    {
        id: 15,
        Topic: "Error Boundaries in React",
        description: "Error boundaries in React catch JavaScript errors in their child components, log those errors, and display a fallback UI instead of crashing the component tree.",
        codeExample: `import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;`
    },
    {
        id: 16,
        Topic: "React Hooks (Custom)",
        description: "Custom hooks allow you to extract and reuse logic in multiple components. They are functions that can call other hooks inside them.",
        codeExample: `import { useState, useEffect } from 'react';

const useCounter = (initialValue) => {
  const [count, setCount] = useState(initialValue);

  useEffect(() => {
    console.log('Counter updated:', count);
  }, [count]);

  return [count, setCount];
};

const Counter = () => {
  const [count, setCount] = useCounter(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
};
export default Counter;`
    },
    {
        id: 17,
        Topic: "React Fragment",
        description: "React.Fragment is used to return multiple elements from a component without adding extra nodes to the DOM.",
        codeExample: `const App = () => {
  return (
    <React.Fragment>
      <h1>Header</h1>
      <p>This is a fragment.</p>
    </React.Fragment>
  );
};
export default App;`
    },
    {
        id: 18,
        Topic: "React Strict Mode",
        description: "React Strict Mode is a tool for identifying potential problems in an application. It activates additional checks and warnings for its descendants.",
        codeExample: `import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);`
    },
    {
        id: 19,
        Topic: "React Developer Tools",
        description: "React Developer Tools is a browser extension that helps you inspect and debug React components. It provides insights into component hierarchies and their state/props.",
        codeExample: "To use it, install the React Developer Tools extension in your browser, and you will be able to inspect your React app's component tree."
    },
    {
        id: 20,
        Topic: "Code Splitting in React",
        description: "Code splitting allows you to split your code into smaller bundles to load only the necessary code for a particular page or feature, improving performance.",
        codeExample: `import React, { Suspense, lazy } from 'react';

const LazyComponent = lazy(() => import('./LazyComponent'));

const App = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <LazyComponent />
  </Suspense>
);
export default App;`
    }
];

const tailwindCSS = [
    {
        id: 1,
        Topic: "Introduction to Tailwind CSS",
        description: "Tailwind CSS is a utility-first CSS framework designed for rapid UI development. Unlike traditional CSS frameworks, such as Bootstrap or Foundation, which offer pre-designed components, Tailwind provides low-level utility classes that can be combined to create custom designs. This approach encourages a more flexible, component-based structure, where each utility class is responsible for a single CSS property like 'padding', 'margin', 'background-color', or 'font-size'. Tailwind allows developers to design directly in the HTML by applying utility classes, making it easy to customize and maintain styles without writing custom CSS."
    },
    {
        id: 2,
        Topic: "Utility-First Concept in Tailwind CSS",
        description: "The utility-first approach is a core concept of Tailwind CSS. Rather than defining styles in separate CSS files or components, Tailwind uses small utility classes that can be directly applied in HTML markup. These utility classes are designed to do one thing and one thing only: setting a single CSS property. For example, classes like 'bg-blue-500', 'text-xl', or 'p-4' represent 'background-color', 'font-size', and 'padding' respectively. This leads to a more streamlined and consistent development process, where developers can create fully customized designs by combining various utility classes."
    },
    {
        id: 3,
        Topic: "Responsive Design with Tailwind CSS",
        description: "Tailwind CSS provides an easy way to build responsive designs with its mobile-first breakpoints. By default, Tailwind’s utility classes apply to all screen sizes. However, it allows for the modification of the utility classes at specific breakpoints using responsive prefixes like 'sm:', 'md:', 'lg:', and 'xl:'. For example, the class 'text-center md:text-left' will center the text on smaller screens and align it to the left on medium screens and above. This makes it simple to create responsive layouts without writing custom media queries, and Tailwind’s built-in utilities make it easy to adjust designs for different screen sizes."
    },
    {
        id: 4,
        Topic: "Customization in Tailwind CSS",
        description: "One of the strengths of Tailwind CSS is its high level of customization. Tailwind’s configuration file (tailwind.config.js) allows you to modify the default theme, extend it with new values, or even replace it entirely. You can change colors, spacing, font families, breakpoints, and more. Tailwind uses a default design system, but you can adjust this system to fit the needs of your project. Additionally, you can define custom utility classes by extending the configuration or using the 'apply' directive within CSS to combine multiple classes into a single custom class."
    },
    {
        id: 5,
        Topic: "Tailwind CSS Flexbox and Grid",
        description: "Tailwind CSS provides built-in utilities for both Flexbox and CSS Grid, making it easier to create responsive and complex layouts. For Flexbox, Tailwind provides utilities like 'flex', 'items-center', 'justify-between', 'flex-col', and many more to control the alignment, direction, and distribution of flex items. Tailwind also supports CSS Grid with utilities such as 'grid', 'grid-cols-3', and 'gap-4' to create grid-based layouts. Tailwind’s Flexbox and Grid utilities help you structure your layout in a way that is both flexible and responsive without writing additional CSS."
    },
    {
        id: 6,
        Topic: "Tailwind CSS Typography",
        description: "Tailwind CSS includes a set of utilities for controlling typography. With Tailwind, you can easily style text using utilities such as 'font-bold', 'text-lg', 'leading-tight', 'text-gray-800', and 'tracking-wide'. Tailwind makes it easy to adjust font size, line height, font weight, text color, letter spacing, and text alignment directly in the markup. Additionally, you can customize the typography system in the Tailwind config file to suit your project's needs. Tailwind also offers a plugin called 'Typography' (formerly known as 'Typography Plugin' or 'TailwindCSS Typography') to style rich text content, such as articles and blogs, with minimal configuration."
    },
    {
        id: 7,
        Topic: "Tailwind CSS Pseudo-Classes and States",
        description: "Tailwind CSS allows you to apply styles to various states and pseudo-classes, such as hover, focus, active, and others, without writing custom CSS. These states are represented by utility classes that can be prefixed to any Tailwind class. For example, 'hover:bg-blue-500' will change the background color to blue when the element is hovered, and 'focus:outline-none' removes the default outline when an element is focused. Tailwind supports a wide range of pseudo-classes and states, making it easy to create interactive and accessible UI elements without writing additional CSS."
    },
    {
        id: 8,
        Topic: "Tailwind CSS Plugins",
        description: "Tailwind CSS supports a plugin system that allows you to extend its functionality. You can either use community-created plugins or write your own to add custom utilities, components, or themes to your project. The Tailwind CSS plugin ecosystem is vast, and some popular plugins include '@tailwindcss/forms' for styling form elements, '@tailwindcss/typography' for rich text formatting, and '@tailwindcss/aspect-ratio' for controlling aspect ratios of elements. Plugins allow developers to add extra features and utilities, making Tailwind even more powerful and versatile."
    },
    {
        id: 9,
        Topic: "Tailwind CSS Colors and Themes",
        description: "Tailwind CSS provides a comprehensive color palette out of the box, including shades for each color, such as 'red-100', 'blue-500', or 'gray-800'. The colors can be easily applied to text, backgrounds, borders, and other elements. Tailwind also allows for easy color customization through the configuration file, enabling you to define your own color schemes and add custom color palettes. In addition, Tailwind’s theme system allows you to set a consistent design system across your project by defining colors, typography, spacing, and more within the config file."
    },
    {
        id: 10,
        Topic: "Performance Optimization with Tailwind CSS",
        description: "One of the challenges with using utility-first CSS frameworks like Tailwind is that they can result in large CSS files, especially if you use many utility classes. To mitigate this, Tailwind CSS uses a tool called PurgeCSS (built into Tailwind’s build process) that removes unused CSS classes from your production builds. By specifying which files Tailwind should look at, it can safely remove any CSS classes that are not used in the final output, resulting in smaller CSS files and faster load times. Tailwind also supports JIT (Just-In-Time) mode, which generates only the CSS you actually use, ensuring minimal file sizes and optimal performance."
    }
];
const nodeJS = [
    {
        id: 1,
        Topic: "Introduction to Node.js",
        description: "Node.js is a runtime environment built on Chrome's V8 JavaScript engine that allows JavaScript to be executed on the server side. It is designed to build scalable network applications, using an event-driven, non-blocking I/O model. This model makes Node.js lightweight and efficient, especially for I/O-heavy operations like handling multiple simultaneous connections. In Node.js, you write JavaScript code that runs on the server, handling requests and responses just like other backend programming languages (e.g., Python, Ruby, PHP). The core library of Node.js includes several built-in modules to interact with the file system, network, and other system functionalities."
    },
    {
        id: 2,
        Topic: "Setting Up a Node.js Project",
        description: "To get started with Node.js, you first need to install Node.js and npm (Node Package Manager) on your system. After that, you can initialize a new Node.js project and manage dependencies using npm. Below is how to set up a basic Node.js project.",
        codeExample: `
            // Step 1: Initialize a new project
            npm init -y  // Initializes with default settings

            // Step 2: Create an index.js file
            // index.js
            console.log("Hello, Node.js!");
        `
    },
    {
        id: 3,
        Topic: "Creating a Simple HTTP Server in Node.js",
        description: "Node.js provides the built-in 'http' module, which allows you to create web servers. Below is an example of how to create a simple HTTP server that listens on port 3000.",
        codeExample: `
            // Import the http module
            const http = require('http');

            // Create the HTTP server
            const server = http.createServer((req, res) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/plain');
                res.end('Hello, World!\n');
            });

            // Listen on port 3000
            server.listen(3000, 'localhost', () => {
                console.log('Server running at http://localhost:3000/');
            });
        `
    },
    {
        id: 4,
        Topic: "Node.js Modules",
        description: "Node.js has a built-in module system that allows you to split your code into reusable components. You can create your own modules or use the built-in ones. Below is an example of creating and importing your own module.",
        codeExample: `
            // Creating a module (math.js)
            module.exports.add = (a, b) => a + b;
            module.exports.subtract = (a, b) => a - b;

            // Importing the module in another file (app.js)
            const math = require('./math');

            console.log(math.add(2, 3));  // Outputs: 5
            console.log(math.subtract(5, 3));  // Outputs: 2
        `
    },
    {
        id: 5,
        Topic: "Handling Asynchronous Operations in Node.js",
        description: "Asynchronous operations are a fundamental part of Node.js. Instead of blocking the execution while waiting for I/O operations (e.g., reading files or fetching data from a database), Node.js uses callbacks, Promises, and async/await to handle these operations asynchronously. Below is an example using a callback function.",
        codeExample: `
            const fs = require('fs');

            // Asynchronous file reading using a callback
            fs.readFile('example.txt', 'utf8', (err, data) => {
                if (err) {
                    console.error("Error reading the file", err);
                } else {
                    console.log(data);
                }
            });
        `
    },
    {
        id: 6,
        Topic: "Express.js - Web Framework for Node.js",
        description: "Express.js is a lightweight framework built on top of Node.js to simplify routing and handling HTTP requests and responses. Express makes it easier to build APIs and web applications. Here's how you can set up a basic Express server.",
        codeExample: `
            // Step 1: Install Express
            // npm install express

            // Step 2: Create a simple Express app (app.js)
            const express = require('express');
            const app = express();

            // Define a route
            app.get('/', (req, res) => {
                res.send('Hello, Express!');
            });

            // Listen on port 3000
            app.listen(3000, () => {
                console.log('Server is running on http://localhost:3000');
            });
        `
    },
    {
        id: 7,
        Topic: "Using Middleware in Express",
        description: "Middleware functions in Express are functions that have access to the request, response, and the next middleware function. They can modify the request and response objects, or end the request-response cycle. Below is an example of using middleware in Express.",
        codeExample: `
            const express = require('express');
            const app = express();

            // Simple middleware to log request details
            app.use((req, res, next) => {
                console.log('Request URL:', req.originalUrl);
                next();  // Call the next middleware or route handler
            });

            app.get('/', (req, res) => {
                res.send('Hello from middleware!');
            });

            app.listen(3000, () => {
                console.log('Server running on http://localhost:3000');
            });
        `
    },
    {
        id: 8,
        Topic: "Routing in Express",
        description: "Routing in Express is used to define different paths or endpoints in the application and associate them with specific HTTP methods (GET, POST, etc.). Below is an example of defining multiple routes in an Express app.",
        codeExample: `
            const express = require('express');
            const app = express();

            // Define a GET route
            app.get('/', (req, res) => {
                res.send('Welcome to the Home Page');
            });

            // Define a POST route
            app.post('/submit', (req, res) => {
                res.send('Form Submitted');
            });

            app.listen(3000, () => {
                console.log('Server running on http://localhost:3000');
            });
        `
    },
    {
        id: 9,
        Topic: "Working with Databases in Node.js",
        description: "Node.js can interact with databases such as MongoDB, MySQL, and PostgreSQL. Below is an example of how to connect to a MongoDB database using the Mongoose library and perform a simple query.",
        codeExample: `
            // Step 1: Install mongoose
            // npm install mongoose

            // Step 2: Create a basic MongoDB connection (app.js)
            const mongoose = require('mongoose');

            // Connect to the MongoDB database
            mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true });

            // Define a schema and model
            const Schema = mongoose.Schema;
            const userSchema = new Schema({ name: String, age: Number });
            const User = mongoose.model('User', userSchema);

            // Create and save a new user
            const newUser = new User({ name: 'John Doe', age: 30 });
            newUser.save((err) => {
                if (err) {
                    console.error('Error saving user:', err);
                } else {
                    console.log('User saved successfully');
                }
            });
        `
    },
    {
        id: 10,
        Topic: "Error Handling in Node.js",
        description: "Error handling is crucial for building stable Node.js applications. Node.js provides a way to handle errors both synchronously (via try-catch) and asynchronously (via callback functions). Below is an example of error handling in both cases.",
        codeExample: `
            // Synchronous error handling
            try {
                let result = someUndefinedFunction(); // This will throw an error
            } catch (error) {
                console.error("Caught error:", error.message);
            }

            // Asynchronous error handling using a callback
            const fs = require('fs');
            fs.readFile('nonexistentfile.txt', 'utf8', (err, data) => {
                if (err) {
                    console.error("Error reading file:", err.message);
                } else {
                    console.log(data);
                }
            });
        `
    }
];
const mongoDB = [
    {
        id: 1,
        Topic: "Introduction to MongoDB",
        description: "MongoDB is a NoSQL database that stores data in flexible, JSON-like documents. This makes MongoDB highly scalable and adaptable to a variety of data structures. Unlike relational databases, MongoDB does not use tables or rows but instead uses collections and documents. A collection is a group of MongoDB documents, which are individual records. MongoDB is widely used in applications requiring high scalability and real-time data access, and it works well with modern web applications where the data structure can vary over time."
    },
    {
        id: 2,
        Topic: "Installing MongoDB",
        description: "To use MongoDB, you first need to install MongoDB and set up a database. Here's how to install MongoDB on your system.",
        codeExample: `
            // Install MongoDB on Ubuntu using terminal
            sudo apt-get update
            sudo apt-get install -y mongodb
            sudo systemctl start mongodb
            sudo systemctl enable mongodb

            // On MacOS using Homebrew
            brew tap mongodb/brew
            brew install mongodb-community@5.0
            brew services start mongodb/brew/mongodb-community
        `
    },
    {
        id: 3,
        Topic: "Connecting to MongoDB from Node.js",
        description: "To connect to MongoDB from a Node.js application, we use the official MongoDB Node.js driver or an ORM like Mongoose. Below is an example of how to connect to a MongoDB database using the MongoDB driver.",
        codeExample: `
            // Install MongoDB driver
            // npm install mongodb

            const { MongoClient } = require('mongodb');

            const url = 'mongodb://localhost:27017';  // URL for your MongoDB instance
            const dbName = 'mydatabase';  // Name of the database to connect to

            async function main() {
                const client = new MongoClient(url);

                try {
                    // Connect to the server
                    await client.connect();
                    console.log('Connected to MongoDB');

                    const db = client.db(dbName);
                    const collection = db.collection('users');

                    // Perform operations...
                } finally {
                    await client.close();
                }
            }

            main().catch(console.error);
        `
    },
    {
        id: 4,
        Topic: "MongoDB CRUD Operations",
        description: "MongoDB supports four main operations: Create, Read, Update, and Delete (CRUD). These are the basic building blocks of interacting with the database. Below is an example of how to perform each CRUD operation using the MongoDB Node.js driver.",
        codeExample: `
            const { MongoClient } = require('mongodb');
            const url = 'mongodb://localhost:27017';
            const dbName = 'mydatabase';

            async function performCRUD() {
                const client = new MongoClient(url);

                try {
                    await client.connect();
                    const db = client.db(dbName);
                    const collection = db.collection('users');

                    // CREATE - Insert a document
                    await collection.insertOne({ name: 'John Doe', age: 30 });

                    // READ - Find a document
                    const user = await collection.findOne({ name: 'John Doe' });
                    console.log('Found user:', user);

                    // UPDATE - Update a document
                    await collection.updateOne({ name: 'John Doe' }, { $set: { age: 31 } });

                    // DELETE - Delete a document
                    await collection.deleteOne({ name: 'John Doe' });
                } finally {
                    await client.close();
                }
            }

            performCRUD().catch(console.error);
        `
    },
    {
        id: 5,
        Topic: "MongoDB Indexing",
        description: "MongoDB allows you to create indexes on your collections to improve query performance. Indexes are created on fields that are frequently queried. Below is an example of how to create an index on a collection.",
        codeExample: `
            const { MongoClient } = require('mongodb');
            const url = 'mongodb://localhost:27017';
            const dbName = 'mydatabase';

            async function createIndex() {
                const client = new MongoClient(url);

                try {
                    await client.connect();
                    const db = client.db(dbName);
                    const collection = db.collection('users');

                    // Creating an index on the 'name' field
                    await collection.createIndex({ name: 1 });  // 1 for ascending order

                    console.log('Index created');
                } finally {
                    await client.close();
                }
            }

            createIndex().catch(console.error);
        `
    },
    {
        id: 6,
        Topic: "Mongoose - MongoDB ODM",
        description: "Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a schema-based solution to model your application data, and it simplifies working with MongoDB by providing a higher-level abstraction. Here is how to use Mongoose to interact with MongoDB.",
        codeExample: `
            // Install Mongoose
            // npm install mongoose

            const mongoose = require('mongoose');

            // Connect to MongoDB
            mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true });

            const userSchema = new mongoose.Schema({
                name: String,
                age: Number
            });

            const User = mongoose.model('User', userSchema);

            // Create and save a new user
            const user = new User({ name: 'Jane Doe', age: 28 });
            user.save()
                .then(() => console.log('User saved'))
                .catch((err) => console.log('Error saving user:', err));

            // Find a user
            User.findOne({ name: 'Jane Doe' })
                .then((user) => console.log('Found user:', user))
                .catch((err) => console.log('Error finding user:', err));
        `
    },
    {
        id: 7,
        Topic: "MongoDB Aggregation Framework",
        description: "MongoDB provides an aggregation framework to perform advanced data transformations and computations, such as grouping, filtering, and sorting. Below is an example of how to use aggregation in MongoDB to find the average age of users in a collection.",
        codeExample: `
            const { MongoClient } = require('mongodb');
            const url = 'mongodb://localhost:27017';
            const dbName = 'mydatabase';

            async function aggregateData() {
                const client = new MongoClient(url);

                try {
                    await client.connect();
                    const db = client.db(dbName);
                    const collection = db.collection('users');

                    // Aggregate the average age of all users
                    const pipeline = [
                        { $group: { _id: null, avgAge: { $avg: '$age' } } }
                    ];

                    const result = await collection.aggregate(pipeline).toArray();
                    console.log('Average Age:', result[0].avgAge);
                } finally {
                    await client.close();
                }
            }

            aggregateData().catch(console.error);
        `
    },
    {
        id: 8,
        Topic: "MongoDB Data Modeling",
        description: "In MongoDB, data modeling refers to how you structure and organize your data within collections and documents. Unlike SQL databases, MongoDB allows for flexible schema designs. Here are the most common data models in MongoDB: Embedded data model and Referenced data model.",
        codeExample: `
            // Example of Embedded Data Model
            const postSchema = new mongoose.Schema({
                title: String,
                body: String,
                comments: [{
                    user: String,
                    comment: String,
                    date: Date
                }]
            });

            // Example of Referenced Data Model
            const userSchema = new mongoose.Schema({
                name: String,
                age: Number
            });

            const postSchema = new mongoose.Schema({
                title: String,
                body: String,
                userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
            });
        `
    },
    {
        id: 9,
        Topic: "MongoDB Transactions",
        description: "MongoDB supports multi-document ACID transactions, allowing you to perform multiple operations atomically. Transactions ensure that either all operations are applied or none of them are. Below is an example of using transactions in MongoDB.",
        codeExample: `
            const { MongoClient } = require('mongodb');
            const url = 'mongodb://localhost:27017';
            const dbName = 'mydatabase';

            async function runTransaction() {
                const client = new MongoClient(url);
                const session = client.startSession();

                try {
                    await client.connect();

                    const db = client.db(dbName);
                    const users = db.collection('users');
                    const orders = db.collection('orders');

                    session.startTransaction();

                    // Example operations inside the transaction
                    await users.insertOne({ name: 'Alice', age: 25 }, { session });
                    await orders.insertOne({ userId: 'someObjectId', total: 100 }, { session });

                    // Commit the transaction
                    await session.commitTransaction();
                    console.log('Transaction committed');
                } catch (error) {
                    // If anything fails, abort the transaction
                    await session.abortTransaction();
                    console.error('Transaction aborted:', error);
                } finally {
                    session.endSession();
                    await client.close();
                }
            }

            runTransaction().catch(console.error);
        `
    },
    {
        id: 10,
        Topic: "MongoDB Backup and Restore",
        description: "MongoDB provides tools like `mongodump` and `mongorestore` to backup and restore databases. This is useful for creating backups of your data or migrating between environments.",
        codeExample: `
            // Backup a MongoDB database
            mongodump --uri="mongodb://localhost:27017/mydatabase" --out=/path/to/backup

            // Restore a MongoDB database
            mongorestore --uri="mongodb://localhost:27017" --db mydatabase /path/to/backup/mydatabase
        `
    }
];
const SQL = [
    {
        id: 1,
        Topic: "Introduction to SQL",
        description: "SQL (Structured Query Language) is a standard language used for managing and manipulating relational databases. It is used to perform tasks such as querying data, updating data, inserting new records, and deleting existing data. SQL allows you to interact with databases in a variety of ways, including creating and altering database structures, controlling access, and more. SQL is essential for working with most relational databases such as MySQL, PostgreSQL, Oracle, and SQL Server."
    },
    {
        id: 2,
        Topic: "SQL Database Structure",
        description: "A relational database typically consists of tables that are made up of rows and columns. Each table represents an entity, and each row represents a record. Columns represent attributes of the entity. SQL databases support a variety of data types like integers, strings, dates, and more. Here's an example of a simple table structure.",
        codeExample: `
            CREATE TABLE Employees (
                id INT PRIMARY KEY,
                first_name VARCHAR(50),
                last_name VARCHAR(50),
                hire_date DATE,
                salary DECIMAL(10, 2)
            );
        `
    },
    {
        id: 3,
        Topic: "SQL SELECT Query",
        description: "The SELECT statement is used to query data from one or more tables. You can retrieve specific columns, use conditions to filter results, and apply functions like COUNT(), AVG(), etc.",
        codeExample: `
            // Basic SELECT query
            SELECT first_name, last_name FROM Employees;

            // SELECT with WHERE condition
            SELECT * FROM Employees WHERE salary > 50000;

            // SELECT with aggregate function
            SELECT AVG(salary) FROM Employees;
        `
    },
    {
        id: 4,
        Topic: "SQL INSERT Statement",
        description: "The INSERT statement is used to add new records to a table. You can insert one or multiple rows at once. Below is an example of how to insert data into the Employees table.",
        codeExample: `
            // Insert a single record
            INSERT INTO Employees (id, first_name, last_name, hire_date, salary)
            VALUES (1, 'John', 'Doe', '2022-03-15', 60000);

            // Insert multiple records
            INSERT INTO Employees (id, first_name, last_name, hire_date, salary)
            VALUES
                (2, 'Jane', 'Smith', '2021-07-22', 75000),
                (3, 'Mike', 'Johnson', '2020-11-01', 45000);
        `
    },
    {
        id: 5,
        Topic: "SQL UPDATE Statement",
        description: "The UPDATE statement is used to modify existing records in a table. You can use the WHERE clause to specify which records should be updated. Here’s an example of updating a record in the Employees table.",
        codeExample: `
            // Update a single record
            UPDATE Employees
            SET salary = 65000
            WHERE id = 1;

            // Update multiple records
            UPDATE Employees
            SET salary = salary * 1.1
            WHERE hire_date < '2021-01-01';
        `
    },
    {
        id: 6,
        Topic: "SQL DELETE Statement",
        description: "The DELETE statement is used to remove records from a table. Be careful with DELETE, as it will permanently remove the data unless you use a transaction. Here is an example of deleting records from the Employees table.",
        codeExample: `
            // Delete a single record
            DELETE FROM Employees WHERE id = 3;

            // Delete all records (use with caution)
            DELETE FROM Employees;
        `
    },
    {
        id: 7,
        Topic: "SQL JOIN Operations",
        description: "JOINs are used to combine rows from two or more tables based on a related column. The most common JOINs are INNER JOIN, LEFT JOIN, RIGHT JOIN, and FULL JOIN.",
        codeExample: `
            // INNER JOIN example
            SELECT Employees.first_name, Employees.last_name, Departments.department_name
            FROM Employees
            INNER JOIN Departments ON Employees.department_id = Departments.id;

            // LEFT JOIN example
            SELECT Employees.first_name, Employees.last_name, Departments.department_name
            FROM Employees
            LEFT JOIN Departments ON Employees.department_id = Departments.id;
        `
    },
    {
        id: 8,
        Topic: "SQL GROUP BY and HAVING",
        description: "The GROUP BY statement groups rows that have the same values in specified columns into summary rows. The HAVING clause is used to filter records after the GROUP BY operation, unlike the WHERE clause which filters records before grouping.",
        codeExample: `
            // GROUP BY example
            SELECT department_id, COUNT(*) AS number_of_employees
            FROM Employees
            GROUP BY department_id;

            // GROUP BY with HAVING
            SELECT department_id, AVG(salary) AS avg_salary
            FROM Employees
            GROUP BY department_id
            HAVING AVG(salary) > 50000;
        `
    },
    {
        id: 9,
        Topic: "SQL Subqueries",
        description: "A subquery is a query nested inside another query. Subqueries are useful for more complex queries where you need the result of one query to be used in another. Here’s an example of using subqueries.",
        codeExample: `
            // Subquery in SELECT
            SELECT first_name, last_name
            FROM Employees
            WHERE department_id = (SELECT id FROM Departments WHERE department_name = 'Sales');

            // Subquery in WHERE
            SELECT * FROM Employees
            WHERE salary > (SELECT AVG(salary) FROM Employees);
        `
    },
    {
        id: 10,
        Topic: "SQL Transactions",
        description: "A transaction is a sequence of operations performed as a single unit of work. SQL transactions are used to ensure data integrity. Transactions use COMMIT and ROLLBACK to save or undo changes respectively. Transactions are commonly used when performing multiple related operations.",
        codeExample: `
            -- Begin a transaction
            BEGIN TRANSACTION;

            -- Perform SQL operations
            UPDATE Employees SET salary = salary * 1.1 WHERE department_id = 2;
            INSERT INTO Employees (id, first_name, last_name, hire_date, salary) VALUES (4, 'Sarah', 'Connor', '2023-01-01', 55000);

            -- If everything is correct, commit the transaction
            COMMIT;

            -- If an error occurs, roll back the transaction
            ROLLBACK;
        `
    }
];






export{HTML,CSS,JS,REACT,tailwindCSS,nodeJS,mongoDB,SQL};