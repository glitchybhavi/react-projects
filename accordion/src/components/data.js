const accordionData = [
  {
    id: 1,
    question: "What is the DOM?",
    answer:
      "The DOM (Document Object Model) is a programming interface that represents an HTML document as a tree of objects. JavaScript can use the DOM to access, modify, add, or remove elements on a webpage."
  },
  {
    id: 2,
    question: "What is JavaScript?",
    answer:
      "JavaScript is a programming language used to add logic and interactivity to websites. It can manipulate the DOM, handle events, work with APIs, and update webpage content dynamically."
  },
  {
    id: 3,
    question: "What is an event listener?",
    answer:
      "An event listener allows JavaScript to execute a function when a specific event occurs, such as a click, key press, mouse movement, or form submission."
  },
  {
    id: 4,
    question: "What is the difference between HTML and CSS?",
    answer:
      "HTML defines the structure and content of a webpage, while CSS controls its appearance, layout, colors, typography, and responsive behavior."
  },
  {
    id: 5,
    question: "What is the CSS Box Model?",
    answer:
      "The CSS Box Model describes how every element is represented as a box consisting of content, padding, border, and margin."
  },
  {
    id: 6,
    question: "What is responsive web design?",
    answer:
      "Responsive web design is an approach that allows websites to adapt their layout and appearance to different screen sizes and devices."
  },
  {
    id: 7,
    question: "What is the difference between let, const, and var?",
    answer:
      "let and const are block-scoped variables introduced in modern JavaScript. const cannot be reassigned, while let can. var is function-scoped and has different hoisting behavior."
  },
  {
    id: 8,
    question: "What is a JavaScript function?",
    answer:
      "A function is a reusable block of code designed to perform a particular task. It can accept inputs called parameters and can return a value."
  },
  {
    id: 9,
    question: "What is event bubbling?",
    answer:
      "Event bubbling is a mechanism where an event triggered on a nested element propagates upward through its parent elements in the DOM."
  },
  {
    id: 10,
    question: "What is an API?",
    answer:
      "An API (Application Programming Interface) allows different software systems to communicate with each other. Frontend applications commonly use APIs to retrieve or send data to a server."
  },
  {
    id: 11,
    question: "What is JSON?",
    answer:
      "JSON (JavaScript Object Notation) is a lightweight text format commonly used to store and exchange structured data between a frontend application and a server."
  },
  {
    id: 12,
    question: "What is the difference between == and ===?",
    answer:
      "The == operator compares values after performing type conversion, while === compares both value and type without performing type conversion."
  }
];

export default accordionData;