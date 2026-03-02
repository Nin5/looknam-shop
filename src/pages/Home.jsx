import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br 
                    from-orange-50 via-amber-50 to-rose-50 
                    flex items-center">

      <div className="max-w-7xl mx-auto px-6 
                      grid md:grid-cols-2 gap-12 
                      items-center">

        {/* ฝั่งข้อความ */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl 
                         font-bold tracking-tight 
                         text-gray-900 leading-tight">
            ยินดีต้อนรับสู่ <br />
            <span className="text-orange-600">
              ร้านลูกน้ำ บรรจุภัณฑ์
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            ร้านจำหน่ายบรรจุภัณฑ์คุณภาพสูงและผลิตภัณฑ์เกี่ยวกับเบเกอรี่
            คุณภาพดี ราคาคุ้มค่า พร้อมบริการสั่งซื้อออนไลน์ที่สะดวกสบาย
          </p>

          <div className="mt-8 flex justify-center md:justify-start gap-4">
            <button
              onClick={() => navigate("/products")}
              className="bg-orange-600 text-white 
                         px-8 py-3 rounded-2xl 
                         hover:bg-orange-700 
                         transition duration-300 
                         shadow-lg hover:shadow-xl"
            >
              เลือกซื้อสินค้า
            </button>

            <button
              onClick={() => navigate("/cart")}
              className="border border-orange-600 
                         text-orange-600 
                         px-8 py-3 rounded-2xl 
                         hover:bg-orange-600 
                         hover:text-white 
                         transition duration-300"
            >
              ดูตะกร้า
            </button>
          </div>
        </div>

        {/* ฝั่งรูปภาพ */}
        <div className="flex justify-center">
          <img
            src="images/home1.jpg"
            alt="Packaging products"
            className="w-full max-w-lg rounded-3xl 
                       shadow-2xl hover:scale-105 
                       transition duration-500"
          />
        </div>

      </div>
    </div>
  );
}

export default Home;