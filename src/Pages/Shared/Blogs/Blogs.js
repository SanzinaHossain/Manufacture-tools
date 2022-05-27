import React from 'react'
import Footer from '../Footer/Footer'
const Blogs = () => {
  return (
    <div class="mt-7">
      <h1 class="text-4xl text-center text-red-500">All question Answer</h1>
   <div className='grid lg:grid-cols-3  grid-cols-1 gap-5 lg:mx-12 mx-7  lg:mt-12 mt-9'>
      <div class="card w-96 bg-green-300 shadow-xl">
    <div class="card-body items-center text-center">
      <h2 class="card-title text-black text-3xl text-red-500">How will you improve the performance of a React Application?</h2>
      <p className='text-black'>A React application may be made more efficient in a variety of ways. As an example, wherever possible, keep state of components local. Memorying React components to avoid unwanted re-renders is also a good strategy. In addition, dynamic imports in React allow for code-splitting (). React's virtualization of windows or lists. In React, photos may be loaded in a 'lazy' manner. Making Use of Structural Consistency. </p>
    </div>
  </div>
  <div class="card w-96 bg-green-300 shadow-xl">
    <div class="card-body items-center text-center">
      <h2 class="card-title text-black text-3xl text-red-500">What are the different ways to manage a state in a React application?</h2>
      <p className='text-black'>The four major forms of state you need to keep track of in your React projects are: Local state, Global state, Server state, and URL state. A component's local state refers to the data it keeps. Managing local state in React is often accomplished via the usage of the useState hook. Additionally, for both local and global states, useReducer is an option that may be implemented in any way. Under the hood, it is quite similar to useState, except that it takes a reducer instead of a starting state. You'd need local state for things like showing or hiding a modal component and keeping track of input data for forms that have been disabled.
</p>
    </div>
  </div>
  <div class="card w-96 bg-green-300 shadow-xl">
    <div class="card-body items-center text-center">
      <h2 class="card-title text-black text-3xl text-red-500">How does prototypical inheritance work?</h2>
      <p className='text-black'>There is an unnoticed [[Prototype]] property in every object in addition to its methods and attributes. JavaScript's Prototypal Inheritance capability may be used to provide extra methods and properties to objects. Inheritance is a process through which an object may take on the traits and behaviors of another object. The [[Prototype]] of an object may typically be obtained and modified using the Object.getPrototypeOf and Object.setPrototypeOf methods. The proto method is now often used in modern languages to set it.</p>
    </div>
  </div>
  <div class="card w-96 bg-green-300 shadow-xl">
    <div class="card-body items-center text-center">
      <h2 class="card-title text-black text-3xl text-red-500">Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts?</h2>
      <p className='text-black'>Using setState allows you to move a state from one component to another without having to change the original. SetState is required for integrating an item into the current state (). Components that are stateful or stateless cannot be known by their parents and children, and they should not be concerned about whether or not they are defined as functions or classes. Any React component may have a state attached to it. A user action or a system event may cause the state of a component to change. If the component's state changes, React re-renders it. Before changing the state's value, it is important to create an initial state setup.</p>
    </div>
  </div>
  <div class="card w-96 bg-green-300 shadow-xl">
    <div class="card-body items-center text-center">
      <h2 class="card-title text-black text-3xl text-red-500">You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
      <p className='text-black'>In order to discover a product by its name in an array, we will use array.find(). To get a truthy value, the callbackFn function is called once for each index in the array. If so, find returns the element's value instantly. Unless this is the case, find returns an error. For every index in the array, callbackFn is called, not only those that have been given values. If you use the callbackFn function offered by find, you may change the array that it is called on. Before the initial callbackFn activation, the items found by find are pre-set. Using Javascript's arr.find() function, you may obtain the value of the first member in an array that meets your criteria. If any of the array's items meet the criterion, the first one to meet it will print. Empty array items are not supported by this method, and it does not alter the original one.</p>
    </div>
  </div>
  <div class="card w-96 bg-green-300 shadow-xl">
    <div class="card-body items-center text-center">
      <h2 class="card-title text-black text-3xl text-red-500">What is a unit test? Why should write unit tests?</h2>
      <p className='text-black'>Unit tests are typically automated tests written and run by software developers to ensure that a section of an application (known as the "unit") meets its design and behaves as intended. In procedural programming, a unit could be an entire module, but it is more commonly an individual function or procedure.
       One of the benefits of unit tests is that they isolate a function, class or method and only test that piece of code. Higher quality individual components create overall system resiliency. Thus, the result is reliable code. Unit tests also change the nature of the debugging process.</p>
    </div>
  </div>
   </div>
   <Footer></Footer>
    </div>
  )
}

export default Blogs