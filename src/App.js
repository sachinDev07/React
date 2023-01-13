import ReactDOM from "react-dom/client";
// default export
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

/*
  ---- Planning for our website ----
  
  Header
      - logo
      - Nav Items
      - Cart 
  Body
      - Search bar
      - RestrauntList
          - RestrauntCard
                - Image
                - Name
                - Rating
                - Cusines
  Footer
      - links
      - Copyright

*/

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
