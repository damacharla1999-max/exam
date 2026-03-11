const reactQuestions = [
  {
    question: "What is React?",
    options: ["A library for building user interfaces", "A database", "A server-side framework", "A CSS preprocessor"],
    answer: "A library for building user interfaces"
  },
  {
    question: "React uses which DOM?",
    options: ["Real DOM", "Virtual DOM", "Shadow DOM", "None"],
    answer: "Virtual DOM"
  },
  {
    question: "What is JSX?",
    options: ["A JavaScript library", "A syntax extension for JavaScript", "A CSS framework", "A database query language"],
    answer: "A syntax extension for JavaScript"
  },
  {
    question: "What is a component in React?",
    options: ["A function that returns HTML", "A database table", "A CSS class", "A server endpoint"],
    answer: "A function that returns HTML"
  },
  {
    question: "What is state in React?",
    options: ["A way to store data that can change", "A static variable", "A CSS property", "A database connection"],
    answer: "A way to store data that can change"
  },
  {
    question: "What are props in React?",
    options: ["Read-only properties passed to components", "Mutable state", "CSS styles", "Database queries"],
    answer: "Read-only properties passed to components"
  },
  {
    question: "How do you create a functional component in React?",
    options: ["Using a function declaration", "Using a class", "Using an object", "Using a string"],
    answer: "Using a function declaration"
  },
  {
    question: "How do you create a class component in React?",
    options: ["Extending React.Component", "Using a function", "Using an array", "Using a number"],
    answer: "Extending React.Component"
  },
  {
    question: "What is the purpose of useState hook?",
    options: ["To manage state in functional components", "To handle side effects", "To optimize performance", "To manage routing"],
    answer: "To manage state in functional components"
  },
  {
    question: "What does useEffect hook do?",
    options: ["Handles side effects in functional components", "Manages state", "Creates components", "Handles events"],
    answer: "Handles side effects in functional components"
  },
  {
    question: "What is the difference between class and functional components?",
    options: ["Functional use hooks, class use lifecycle methods", "Functional are slower", "Class are newer", "No difference"],
    answer: "Functional use hooks, class use lifecycle methods"
  },
  {
    question: "What is a hook in React?",
    options: ["Functions that let you use state and lifecycle in functional components", "CSS classes", "Database functions", "Server methods"],
    answer: "Functions that let you use state and lifecycle in functional components"
  },
  {
    question: "What does useContext hook do?",
    options: ["Provides access to context values", "Manages local state", "Handles events", "Optimizes rendering"],
    answer: "Provides access to context values"
  },
  {
    question: "What is useReducer used for?",
    options: ["Managing complex state logic", "Simple state management", "Handling side effects", "Routing"],
    answer: "Managing complex state logic"
  },
  {
    question: "What is React Router?",
    options: ["A library for routing in React apps", "A state manager", "A testing library", "A CSS framework"],
    answer: "A library for routing in React apps"
  },
  {
    question: "How do you handle events in React?",
    options: ["Using camelCase event handlers", "Using lowercase", "Using kebab-case", "Using PascalCase"],
    answer: "Using camelCase event handlers"
  },
  {
    question: "What is the Virtual DOM?",
    options: ["A lightweight copy of the real DOM", "The actual browser DOM", "A CSS property", "A database"],
    answer: "A lightweight copy of the real DOM"
  },
  {
    question: "What is reconciliation in React?",
    options: ["The process of updating the DOM efficiently", "Creating components", "Managing state", "Handling errors"],
    answer: "The process of updating the DOM efficiently"
  },
  {
    question: "Why use keys in lists?",
    options: ["To help React identify changed items", "For styling", "For database queries", "For routing"],
    answer: "To help React identify changed items"
  },
  {
    question: "What is React.Fragment?",
    options: ["A way to group elements without adding extra nodes", "A component type", "A hook", "A library"],
    answer: "A way to group elements without adding extra nodes"
  },
  {
    question: "What is the render method in class components?",
    options: ["Returns the JSX to display", "Manages state", "Handles events", "Performs side effects"],
    answer: "Returns the JSX to display"
  },
  {
    question: "What are lifecycle methods?",
    options: ["Methods called at different stages of a component's life", "CSS methods", "Database methods", "Server methods"],
    answer: "Methods called at different stages of a component's life"
  },
  {
    question: "What does useMemo do?",
    options: ["Memoizes expensive computations", "Manages state", "Handles events", "Provides context"],
    answer: "Memoizes expensive computations"
  },
  {
    question: "What does useCallback do?",
    options: ["Memoizes functions to prevent unnecessary re-renders", "Manages state", "Handles side effects", "Optimizes styles"],
    answer: "Memoizes functions to prevent unnecessary re-renders"
  },
  {
    question: "What is Redux?",
    options: ["A state management library", "A routing library", "A testing framework", "A CSS preprocessor"],
    answer: "A state management library"
  },
  {
    question: "What is Context API used for?",
    options: ["Sharing state across components without props drilling", "Managing local state", "Handling events", "Optimizing performance"],
    answer: "Sharing state across components without props drilling"
  },
  {
    question: "What does React.memo do?",
    options: ["Prevents unnecessary re-renders of functional components", "Memoizes state", "Handles errors", "Manages context"],
    answer: "Prevents unnecessary re-renders of functional components"
  },
  {
    question: "What is Suspense in React?",
    options: ["Handles loading states for components", "Manages state", "Handles events", "Provides context"],
    answer: "Handles loading states for components"
  },
  {
    question: "What is an Error Boundary?",
    options: ["Catches JavaScript errors in the component tree", "Manages state", "Handles events", "Optimizes rendering"],
    answer: "Catches JavaScript errors in the component tree"
  },
  {
    question: "What is StrictMode in React?",
    options: ["Highlights potential problems in an application", "Enforces strict typing", "Manages state", "Handles routing"],
    answer: "Highlights potential problems in an application"
  }
];

