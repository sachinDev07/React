import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import RestaurentMenu from "./components/RestaurentMenu";
import Profile from "./components/Profile";
import { lazy, Suspense } from "react";
import Shimmer from "./components/Shimmer";
import { Provider } from "react-redux";
import store from "./utils/store";
import useOnline from "./hooks/useOnline";
import Login from "./components/Login";

const InstaMart = lazy(() => import("./components/InstaMart"));

const AppLayout = () => {

  const isOnline = useOnline();
  if (!isOnline){
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <h1 className="text-3xl  text-gray-500">Ooops!</h1>
        <h2 className="text-4xl text-gray-500">Please check your Internet Connection !!!</h2>
      </div>
    )
  }

  return (
    <Provider store={store}>
      <Header />
      <Outlet />
      <Footer />
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurent/:resId",
        element: <RestaurentMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <InstaMart />
          </Suspense>
        ),
      },
      
    ],
  },
  {
    path : "/login",
    element : <Login />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
