"use client";
import LoginForm from "@/app/components/LoginForm";
import { loginUser } from "@/app/API's/api.js";
function LoginPage() {
  const handleLogin = async (formData, setLoginFormData) => {
    console.log("Logging in with", formData.email, formData.password);
    const res = await loginUser(formData);
    console.log(res);
    if (res) {
      localStorage.setItem("token", res.token);
      setLoginFormData({
        email: "",
        password: "",
      });
    }
  };

  return (
    <div className="min-h-screen px-4 flex items-center justify-center bg-gradient-to-r from-gray-950 via-gray-900 to-gray-800">
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
}

export default LoginPage;
