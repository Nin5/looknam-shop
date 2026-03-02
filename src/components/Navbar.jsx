import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const { cart, totalPrice } = useContext(CartContext);
  const { user, logout } = useContext(AuthContext);

  const [showCart, setShowCart] = useState(false);

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <nav className="bg-gradient-to-r from-orange-600 to-orange-700 backdrop-blur-md text-white 
                    shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 
                      flex justify-between items-center">

        {/* 🔷 Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold tracking-wide 
                     hover:text-amber-200 transition duration-300"
        >
          🛍 Looknam Shop
        </Link>

        {/* 🔷 Menu Section */}
        <div className="flex items-center gap-8 relative text-lg font-medium">

          {/* Home */}
          <Link
            to="/"
            className="hover:text-amber-200 transition"
          >
            Home
          </Link>

          {/* Products */}
          <Link
            to="/products"
            className="hover:text-amber-200 transition"
          >
            Products
          </Link>

         

          {/* 🛒 Cart Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setShowCart(true)}
            onMouseLeave={() => setShowCart(false)}
          >
            <Link
              to="/cart"
              className="relative hover:text-amber-200 transition"
            >
              Cart
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-5 
                                 bg-red-500 text-white text-xs 
                                 px-2 py-1 rounded-full shadow-md">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Dropdown */}
            {showCart && (
              <div className="absolute right-0 mt-4 w-80 
                              bg-white text-black 
                              rounded-2xl shadow-2xl 
                              p-5 z-50 animate-fadeIn">

                <h3 className="font-semibold mb-3">
                  สินค้าในตะกร้า
                </h3>

                {cart.length === 0 ? (
                  <p className="text-gray-500 text-sm">
                    ไม่มีสินค้าในตะกร้า
                  </p>
                ) : (
                  <>
                    {cart.slice(0, 3).map(item => (
                      <div
                        key={item.id}
                        className="flex justify-between 
                                   text-sm mb-2"
                      >
                        <span>{item.name}</span>
                        <span>x{item.quantity}</span>
                      </div>
                    ))}

                    <div className="border-t pt-3 mt-3 
                                    text-sm font-semibold 
                                    flex justify-between">
                      <span>รวม</span>
                      <span className="text-green-600">
                        ฿{totalPrice.toLocaleString()}
                      </span>
                    </div>

                    <Link
                      to="/cart"
                      className="block text-center 
                                 bg-orange-600 text-white 
                                 mt-4 py-2 rounded-xl 
                                 hover:bg-orange-700 transition"
                    >
                      ไปที่ตะกร้า
                    </Link>
                  </>
                )}
              </div>
            )}
          </div>
           {/* About */}
          <Link
            to="/about"
            className="hover:text-amber-200 transition"
          >
            About
          </Link>

          {/* 👤 Auth Section */}
          {user ? (
            <div className="flex items-center gap-3 ml-4">
              <span className="font-medium">
                👋 {user.name}
              </span>
              <button
                onClick={logout}
                className="bg-red-500 px-3 py-1 
                           rounded-lg hover:bg-red-600 
                           transition"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-3 ml-4">
              <Link
                to="/login"
                className="px-4 py-2 rounded-xl 
                           border border-white 
                           hover:bg-white hover:text-orange-700 
                           transition"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 rounded-xl 
                           bg-amber-400 text-orange-900 
                           font-semibold 
                           hover:bg-amber-300 transition"
              >
                Register
              </Link>
            </div>
          )}

        </div>
      </div>
    </nav>
  );
}

export default Navbar;