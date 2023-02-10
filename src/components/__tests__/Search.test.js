import "@testing-library/jest-dom";
import { render, waitFor, fireEvent } from "@testing-library/react";
import Body from "../Body";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import { RESTAURENT_DATA } from "../../mocks/data";


global.fetch = jest.fn(() => {
  return Promise.resolve({
    json : () => {
       return Promise.resolve(RESTAURENT_DATA); 
    },
  });
});


test("Shimmer should load on Home page", () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  const shimmer = body.getByTestId("shimmer")

  expect(shimmer.children.length).toBe(3);

  console.log(shimmer);
});


test("Restaurent page should load on Home page", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  // we have to wait till our data loads...
  await waitFor( () => expect(body.getByTestId("search-btn")));

  const restList = body.getByTestId("restaurent-list")

  expect(restList.children.length).toBe(15);

});


test("Search for string(food) on Home page", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  // we have to wait till our data loads...
  await waitFor( () => expect(body.getByTestId("search-btn")));

  const input = body.getByTestId("search-input");

  fireEvent.change(input, {
    target : {
      value : "food",
    },
  });

  const searchBtn = body.getByTestId("search-btn");

  fireEvent.click(searchBtn);

  const restList = body.getByTestId("restaurent-list");

  expect(restList.children.length).toBe(0);

});


