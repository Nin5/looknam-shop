import { Link } from "react-router-dom";
import { useState } from "react";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Register Data:", formData);
    // ตรงนี้สามารถเชื่อม API ได้ภายหลัง
  };

  return (
    <div className="min-h-screen flex items-center justify-center 
                    bg-gradient-to-br from-orange-100 to-amber-100 px-4">

      <div className="bg-white shadow-2xl rounded-3xl 
                      p-10 w-full max-w-md">

        {/* 🔷 Title */}
        <h1 className="text-3xl font-bold text-center 
                       text-gray-800 mb-8">
          สมัครสมาชิก
        </h1>

        {/* 🔷 Form */}
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Name */}
          <div>
            <label className="block text-gray-600 mb-2">
              ชื่อผู้ใช้
            </label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="กรอกชื่อของคุณ"
              className="w-full px-4 py-3 
                         border border-gray-300 
                         rounded-xl 
                         focus:outline-none 
                         focus:ring-2 
                         focus:ring-orange-500 
                         transition"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-600 mb-2">
              อีเมล
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full px-4 py-3 
                         border border-gray-300 
                         rounded-xl 
                         focus:outline-none 
                         focus:ring-2 
                         focus:ring-orange-500 
                         transition"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-600 mb-2">
              รหัสผ่าน
            </label>
            <input
              id="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="สร้างรหัสผ่าน"
              className="w-full px-4 py-3 
                         border border-gray-300 
                         rounded-xl 
                         focus:outline-none 
                         focus:ring-2 
                         focus:ring-orange-500 
                         transition"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-orange-600 text-white 
                       py-3 rounded-xl 
                       hover:bg-orange-700 
                       transition duration-300 
                       shadow-md hover:shadow-lg 
                       font-semibold"
          >
            สร้างบัญชี
          </button>

        </form>

        {/* 🔷 Divider */}
        <div className="my-6 text-center text-gray-400 text-sm">
          มีบัญชีอยู่แล้ว?
        </div>

        {/* 🔷 Login Link */}
        <Link
          to="/login"
          className="block text-center 
                     bg-amber-400 text-orange-900 
                     py-3 rounded-xl 
                     hover:bg-amber-300 
                     transition font-semibold"
        >
          เข้าสู่ระบบ
        </Link>

      </div>
    </div>
  );
}

export default Register;