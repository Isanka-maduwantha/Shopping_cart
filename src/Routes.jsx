import App from "./App";
import Checkout from "./Components/Cart/Checkout";
import ErrorPage from "./ErrorPage";

const Routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "products",
    element: <h1>Products</h1>,
  },
  {
    path: "checkout",
    element: <Checkout />,
    // errorElement: <ErrorPage />,
  },
];

export default Routes;
