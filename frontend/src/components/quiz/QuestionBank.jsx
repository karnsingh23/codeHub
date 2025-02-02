const webBasics = [
    {
        id: 1,
        question: "What does HTML stand for?",
        options: ["HyperText Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "None of the above"],
        answer: "HyperText Markup Language",
    },
    {
        id: 2,
        question: "What does CSS stand for?",
        options: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style Sheets", "Cascading Simple Sheets"],
        answer: "Cascading Style Sheets",
    },
    {
        id: 3,
        question: "Which company developed JavaScript?",
        options: ["Netscape", "Microsoft", "Sun Microsystems", "Oracle"],
        answer: "Netscape",
    },
    {
        id: 4,
        question: "Which of the following is used to define a block of code in JavaScript?",
        options: ["()", "{}", "[]", "<>"],
        answer: "{}",
    },
    {
        id: 5,
        question: "Which of the following is a JavaScript framework?",
        options: ["Angular", "React", "Vue", "All of the above"],
        answer: "All of the above",
    },
    {
        id: 6,
        question: "What does the 'box-sizing' property in CSS do?",
        options: ["Defines how the total width and height of an element are calculated", "Adjusts the size of the element based on its content", "Applies a box shadow", "None of the above"],
        answer: "Defines how the total width and height of an element are calculated",
    },
    {
        id: 7,
        question: "Which of the following is used to store key-value pairs in JavaScript?",
        options: ["Array", "Object", "Function", "String"],
        answer: "Object",
    },
    {
        id: 8,
        question: "Which HTML tag is used to define an internal style sheet?",
        options: ["<style>", "<script>", "<link>", "<meta>"],
        answer: "<style>",
    },
    {
        id: 9,
        question: "Which property is used to change the background color in CSS?",
        options: ["color", "bgcolor", "background-color", "background"],
        answer: "background-color",
    },
    {
        id: 10,
        question: "What is the correct HTML tag for inserting a line break?",
        options: ["<br>", "<break>", "<lb>", "<line>"],
        answer: "<br>",
    },
];

const sqlBasics = [
    {
        id: 1,
        question: "What does SQL stand for?",
        options: ["Structured Query Language", "Sequential Query Language", "Structured Question Language", "Simple Query Language"],
        answer: "Structured Query Language",
    },
    {
        id: 2,
        question: "Which SQL statement is used to extract data from a database?",
        options: ["SELECT", "GET", "EXTRACT", "PICK"],
        answer: "SELECT",
    },
    {
        id: 3,
        question: "Which SQL clause is used to filter records?",
        options: ["WHERE", "FILTER", "ORDER BY", "HAVING"],
        answer: "WHERE",
    },
    {
        id: 4,
        question: "Which SQL statement is used to update data in a database?",
        options: ["MODIFY", "UPDATE", "CHANGE", "SET"],
        answer: "UPDATE",
    },
    {
        id: 5,
        question: "Which of the following SQL commands is used to remove a table from a database?",
        options: ["DELETE", "DROP", "REMOVE", "CLEAR"],
        answer: "DROP",
    },
    {
        id: 6,
        question: "Which keyword is used to sort the result set in SQL?",
        options: ["SORT", "ORDER BY", "GROUP BY", "ARRANGE"],
        answer: "ORDER BY",
    },
    {
        id: 7,
        question: "Which of the following is not a valid SQL data type?",
        options: ["VARCHAR", "TEXT", "INT", "STRING"],
        answer: "STRING",
    },
    {
        id: 8,
        question: "Which SQL function is used to count the number of rows in a table?",
        options: ["COUNT()", "SUM()", "ROWS()", "TOTAL()"],
        answer: "COUNT()",
    },
    {
        id: 9,
        question: "Which SQL keyword is used to combine the result set of two or more SELECT statements?",
        options: ["COMBINE", "JOIN", "MERGE", "UNION"],
        answer: "UNION",
    },
    {
        id: 10,
        question: "Which SQL operator is used to compare a value to a range of values?",
        options: ["BETWEEN", "IN", "LIKE", "IS"],
        answer: "BETWEEN",
    },
];

const jsBasics = [
    {
        id: 1,
        question: "What is the purpose of the 'this' keyword in JavaScript?",
        options: ["Refers to the current object", "Refers to the parent object", "Refers to a global variable", "None of the above"],
        answer: "Refers to the current object",
    },
    {
        id: 2,
        question: "Which method is used to add an element to the end of an array in JavaScript?",
        options: ["push()", "pop()", "shift()", "unshift()"],
        answer: "push()",
    },
    {
        id: 3,
        question: "What is the output of the expression: '5' + 3 in JavaScript?",
        options: ["8", "53", "Error", "NaN"],
        answer: "53",
    },
    {
        id: 4,
        question: "Which of the following is a JavaScript data type?",
        options: ["string", "number", "boolean", "All of the above"],
        answer: "All of the above",
    },
    {
        id: 5,
        question: "Which method is used to remove the last element of an array in JavaScript?",
        options: ["pop()", "push()", "shift()", "unshift()"],
        answer: "pop()",
    },
    {
        id: 6,
        question: "Which of the following will return the length of a string in JavaScript?",
        options: ["length()", "getLength()", "string.length", "None of the above"],
        answer: "string.length",
    },
    {
        id: 7,
        question: "Which of the following is the correct way to define a function in JavaScript?",
        options: ["function() {}", "function myFunction() {}", "def myFunction()", "function: myFunction()"],
        answer: "function myFunction() {}",
    },
    {
        id: 8,
        question: "Which of the following is used to declare a constant variable in JavaScript?",
        options: ["var", "let", "const", "constant"],
        answer: "const",
    },
    {
        id: 9,
        question: "What is the correct way to write a comment in JavaScript?",
        options: ["// comment", "/* comment */", "# comment", "Both A and B"],
        answer: "Both A and B",
    },
    {
        id: 10,
        question: "What is the output of the expression: '10' - 5 in JavaScript?",
        options: ["105", "5", "Error", "NaN"],
        answer: "5",
    },
];

const reactBasics = [
    {
        id: 1,
        question: "What does JSX stand for in React?",
        options: ["JavaScript XML", "JavaScript Extension", "JavaScript Syntax Extension", "None of the above"],
        answer: "JavaScript XML",
    },
    {
        id: 2,
        question: "Which function is used to create a React element?",
        options: ["React.createElement()", "React.element()", "createReactElement()", "createElement()"],
        answer: "React.createElement()",
    },
    {
        id: 3,
        question: "What is the purpose of the 'useState' hook in React?",
        options: ["To manage state in functional components", "To trigger re-renders", "To fetch data from an API", "To define lifecycle methods"],
        answer: "To manage state in functional components",
    },
    {
        id: 4,
        question: "Which method is used to render a React component to the DOM?",
        options: ["React.render()", "ReactDOM.render()", "React.createElement()", "ReactDOM.createElement()"],
        answer: "ReactDOM.render()",
    },
    {
        id: 5,
        question: "What is the default value of 'strict mode' in React?",
        options: ["false", "true", "undefined", "null"],
        answer: "false",
    },
    {
        id: 6,
        question: "Which of the following is used to pass data from parent component to child component in React?",
        options: ["Props", "State", "Context", "Event handlers"],
        answer: "Props",
    },
    {
        id: 7,
        question: "In React, what is the purpose of the 'key' prop?",
        options: ["To help React identify which items have changed", "To define the styling of elements", "To create new components", "None of the above"],
        answer: "To help React identify which items have changed",
    },
    {
        id: 8,
        question: "Which hook allows you to perform side effects in functional components?",
        options: ["useEffect", "useContext", "useState", "useReducer"],
        answer: "useEffect",
    },
    {
        id: 9,
        question: "Which of the following is a lifecycle method in React?",
        options: ["componentDidMount", "useEffect", "componentWillUnmount", "All of the above"],
        answer: "All of the above",
    },
    {
        id: 10,
        question: "Which statement is true about 'props' in React?",
        options: ["Props can be changed within a component", "Props are immutable", "Props are only used in class components", "None of the above"],
        answer: "Props are immutable",
    },
];


export { webBasics, sqlBasics,jsBasics , reactBasics };
