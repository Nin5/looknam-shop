import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 py-12 px-4">
      
      {/* จำกัดความกว้างทั้งหมด */}
      <div className="max-w-6xl mx-auto">

        {/* หัวข้อ */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-orange-900">
            🛍️ สินค้าทั้งหมด
          </h1>
          <p className="text-gray-600 mt-3 text-sm md:text-base">
            เลือกชมสินค้าคุณภาพดีจากร้านลูกน้ำ บรรจุภัณฑ์
          </p>
        </div>

        {/* Grid สินค้า */}
        <div className="
          grid 
          gap-6 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-3
          auto-rows-fr
        ">
          {products.map(product => (
            <div
              key={product.id}
              className="transition duration-300 hover:-translate-y-1"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Products;