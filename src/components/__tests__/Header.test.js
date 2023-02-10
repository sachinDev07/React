import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";

test("Logo should load on rendering header", () => {
  // load the header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  // check if logo is loaded
  const logo = header.getAllByTestId("logo");

  expect(logo[0].src).toBe("http://localhost/dummy.png");

});


test("Online status should be green on rendering header", () => {
    // load the header
    const header = render(
      <StaticRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </StaticRouter>
    );
  
    
    const onlineStatus = header.getByTestId("online-status");
    
    expect(onlineStatus.innerHTML).toBe("✅");
  
  });



  test("Cart should have 0 items on rendering header", () => {
    // load the header
    const header = render(
      <StaticRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </StaticRouter>
    );
  
    
    const cart = header.getByTestId("cart");
    
    expect(cart.innerHTML).toBe("0");
  
  });
