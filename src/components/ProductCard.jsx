import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div
      className="group bg-white rounded-2xl shadow-md 
                 hover:shadow-2xl hover:-translate-y-2 
                 transition-all duration-500 overflow-hidden
                 h-full flex flex-col"
    >
      {/* รูปสินค้า */}
      <div className="h-64 w-full bg-gray-100 flex items-center justify-center overflow-hidden">
        <img
          src={`http://localhost:3001${product.image}`}
          alt={product.name}
          className="max-h-full max-w-full object-contain 
                     group-hover:scale-110 transition duration-500"
        />
      </div>

      {/* รายละเอียด */}
      <div className="p-6 flex flex-col gap-4 flex-grow">

        <h2 className="w-full text-2xl font-semibold 
                       leading-snug tracking-tight 
                       text-gray-900 group-hover:text-orange-600 
                       transition duration-300 break-words">
          {product.name}
        </h2>

        <p className="text-2xl font-bold text-green-600">
          ฿{product.price.toLocaleString()}
        </p>

        <Link
          to={`/products/${product.id}`}
          className="mt-2 text-center py-3 rounded-xl 
                     bg-gradient-to-r from-orange-600 to-rose-600
                     hover:from-rose-600 hover:to-orange-600
                     text-white font-medium
                     transition-all duration-300 
                     shadow-md hover:shadow-lg"
        >
          ดูรายละเอียด
        </Link>

      </div>
    </div>
  );
}

export default ProductCard;