import React, { useContext, useEffect, useState } from "react";
import style from "./Navbar.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/images/freshcart-logo.svg";
import { UserContext } from "../../Context/UserContext.js";
import { CartContext } from "../../Context/CartContext.js";

export default function Navbar() {
  const [scroll, setScroll] = useState("");

  const [isNavCollapsend, setIsNavCollapsend] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsend(!isNavCollapsend);

  let { countt, wishcount } = useContext(CartContext);
  let { userToken, setUserToken } = useContext(UserContext);
  let navigate = useNavigate();

  function logOut() {
    localStorage.removeItem("userToken");
    setUserToken(null);
    navigate("/login");
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY < 15) {
        setScroll("position-relative");
      } else {
        setScroll("fixed-top");
      }
    });
  }, []);

  return (
    <>
      <nav className={`navbar navbar-expand-lg bg-body-tertiary shadow-sm ${scroll}`}>
        <div className="container">
          <NavLink className="navbar-brand" to={"/"}>
            <img src={logo} alt="fresh Cart" />
         </NavLink>
          <button
            className={`navbar-toggler border-0 shadow-none  ${isNavCollapsend ? "collapsed" : ""}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded={!isNavCollapsend ? true : false}
            aria-label="Toggle navigation"
            onClick={handleNavCollapse}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`${isNavCollapsend ? "collapse" : "show collaps"} navbar-collapse`} id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {userToken != null ? (
                <>
                  <li className="nav-item fw-bold font-sm">
                    <NavLink className="nav-link" to={"/"}>
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item fw-bold font-sm">
                    <NavLink className="nav-link" to={"cart"}>
                      Cart
                   </NavLink>
                  </li>
                  <li className="nav-item fw-bold font-sm">
                    <NavLink className="nav-link" to={"products"}>
                      Products
                   </NavLink>
                  </li>
                  <li className="nav-item fw-bold font-sm">
                    <NavLink className="nav-link" to={"categories"}>
                      Categories
                   </NavLink>
                  </li>
                  <li className="nav-item fw-bold font-sm">
                    <NavLink className="nav-link" to={"brands"}>
                      Brands
                   </NavLink>
                  </li>
                  <li className="nav-item fw-bold font-sm">
                    <NavLink className="nav-link" to={"wishlist"}>
                      WishList
                   </NavLink>
                  </li>
                </>
              ) : (
                ""
              )}
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className={`nav-item d-flex align-items-center me-2 ${style.social}`}>
                <NavLink target="_blank" className="nav-link"  to={"https://www.facebook.com/profile.php?id=100022527661563&mibextid=ZbWKwL"}>
                  <i className="fa-brands fa-facebook me-3"></i>
               </NavLink>
                <NavLink target="_blank" className="nav-link" to={"https://www.linkedin.com/in/abdelwhab-mohamed-6454a6212?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"}>
                  <i className="fa-brands fa-linkedin me-3"></i>
               </NavLink>
                {userToken != null ? (
                  <NavLink className="position-relative nav-link" to={"cart"}>
                    <i className="fa-solid fa-cart-shopping me-3"></i>
                    {countt ? (
                    <span className={`${style.count}`}>{countt}</span>
                    ) : (
                      ""
                    )}
                 </NavLink>
                ) : (
                  ""
                )}
                {userToken != null ? (
                  <NavLink className="position-relative nav-linkes" to={"wishlist"}>
                    <i className="fa-solid fa-heart text-high--dark"></i>
                    {wishcount ? (
                    <span className={`${style.count}`}>{wishcount}</span>
                    ) : (
                      ""
                    )}
                 </NavLink>
                ) : (
                  ""
                )}
              </li>
              {userToken != null ? (
                <>
                  <li className="nav-item fw-bold font-sm">
                    <span  onClick={logOut} className="nav-link cursor-pointer">
                      SignOut
                    </span>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item fw-bold font-sm">
                    <NavLink className="nav-link" to={"register"}>
                      Register
                   </NavLink>
                  </li>
                  <li className="nav-item fw-bold font-sm">
                    <NavLink className="nav-link" to={"login"}>
                      Login
                   </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}