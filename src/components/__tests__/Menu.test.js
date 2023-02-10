import "@testing-library/jest-dom";
import { render, waitFor, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import { MENU_DATA } from "../../mocks/data";
import Header from "../Header";
import RestaurentMenu from "../RestaurentMenu";


global.fetch = jest.fn(() => {
  return Promise.resolve({
    json : () => {
       return Promise.resolve(MENU_DATA); 
    },
  });
});


test("Add items to cart", async () => {
  const restaurentMenu = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
        <RestaurentMenu />
      </Provider>
    </StaticRouter>
  );

  // we have to wait till our data loads...
  await waitFor( () => expect(restaurentMenu.getByTestId("menu")));

  const addBtn = restaurentMenu.getAllByTestId("addBtn");

  fireEvent.click(addBtn[0]);

  const cart = restaurentMenu.getByTestId("cart");

  expect(cart.innerHTML).toBe("1");

});


