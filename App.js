
import ReactDOM from "react-dom/client";

//  JSX => React.createElement => object => HTML(DOM).

// this is a normal javascript function.
const Title = () => (           
  <h1 id="title" key="1">
      This is heading
  </h1>
);

// React Component
//  - Functional component
//    Name of the component starts with Capital letter, it is a good practice,not mandotory

const HeaderComponent = () => {
  return(
    <div>
         <Title />   {/* or it can be written as  { Title() }    */}
      <h1>This is functional component</h1>
      <h2>This is h2 tag</h2>
    </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent/>);