const javaQuestions = [
  {
    question: "What is Java?",
    options: ["A programming language", "A coffee", "A car", "A book"],
    answer: "A programming language"
  },
  {
    question: "What is JVM?",
    options: ["Java Virtual Machine", "Java Video Machine", "Java Virtual Memory", "Java Visual Machine"],
    answer: "Java Virtual Machine"
  },
  {
    question: "What is JDK?",
    options: ["Java Development Kit", "Java Design Kit", "Java Data Kit", "Java Debug Kit"],
    answer: "Java Development Kit"
  },
  {
    question: "What is JRE?",
    options: ["Java Runtime Environment", "Java Run Environment", "Java Runtime Engine", "Java Run Engine"],
    answer: "Java Runtime Environment"
  },
  {
    question: "What is a class in Java?",
    options: ["A blueprint for objects", "A type of variable", "A method", "A package"],
    answer: "A blueprint for objects"
  },
  {
    question: "What is an object in Java?",
    options: ["An instance of a class", "A variable", "A method", "A package"],
    answer: "An instance of a class"
  },
  {
    question: "What is inheritance in Java?",
    options: ["A mechanism to inherit properties from a parent class", "A type of loop", "A data type", "A package"],
    answer: "A mechanism to inherit properties from a parent class"
  },
  {
    question: "What is polymorphism in Java?",
    options: ["Ability of an object to take many forms", "A data type", "A loop", "A package"],
    answer: "Ability of an object to take many forms"
  },
  {
    question: "What is encapsulation in Java?",
    options: ["Wrapping data and methods into a single unit", "A type of inheritance", "A loop", "A package"],
    answer: "Wrapping data and methods into a single unit"
  },
  {
    question: "What is abstraction in Java?",
    options: ["Hiding implementation details", "A data type", "A loop", "A package"],
    answer: "Hiding implementation details"
  },
  {
    question: "What is a constructor in Java?",
    options: ["A special method to initialize objects", "A variable", "A package", "A loop"],
    answer: "A special method to initialize objects"
  },
  {
    question: "What is a method in Java?",
    options: ["A function in a class", "A variable", "A package", "A loop"],
    answer: "A function in a class"
  },
  {
    question: "What is a variable in Java?",
    options: ["A container for data", "A method", "A package", "A loop"],
    answer: "A container for data"
  },
  {
    question: "What is a data type in Java?",
    options: ["Type of data a variable can hold", "A method", "A package", "A loop"],
    answer: "Type of data a variable can hold"
  },
  {
    question: "What is a loop in Java?",
    options: ["A control structure for repetition", "A variable", "A package", "A method"],
    answer: "A control structure for repetition"
  },
  {
    question: "What is an array in Java?",
    options: ["A collection of similar data types", "A method", "A package", "A loop"],
    answer: "A collection of similar data types"
  },
  {
    question: "What is a string in Java?",
    options: ["A sequence of characters", "A number", "A boolean", "A package"],
    answer: "A sequence of characters"
  },
  {
    question: "What is exception handling in Java?",
    options: ["Mechanism to handle runtime errors", "A loop", "A variable", "A package"],
    answer: "Mechanism to handle runtime errors"
  },
  {
    question: "What is a package in Java?",
    options: ["A namespace for classes", "A variable", "A method", "A loop"],
    answer: "A namespace for classes"
  },
  {
    question: "What is an interface in Java?",
    options: ["A blueprint for classes", "A variable", "A method", "A loop"],
    answer: "A blueprint for classes"
  },
  {
    question: "What is a thread in Java?",
    options: ["A lightweight process", "A variable", "A method", "A loop"],
    answer: "A lightweight process"
  },
  {
    question: "What is synchronization in Java?",
    options: ["Controlling access to shared resources", "A loop", "A variable", "A package"],
    answer: "Controlling access to shared resources"
  },
  {
    question: "What is garbage collection in Java?",
    options: ["Automatic memory management", "A loop", "A variable", "A package"],
    answer: "Automatic memory management"
  },
  {
    question: "What is a collection in Java?",
    options: ["A framework for storing and manipulating groups of objects", "A variable", "A method", "A loop"],
    answer: "A framework for storing and manipulating groups of objects"
  },
  {
    question: "What is a list in Java?",
    options: ["An ordered collection", "A variable", "A method", "A loop"],
    answer: "An ordered collection"
  },
  {
    question: "What is a set in Java?",
    options: ["A collection that contains no duplicate elements", "A variable", "A method", "A loop"],
    answer: "A collection that contains no duplicate elements"
  },
  {
    question: "What is a map in Java?",
    options: ["An object that maps keys to values", "A variable", "A method", "A loop"],
    answer: "An object that maps keys to values"
  },
  {
    question: "What is a file in Java?",
    options: ["A named location used to store data", "A variable", "A method", "A loop"],
    answer: "A named location used to store data"
  },
  {
    question: "What is I/O in Java?",
    options: ["Input and output operations", "A loop", "A variable", "A package"],
    answer: "Input and output operations"
  },
  {
    question: "What is JDBC?",
    options: ["Java Database Connectivity", "Java Data Base Connection", "Java Data Base Control", "Java Data Base Connector"],
    answer: "Java Database Connectivity"
  }
];

