import React from "react";

const Blogs = () => {
  return (
    <div className="mt-20 lg:px-20">
      <div
        tabIndex="0"
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          How will you improve the performance of a React Application?
        </div>
        <div className="collapse-content">
          <p>
            Improving the performance is the key to developers who are mindful
            of keeping the user experinences positive and good.In react
            application the UI is already should be fast and it should feel good
            to the users, However there are some thing to maintain the
            application performnce improvments.Developer Should check those
            things for optimizing react application , this will help the user
            experinences feels good. <br /> The main key things to improve the
            react application performance improvements:
          </p>
          <p>1.Use React.Fragment to Avoid Adding Extra Nodes to the DOM</p>
          <p>2.Code-splitting in React using dynamic import()</p>
          <p>3.Avoid using Index as Key for map</p>
          <p>4.Avoid Spreading props on DOM elements</p>
          <p>5.Consider Server-side Rendering etc</p>
        </div>
      </div>
      <div
        tabIndex="0"
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-4"
      >
        <div className="collapse-title text-xl font-medium">
          What are the different ways to manage a state in a React application?
        </div>
        <div className="collapse-content">
          <p>
            In Modern React application we use functional components. Components
            are just JavaScript functions that are reusable bits of code. The
            main purpose of componets is to design the code in a modular format,
            where we can use any componets in different places, It makes
            developer experience so good and thinkful. State is an object that
            holds information for these components but in plain JavaScript
            function there is no way to store information which we can use again
            and again for that we need state to remember the data we are using
            for our components.
            <br /> There are a lots of way to manage this state.Some of the
            popular ways are:
          </p>
          <p>1.Use the UseState Hook</p>
          <p>2.Use useEffect to Read State Updates</p>
          <p>3.React context or Context Api</p>
          <p>4.Use the UseReducer Hook</p>
          <p>5.Use the Redux library etc.</p>
        </div>
      </div>
      <div
        tabIndex="0"
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-4"
      >
        <div className="collapse-title text-xl font-medium">
          Why should we not update the state directly?
        </div>
        <div className="collapse-content">
          <p>
            In React we know when we changed or update something.it always
            renders all the components that are in its tree,React maintain a
            virtual DOM to change props or stated. React keeps a track record of
            all its virtual DOM.whenever a change happens, all the components
            are rendered and this new virtual DOM is then compared with the old
            virtual DOM.Only the differences found are then reflected in the
            original DOM.It's obvious from the statement that if we update the
            state directly, it will change the reference of the state in the
            previous virtual DOM too. So, React will not be able to see that
            there is a change of the state and so it will not be reflected in
            the original DOM until we reload.
          </p>
        </div>
      </div>
      <div
        tabIndex="0"
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-4"
      >
        <div className="collapse-title text-xl font-medium">
          How does prototypical inheritance work?
        </div>
        <div className="collapse-content">
          <p>
            JavaScript is a prototype-based, Object Oriented Programming
            Language. After ES6 JavaScript allow the prototypical inheritance
            which means object and method can be shared ,and extended.This is
            very powerful because it saves a lot of hours of coding the same
            code again.We use a JavaScript prototype to add new properties and
            methods to an existing object constructor. We can then essentially
            tell our JS code to inherit properties from a prototype.
            Prototypical inheritance allows us to reuse the properties or
            methods from one JavaScript object to another through a reference
            pointer function.prototypical inheritance is an invaluable tool in
            the world of website development and server management.
            Specifically, prototypes and prototypical inheritance are commonly
            used in many web application frameworks, such as AngularJS, to allow
            sharing of common behavior and state among similar components.
          </p>
        </div>
      </div>
      <div
        tabIndex="0"
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-4"
      >
        <div className="collapse-title text-xl font-medium">
          What is a unit test? Why should write unit tests?
        </div>
        <div className="collapse-content">
          <p>
            Unit test is a type of software testing where individual units or
            software components are tested for their optimization and
            peformances.There are two type of unit test, One is manually where
            we verify the correctness of code , another is automated which is
            done by writing some script.
          </p>
          <p>
            1. We should write unit tests beacuse unite test same time and
            money.Without testing user can raised issues which will create ne
            bug when we are going to fix them.
          </p>
          <p>2. It simplifies the debugging process.</p>
          <p>3.Unit tests make code reuse easier.</p>
          <p>
            4.Well-written unit tests act as documentation for your code. Any
            developer can quickly look at your tests and know the purpose of
            your functions.
          </p>
          <p>5.Unit tests reduce the bugs a lot in the application.</p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
