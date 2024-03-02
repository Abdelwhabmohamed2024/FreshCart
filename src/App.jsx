import React, { Suspense, lazy, useContext, useEffect } from "react";
import { RouterProvider, createHashRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Layout from "./Components/Layout/Layout.jsx";
import ProductedRoute from "./Components/ProtectedRoute/ProtectedRoute.jsx";
import Cart from "./Components/Cart/Cart.jsx";
import ProductDetails from "./Components/ProductDetails/ProductDetails.jsx";
import AllOrders from "./Components/AllOrders/AllOrders.jsx";
import ShippingAddress from "./Components/ShippingAddress/ShippingAddress.jsx";
import Products from "./Components/Products/Products.jsx";
import Register from "./Components/Register/Register.jsx";
import Login from "./Components/Login/Login.jsx";
import ForgetPassword from "./Components/ForgetPassword/ForgetPassword.jsx";
import VerifyCode from "./Components/VerifyCode/VerifyCode.jsx";
import UdatePassword from "./Components/UdatePassword/UdatePassword.jsx";
import NotFound from "./Components/NotFound/NotFound.jsx";
import { UserContext } from "./Context/UserContext.js";
import Home from "./Components/Home/Home.jsx";



const Categories = lazy(() => import("./Components/Categories/Categories.jsx"));
const Brands = lazy(() => import("./Components/Brands/Brands.jsx"));
const WishList = lazy(() => import("./Components/WishList/WishList.jsx"));

export default function App() {
  let routers = createHashRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: (
            <ProductedRoute>
              <Home />
            </ProductedRoute>
          ),
        },
        {
          path: "cart",
          element: (
            <ProductedRoute>
              <Cart />
            </ProductedRoute>
          ),
        },
        {
          path: "brands",
          element: (
            <Suspense fallback={<div className="vh-100 bg-dark text-light">Loading ...</div>}>
              <ProductedRoute>
                <Brands />
              </ProductedRoute>
            </Suspense>
          ),
        },
        {
          path: "productdetails/:id",
          element: (
            <ProductedRoute>
              <ProductDetails />
            </ProductedRoute>
          ),
        },
        {
          path: "categories",
          element: (
            <Suspense fallback={<div className="vh-100 bg-dark text-light">Loading ...</div>}>
              <ProductedRoute>
                <Categories />
              </ProductedRoute>
            </Suspense>
          ),
        },
        {
          path: "allorders",
          element: (
            <ProductedRoute>
              <AllOrders />
            </ProductedRoute>
          ),
        },
        {
          path: "shippingaddress/:cartId",
          element: (
            <ProductedRoute>
              <ShippingAddress />
            </ProductedRoute>
          ),
        },
        {
          path: "products",
          element: (
            <ProductedRoute>
              <Products />
            </ProductedRoute>
          ),
        },
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "forgetpassword",

          element: <ForgetPassword />,
        },
        {
          path: "verifycode",

          element: <VerifyCode />,
        },
        {
          path: "updatepassword",

          element: <UdatePassword />,
        },
        {
          path: "wishlist",

          element: (
            <Suspense fallback={<div className="vh-100 bg-dark text-light">Loading ...</div>}>
              <ProductedRoute>
                <WishList />
              </ProductedRoute>
            </Suspense>
          ),
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);

  let { setUserToken } = useContext(UserContext);
  useEffect(() => {
    if (localStorage.getItem("userToken")) {
      setUserToken(localStorage.getItem("userToken"));
    }
  }, []);

  return (
    <>
      <RouterProvider router={routers}></RouterProvider>
      <Toaster />
    </>
  );
}