import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./Pages/Home";
import RootLayout from "./Pages/Root";
import Products from "./Pages/Products";
import ErrorPage from "./Pages/Error";
import ProductDetail from "./Pages/ProductDetail";

// const routeDefinations = createRoutesFormElements(
//   <Route>
//     <Route path="/" element={<HomePage />} />
//     <Route path="/products" element={<Product />} />
//   </Route>
// );

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />, // this rout act as a parent rout
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <HomePage /> }, // every object represnt one route
      { path: "product", element: <Products /> },
      { path:'product/:productId', element: <ProductDetail/>}
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