const pythonQuestions = [
  {
    question: "What is Python?",
    options: ["A programming language", "A snake", "A bird", "A book"],
    answer: "A programming language"
  },
  {
    question: "What is indentation in Python?",
    options: ["Used to define code blocks", "A type of loop", "A variable", "A package"],
    answer: "Used to define code blocks"
  },
  {
    question: "What is a list in Python?",
    options: ["A mutable sequence", "A string", "A number", "A boolean"],
    answer: "A mutable sequence"
  },
  {
    question: "What is a tuple in Python?",
    options: ["An immutable sequence", "A list", "A string", "A number"],
    answer: "An immutable sequence"
  },
  {
    question: "What is a dictionary in Python?",
    options: ["A collection of key-value pairs", "A list", "A tuple", "A string"],
    answer: "A collection of key-value pairs"
  },
  {
    question: "What is a function in Python?",
    options: ["A block of code that performs a task", "A variable", "A loop", "A package"],
    answer: "A block of code that performs a task"
  },
  {
    question: "What is a module in Python?",
    options: ["A file containing Python code", "A function", "A variable", "A loop"],
    answer: "A file containing Python code"
  },
  {
    question: "What is a package in Python?",
    options: ["A collection of modules", "A function", "A variable", "A loop"],
    answer: "A collection of modules"
  },
  {
    question: "What is a class in Python?",
    options: ["A blueprint for objects", "A function", "A variable", "A loop"],
    answer: "A blueprint for objects"
  },
  {
    question: "What is an object in Python?",
    options: ["An instance of a class", "A variable", "A function", "A loop"],
    answer: "An instance of a class"
  },
  {
    question: "What is inheritance in Python?",
    options: ["A mechanism to inherit properties from a parent class", "A loop", "A variable", "A package"],
    answer: "A mechanism to inherit properties from a parent class"
  },
  {
    question: "What is polymorphism in Python?",
    options: ["Ability of an object to take many forms", "A data type", "A loop", "A package"],
    answer: "Ability of an object to take many forms"
  },
  {
    question: "What is encapsulation in Python?",
    options: ["Wrapping data and methods into a single unit", "A type of inheritance", "A loop", "A package"],
    answer: "Wrapping data and methods into a single unit"
  },
  {
    question: "What is a loop in Python?",
    options: ["A control structure for repetition", "A variable", "A package", "A function"],
    answer: "A control structure for repetition"
  },
  {
    question: "What is a conditional statement in Python?",
    options: ["Used to make decisions", "A loop", "A variable", "A package"],
    answer: "Used to make decisions"
  },
  {
    question: "What is a string in Python?",
    options: ["A sequence of characters", "A number", "A boolean", "A list"],
    answer: "A sequence of characters"
  },
  {
    question: "What is an integer in Python?",
    options: ["A whole number", "A decimal", "A string", "A boolean"],
    answer: "A whole number"
  },
  {
    question: "What is a float in Python?",
    options: ["A decimal number", "A whole number", "A string", "A boolean"],
    answer: "A decimal number"
  },
  {
    question: "What is a boolean in Python?",
    options: ["A value that is either True or False", "A number", "A string", "A list"],
    answer: "A value that is either True or False"
  },
  {
    question: "What is a variable in Python?",
    options: ["A container for data", "A function", "A package", "A loop"],
    answer: "A container for data"
  },
  {
    question: "What is a comment in Python?",
    options: ["A line of code ignored by the interpreter", "A variable", "A function", "A loop"],
    answer: "A line of code ignored by the interpreter"
  },
  {
    question: "What is an exception in Python?",
    options: ["An error that occurs during execution", "A loop", "A variable", "A package"],
    answer: "An error that occurs during execution"
  },
  {
    question: "What is exception handling in Python?",
    options: ["Mechanism to handle errors", "A loop", "A variable", "A package"],
    answer: "Mechanism to handle errors"
  },
  {
    question: "What is a file in Python?",
    options: ["A named location used to store data", "A variable", "A function", "A loop"],
    answer: "A named location used to store data"
  },
  {
    question: "What is I/O in Python?",
    options: ["Input and output operations", "A loop", "A variable", "A package"],
    answer: "Input and output operations"
  },
  {
    question: "What is a library in Python?",
    options: ["A collection of modules and functions", "A function", "A variable", "A loop"],
    answer: "A collection of modules and functions"
  },
  {
    question: "What is NumPy?",
    options: ["A library for numerical computing", "A function", "A variable", "A loop"],
    answer: "A library for numerical computing"
  },
  {
    question: "What is Pandas?",
    options: ["A library for data manipulation", "A function", "A variable", "A loop"],
    answer: "A library for data manipulation"
  },
  {
    question: "What is Matplotlib?",
    options: ["A library for plotting", "A function", "A variable", "A loop"],
    answer: "A library for plotting"
  },
  {
    question: "What is Django?",
    options: ["A web framework", "A library", "A variable", "A loop"],
    answer: "A web framework"
  }
];

export { reactQuestions, javaQuestions, pythonQuestions };