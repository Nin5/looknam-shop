import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!name.trim() || !password.trim()) return;

    // ตัวอย่าง mock login
    login({ name });
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center 
                    bg-gradient-to-br from-orange-100 to-amber-100 px-4">

      <div className="bg-white shadow-2xl rounded-3xl 
                      p-10 w-full max-w-md">

        {/* 🔷 Title */}
        <h1 className="text-3xl font-bold text-center 
                       text-gray-800 mb-8">
          เข้าสู่ระบบ
        </h1>

        {/* 🔷 Form */}
        <form onSubmit={handleLogin} className="space-y-6">

          {/* Username */}
          <div>
            <label className="block text-gray-600 mb-2">
              ชื่อผู้ใช้
            </label>
            <input
              type="text"
              placeholder="กรอกชื่อของคุณ"
              value={name}
              onChange={(e) => setName(e.target.value)}
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

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="กรอกรหัสผ่าน"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 
                           border border-gray-300 
                           rounded-xl 
                           focus:outline-none 
                           focus:ring-2 
                           focus:ring-orange-500 
                           transition pr-12"
                required
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-500 
                           hover:text-gray-700 text-sm"
              >
                {showPassword ? "ซ่อน" : "แสดง"}
              </button>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-orange-600 text-white 
                       py-3 rounded-xl 
                       hover:bg-orange-700 
                       transition duration-300 
                       shadow-md hover:shadow-lg 
                       font-semibold"
          >
            Login
          </button>

        </form>

        {/* Divider */}
        <div className="my-6 text-center text-gray-400 text-sm">
          ยังไม่มีบัญชี?
        </div>

        {/* Register */}
        <Link
          to="/register"
          className="block text-center 
                     bg-amber-400 text-orange-900 
                     py-3 rounded-xl 
                     hover:bg-amber-300 
                     transition font-semibold"
        >
          สมัครสมาชิก
        </Link>

      </div>
    </div>
  );
}

export default Login;