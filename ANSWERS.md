- [ ] Why would you use class component over function components (removing hooks from the question)?

Class components are stateful, function components (without hooks) are stateless. So if we want to use state, some of our components must be class ones.



- [ ] Name three lifecycle methods and their purposes.

-render() - It returns the HTML(JSX) we want to display in a component.
-componentDidMount() - It is invoked immediately after a component is mounted, and is run once only. It is a good place to put a network request or change the state with new data, and then we can render the element with updated data.
-componentDidUpdate() - It is invoked immediately after updating occurs. It allows us to check whether props or state has been changed, and if so the changed state is rendered.



- [ ] What is the purpose of a custom hook?

Custom hooks follow the same logic and naming as all other hooks and are reusable. We can build custom hooks to apply state and use it for anything, like controling inputs, managing event listeners etc.



- [ ] Why is it important to test our apps?

Because it is easier to debug, provides safety as we are making changes to the code, allows us to think what can potentially go wrong with existing code, and allows us to trust the code. Also, manual testing is much more time-consuming, and so more expensive.