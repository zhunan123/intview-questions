1.what is Virtual Dom & Shadow Dom difference? ---------------->
Virtual DOM is creating a copy of the whole DOM object, and Shadow DOM creates small pieces of the DOM object 
which has their own, isolated scope for the element they represent.



2.what is pure component in React?---------------------->
A React component is considered pure if it renders the same output for the same state and props. For class
components like this, React provides the PureComponent base class. Class components that extend the React.
PureComponent class are treated as pure components


3.What is the use of refs in React?
Refs provide a way to access DOM nodes or React elements created in the render method. In the typical React dataflow,
props are the only way that parent components interact with their children. To modify a child, you re-render it with new props.

4.Why are props used in React?
We use props in React to pass data from one component to another (from a parent component to a child component(s)). 
Props is just a shorter way of saying properties. They are useful when you want the flow of data in your app to be dynamic. 
... This means that the data in the component will not be static. They are immutable and thus will not be changed, State is used for mutable data
or data that will change.

5.What is the difference between a functional component and a class component?
A functional component is just a plain JavaScript function that accepts props as an argument and returns a React element. A class component requires you to extend from React. Component and create a render function which returns a React element. There is no render method used in functional components

6.What is controlled and uncontrolled component in React? ------>
In a controlled component, form data is handled by a React component. The alternative is uncontrolled components, where form data is handled by the DOM itself. To write an uncontrolled component, instead of writing an event handler for every state update, you can use a ref to get form values from the DOM.

7.What is the use of useCallback in React? ------->
The React useCallback Hook returns a memoized callback function. ... This allows us to isolate resource intensive functions so that they will not automatically run on every render. The useCallback Hook only runs when one of its dependencies update. This can improve performance.


8.Key Differences between the CSS and SCSS----------->
CSS is a style language that is used to style and create web pages. While SCSS is a particular type of file for SASS, it used the Ruby language, which assembles the browser's CSS style sheets. SCSS contains advanced and modified features. SCSS is more expressive than the CSS.


9.What is the best testing library for React?---------->
Jest. Jest was the most popular JavaScript unit testing framework in 2020. For web apps that are based on React, Jest is the preferred framework. Apart from React, Jest supports unit testing of Angular, VueJS, NodeJS, and others.
react-testing is the library
