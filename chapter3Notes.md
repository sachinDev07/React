# Chapter-3 Notes

    1. What is JSX

       JSX (JavaScript XML) is a syntax extension for JavaScript that allows us to write HTML-like code in
       our JavaScript files. It is used in combination with the React library to create user interfaces (UIs) for web applications.

       JSX is not a separate language from JavaScript, but rather a syntax that gets compiled into JavaScript
       at runtime. It allows us to mix HTML-like code with JavaScript in a declarative way, which can make it
       easier to write and maintain UI code. 

       const element = <h1>Hello, world!</h1>;
---
    2. Write superpowers of JSX.

       - Improved readability: Because JSX looks like HTML, it can make your code more readable and easier to
         understand, especially if you are familiar with HTML.

       - Type safety: JSX can be type-checked, which can help catch errors early in the development process.

       - Improved performance: JSX is compiled to JavaScript, which can improve the performance of our
         application.

       - Reusable components: JSX allows us to define reusable components, which can make it easier to build and
         maintain large applications.
---
    3. Role of 'type' attribute in script tag? what options can I use there.

       The 'type' attribute in script tag is use to specify the type of script being used in the 'script'
       element. The value of the 'type' should be a MIME type, such as 'text/javascript' or 'text/ecmascript'.
---
    4. {TitleComponent} vs {<TitleComponent />} vs {<TitleComponent></TitleComponent>}  in JSX.
   
        In JSX, the curly braces {} are used to embed expressions in JSX. There are three different ways you can
        use curly braces in JSX, depending on what you want to achieve:

      1. {TitleComponent} - This syntax is used to include a reference to a JSX element. It will render the
                           element as-is.

      2. {<TitleComponent />} - This syntax is used to include a JSX element inline. It will render the element
                           as-is.

      3. {<TitleComponent></TitleComponent>} - This syntax is used to include a JSX element inline and specify
                           the element's children. It will render the element and its children as-is.