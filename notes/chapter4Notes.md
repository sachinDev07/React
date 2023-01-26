  # Chapter-4 Notes
  
    1. Is JSX is mandatory for React?
    
       JSX is not mandatory for React, but it is highly recommended as it is a syntax extension for
       JavaScript that allows us to write HTML-like elements in your JavaScript code. It makes it
       easier to understand the structure of your components and improves the readability of our
       code. We can also use React without JSX by using React.createElement() to create and render
       elements..
---

    2. Is ES6 mandatory for React ?
    
       ES6, also known as ECMAScript 2015, is not mandatory for React, but it is highly recommended
       as it provides many features that make it easier to write and maintain React applications.
       Some of these features include arrow functions,template literals,destructuring, and classes
       React also uses some of the ES6 features such as import and export for modules. While we can
       use React with plain JavaScript, using ES6 can improve the readability and maintainability of
       our code. It's good to be aware of the features it provides and try to use them as much as
       possible.
---

    3. How can I write comments in JSX ?
    
       In JSX, we can use JavaScript comments to add comments to your code. JavaScript comments are not visible
       in the final rendered HTML, they are only visible in the source code.
    
       There are two types of comments in JavaScript:
    
       Single-line comments:** These comments start with "//" and continue until the end of the line.
    
       // This is a single-line comment
        
    
       Multi-line comments:** These comments start with "/*" and end with "*/". Anything between the opening
       and closing tags is part of the comment.
    
   
       /*
       This is a
       multi-line comment
       */
   
       We can use these comments inside JSX by wrapping them inside curly braces {}
    
       <div>
         {/* this is a comment */}
         <p>Hello World!</p>
       </div>
    
       It is also worth noting that, in JSX, we can use HTML-style comments, **`<!-- -->`**, but it is not
       recommended because they are not treated as JavaScript comments, they are treated as text nodes and will
       appear in the final rendered HTML.
    
        <div>
          <!-- this is a comment -->
          <p>Hello World!</p>
        </div>
    
       It's important to note that these comments will be visible in the final HTML.
