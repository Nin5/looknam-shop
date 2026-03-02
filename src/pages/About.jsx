function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 py-12 px-4">
      <div className="max-w-6xl mx-auto space-y-10">

        {/* 🔹 ส่วนหัว */}
        <div className="bg-white shadow-xl rounded-3xl p-10 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            เกี่ยวกับร้านลูกน้ำ บรรจุภัณฑ์
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            เว็บไซต์นี้จัดทำขึ้นเพื่อการศึกษา รายวิชา Web Development
            โดยพัฒนาในรูปแบบระบบร้านค้าออนไลน์
            รองรับการสมัครสมาชิก การเข้าสู่ระบบ
            และระบบตะกร้าสินค้าแบบครบวงจร
          </p>
        </div>

        {/* 🔹 ข้อมูลร้าน */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white shadow-lg rounded-2xl p-8 space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">
              📍 ข้อมูลร้าน
            </h2>
            <p className="text-gray-600">
              <strong>ชื่อร้าน:</strong> ลูกน้ำ บรรจุภัณฑ์
            </p>
            <p className="text-gray-600">
              <strong>ที่อยู่:</strong> จังหวัดนครปฐม ประเทศไทย
            </p>
            <p className="text-gray-600">
              <strong>โทรศัพท์:</strong> 08x-xxx-xxxx
            </p>
            <p className="text-gray-600">
              <strong>เวลาทำการ:</strong> จันทร์ - เสาร์ 08:00 - 17:00 น.
            </p>
          </div>

          {/* 🔹 จุดเด่น */}
          <div className="bg-white shadow-lg rounded-2xl p-8 space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">
              ⭐ จุดเด่นของร้าน
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>จำหน่ายบรรจุภัณฑ์คุณภาพสูง</li>
              <li>จำหน่ายผลิตภัณฑ์เกี่ยวกับเบเกอรี่</li>
              <li>ราคาส่งสำหรับร้านค้า</li>
              <li>ระบบสั่งซื้อออนไลน์ใช้งานง่าย</li>
            </ul>
          </div>
        </div>

        {/* 🔹 แผนที่ร้าน */}
        <div className="bg-white shadow-xl rounded-3xl p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            🗺 แผนที่ร้าน
          </h2>

          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              title="map"
              src="https://www.google.com/maps?q=Nakhon%20Pathom&output=embed"
              width="100%"
              height="400"
              allowFullScreen=""
              loading="lazy"
              className="border-0"
            ></iframe>
          </div>
        </div>

      </div>
    </div>
  );
}

export default About;