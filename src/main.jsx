import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Checkout from "./Components/Cart/Checkout";
import ErrorPage from "./ErrorPage";
// Styles 
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CartList from "./Components/Cart/CartList";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "products",
    element:<h1>Products</h1>,
  },
  {
    path: "checkout",
    element: <Checkout />,
    // errorElement: <ErrorPage />,
    children: [
      { path: "check", element: <p>Path</p> ,},
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