---

    4. What is <React.Fragment></React.Fragment> and <></> ?
    
       <React.Fragment>`** is a component that allows you to group a list of children without adding extra
       nodes to the DOM. It is useful when you have a component that renders multiple elements, but you don't
       want to add an extra div or other element to the DOM.
    
        <React.Fragment>
            <div>Hello</div>
            <div>World</div>
        </React.Fragment>

       This will be rendered as:
    
        <div>Hello</div>
        <div>World</div>
    
       As an alternative to **`<React.Fragment>`**, in React 16.2 or later, you can use the shorthand syntax
       **`<>`** and **`</>`** which is known as Fragment shorthand
    
        <>
            <div>Hello</div>
            <div>World</div>
        </>

    
       This will also be rendered as:
    
        <div>Hello</div>
        <div>World</div>
    
       It's important to note that, whether you use **`<React.Fragment>`** or **`<>`** the component doesn't
       add any extra markup to the DOM, and it's just a way to group elements.
---

    5. What is virtual DOM ?
    
       The **virtual DOM** is a representation of the **actual DOM** (**Document Object Model**) in memory. It
       is a lightweight JavaScript object that serves as an intermediary between the React components and the
       actual DOM. When a component's **state or props** change, React uses the virtual DOM to efficiently
       update the actual DOM with the minimum number of changes necessary.
    
       When a component's state or props change, React first updates the virtual DOM with the new values. It
       then compares the virtual DOM with the previous version of the virtual DOM, and it calculates the
       minimum number of changes necessary to update the actual DOM. These changes are then made to the actual
       DOM, which updates the component on the page.
---

    6. What is reconciliation ?
    
       Reconciliation is the process that React uses to determine how to update the actual DOM when the
       component's state or props change. The goal of the reconciliation process is to make the minimum number
       of changes necessary to update the actual DOM, in order to improve the performance of the application.
    
       The process of reconciliation begins when a component's state or props change. React first updates the
       virtual DOM with the new values. It then compares the virtual DOM with the previous version of the
       virtual DOM, and it calculates the minimum number of changes necessary to update the actual DOM. These
       changes are then made to the actual DOM, which updates the component on the page.
    
       The reconciliation process is efficient because it uses a technique called "diffing" which compares the
       previous version of the virtual DOM with the new version, and it figures out the minimum number of
       changes necessary. This reduces the number of expensive DOM operations that need to be performed.
    
       React uses a specific algorithm for reconciling the changes, it's called "Fiber" algorithm, it's
       designed to be efficient and perform well even when updating large and complex components.
---

    7. Why do we need keys in react? When do we need keys in react ?
    
       In React, keys are used to identify which items in a list have changed, been added, or been removed.
       They help React to determine the minimum number of changes necessary to update the actual DOM, by
       allowing React to track the identity of each item in a list.
    
       When rendering a list of items in React, it is important to assign a unique key to each item. This
       allows React to efficiently update the list when items are added, removed, or reordered, by determining
       which items have changed, instead of re-rendering the entire list.
    
       When we are mapping an array of items and generating a list of components, we should use the key
       property to assign a unique key to each component. The key should be a unique identifier for the item,
       such as an ID or index.
    
       const items = [
         { id: 1, name: 'Item 1' },
         { id: 2, name: 'Item 2' },
         { id: 3, name: 'Item 3' }
       ];
    
       function ItemList(props) {
         return (
           <ul>
             {props.items.map((item) => (
               <li key={item.id}>{item.name}</li>
             ))}
           </ul>
         );
       }
    
       The key should be placed on the component that is being repeated, and it should be a **unique** value
       for each component. Using the index of the item as a key is not recommended, as it can change when items
       are added or removed from the list, causing React to re-render all of the items instead of just the
       changed items.
    
       In summary, keys are used to identify which items in a list have changed, been added, or been removed.
       By assigning unique keys to each item, React is able to determine the minimum number of changes
       necessary to update the actual DOM, which improves the performance of the application
---

    8. Can we use Index as keys in React ?
    
       It is possible to use the **index** of an item as a **key** when rendering a list of items in React, but
       it is generally not recommended. The key should be a **unique** identifier for the item, such as an ID
       or a unique value, and it should not change when items are added or removed from the list.
    
       When an item's index is used as a key, if an item is added or removed from the list, the indices of all
       the following elements change, causing React to re-render all of the items instead of just the changed
       items. This can lead to poor performance, particularly when working with large lists.
    
       Additionally, if you are sorting or filtering the data, the index will change and React will not be able
       to identify the correct element and it will re-render all of the items.
    
       It is better to use a unique identifier for each item, such as an ID. If the data doesn't have an unique
       identifier, you can use the item's value as a key.
    
       In summary, using the index as a key can lead to poor performance, particularly when working with large
       lists, and when sorting or filtering the data. It's better to use a unique identifier for each item,
       such as an ID, or if the data doesn't have an unique identifier, you can use the item's value as a key.
---

    9. What is props in React ?
    
       In React, props (short for "properties") are a way to pass data from a parent component to a child
       component. Props are used to customize a component's behavior and appearance, and they allow you to
       reuse a component with different data.
    
       Props are passed to a component as an object, and they can be accessed inside the component using the
       `this.props` object. For example, if a component is defined as follows:
    
       function Welcome(props) {
         return <h1>Hello, {props.name}</h1>;
       }
    
       we can use this component and pass it a name prop as follows:

        <Welcome name="John" />
---

    10. What is config driven UI ?
    
       "Configurable UI" refers to a design approach where the user interface (UI) of an application can be
       easily configured or customized to meet the specific needs of different users or use cases.
    
       Configurable UI design approach is beneficial for different types of applications, it allows users to
       customize their experience, which in turn increases the overall satisfaction and engagement.
    
       In summary, Configurable UI is a design approach that allows users to customize the layout, appearance
       and functionality of an application to suit their preferences. This can be achieved through a range of
       features such as customizable themes, resizable and movable widgets, add/remove functionality, and
       personalization options. It allows users to personalize their experience and increases overall
       satisfaction and engagement.


               _______________________  DONE  _______________________