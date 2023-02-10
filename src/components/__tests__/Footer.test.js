import { render } from "@testing-library/react";
import Footer from "../Footer";
import { StaticRouter } from "react-router-dom/server";
import { Provider } from "react-redux";


test("Footer should be rendered on rendering page", () => {

  const footer = render(
    <StaticRouter>
      <Footer />
    </StaticRouter>
  );

  const courseName = footer.getByTestId('course-name');
  expect(courseName.innerHTML).toBe("&lt; React /&gt;");

});
