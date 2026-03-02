import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Cart() {
  const {
    cart,
    addToCart,
    decreaseQuantity,
    removeFromCart,
    totalPrice,
    clearCart
  } = useContext(CartContext);

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-semibold tracking-tight 
               text-gray-900 mb-4">
            🛒 ตะกร้าสินค้า
        </h1>

      <div className="mb-6">
          <button
            onClick={() => navigate("/products")}
            className="bg-gray-200 hover:bg-gray-300 
                        px-5 py-2 rounded-xl 
                        transition duration-300"
          >
           ← กลับไปเลือกสินค้า
        </button>
      </div>

        {cart.length === 0 ? (
          <div className="text-center bg-white p-12 rounded-3xl shadow-lg">
            <p className="text-gray-500 mb-6 text-lg">
              ยังไม่มีสินค้าในตะกร้า
            </p>
            <button
              onClick={() => navigate("/products")}
              className="bg-orange-600 text-white px-8 py-3 
                         rounded-2xl hover:bg-orange-700
                         transition duration-300 shadow-md"
            >
              เลือกซื้อสินค้า
            </button>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-10">

            {/* 🛍 ซ้าย: รายการสินค้า */}
            <div className="lg:col-span-2 space-y-6">
              {cart.map(item => (
                <div
                  key={item.id}
                  className="bg-white shadow-md rounded-2xl p-6 
                             flex flex-col md:flex-row 
                             items-center gap-6 hover:shadow-xl 
                             transition duration-300"
                >
                  <img
                    src={`http://localhost:3001${item.image}`}
                    alt={item.name}
                    className="w-32 h-32 object-contain 
                               bg-gray-100 rounded-xl p-3"
                  />

                  <div className="flex-1">
                    <h2 className="text-xl font-semibold text-gray-900">
                      {item.name}
                    </h2>
                    <p className="text-gray-500 mt-1">
                      ฿{item.price.toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-400 mt-1">
                      รวม: ฿{(item.price * item.quantity).toLocaleString()}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="bg-red-500 text-white 
                                 w-9 h-9 rounded-full"
                    >
                      -
                    </button>

                    <span className="font-bold text-lg">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => addToCart(item)}
                      className="bg-green-500 text-white 
                                 w-9 h-9 rounded-full"
                    >
                      +
                    </button>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-gray-500 hover:text-red-600 
                                 text-sm ml-3"
                    >
                      ลบ
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* 💳 ขวา: สรุปราคา */}
            <div className="bg-white shadow-xl rounded-3xl p-8 
                            h-fit sticky top-10">

              <h2 className="text-2xl font-semibold 
                             text-gray-900 mb-6">
                สรุปคำสั่งซื้อ
              </h2>

              <div className="flex justify-between mb-4 text-gray-600">
                <span>จำนวนสินค้า</span>
                <span>{cart.length} รายการ</span>
              </div>

              <div className="flex justify-between mb-6 text-lg font-medium">
                <span>ยอดรวม</span>
                <span className="text-green-600 font-bold">
                  ฿{totalPrice.toLocaleString()}
                </span>
              </div>

              <button
                className="w-full bg-orange-600 text-white 
                           py-3 rounded-2xl 
                           hover:bg-orange-700 
                           transition duration-300 
                           shadow-md hover:shadow-lg"
              >
                ชำระเงิน
              </button>

              <button
                onClick={clearCart}
                className="w-full mt-4 text-red-600 
                           hover:underline text-sm"
              >
                เคลียร์ตะกร้า
              </button>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;