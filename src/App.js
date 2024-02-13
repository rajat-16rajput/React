import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Link,
} from "react-router-dom";
//import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import RestaurantMenu from "./Components/RestaurantMenu";
//import Groceries from "./Components/Groceries";

const Groceries = lazy(() => import("./Components/Groceries"));

const About = lazy(() => import("./Components/About"));

const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      {/*Replaced by the child route. The "dynamic outlet" will render the appropriate child component based on the current route. */}
      <Outlet />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,

    //if the path is incorrect
    errorElement: <Error />,

    //creating children routes which will dyanamically map and one of them will replace to the <Outlet/> component based on the path
    children: [
      {
        path: "/groceries",
        element: (
          <Suspense fallback={<>Loading...</>}>
            <Groceries />
          </Suspense>
        ),
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        //dyanamic routing ----> /restaurant/:resId<-- this value will be dyanamic
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root")); // NOTE : document.getElementById
root.render(<RouterProvider router={appRouter} />); // NOTE this! How did you add the component name to render method
