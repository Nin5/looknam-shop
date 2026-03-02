import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3001/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(err => console.error(err));
  }, [id]);

  if (!product) return <p className="text-center mt-20">Loading...</p>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 py-16 px-4">
      <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-3xl 
                      p-8 md:p-12 grid md:grid-cols-2 gap-12">

        {/* รูปสินค้า */}
        <div className="flex justify-center bg-gray-100 rounded-2xl p-6">
          <img
            src={`http://localhost:3001${product.image}`}
            alt={product.name}
            className="w-full max-w-lg object-contain 
                       rounded-xl transition duration-500 hover:scale-105"
          />
        </div>

        {/* รายละเอียดสินค้า */}
        <div className="flex flex-col gap-6">

          <h1 className="text-3xl md:text-4xl font-semibold 
                         tracking-tight text-gray-900">
            {product.name}
          </h1>

          <p className="text-gray-600 leading-relaxed text-lg">
            {product.description}
          </p>

          <p className="text-3xl font-bold text-green-600">
            ฿{product.price.toLocaleString()}
          </p>

          {/* ปุ่ม */}
          <div className="flex flex-wrap gap-4 pt-4">
            <button
              onClick={() => addToCart(product)}
              className="bg-orange-600 hover:bg-orange-700 
                         text-white px-6 py-3 rounded-xl 
                         text-base font-medium
                         transition duration-300 shadow-md hover:shadow-lg"
            >
              🛒 เพิ่มลงตะกร้า
            </button>

            <button
              onClick={() => navigate("/cart")}
              className="bg-rose-600 hover:bg-rose-700 
                         text-white px-6 py-3 rounded-xl 
                         text-base font-medium
                         transition duration-300 shadow-md hover:shadow-lg"
            >
              ไปที่ตะกร้า
            </button>
          </div>

          <button
            onClick={() => navigate(-1)}
             className="bg-gray-200 hover:bg-gray-300 
             px-5 py-2 rounded-xl 
             transition duration-300"
          >
            ← กลับหน้าก่อนหน้า
          </button>

        </div>
      </div>
    </div>
  );
}

export default ProductDetail;