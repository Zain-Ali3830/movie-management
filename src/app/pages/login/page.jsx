"use client";
import LoginForm from "@/app/components/LoginForm";
import { loginUser } from "@/app/API's/api.js";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "react-hot-toast";
function LoginPage() {
  const router = useRouter();
  const handleLogin = async (formData, setLoginFormData) => {
    console.log("Logging in with", formData.email, formData.password);
    try {
      // Try API first, fallback to mock authentication
      let res;
      try {
        res = await loginUser(formData);
      } catch (apiError) {
        // Mock authentication for demo purposes
        if (formData.email === "admin@admin.com" && formData.password === "admin123") {
          res = { token: "mock-admin-token" };
        } else {
          throw new Error("Invalid credentials");
        }
      }
      
      if (res) {
        localStorage.setItem("token", res.token);
        toast.success("Login successful!");
        router.push("/pages/admin");
        setLoginFormData({
          email: "",
          password: "",
        });
      }
    } catch (error) {
      console.error(error);
      toast.error("Login failed. Use admin@admin.com / admin123 for demo.");
    }
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="min-h-screen px-4 flex items-center justify-center bg-gradient-to-r from-gray-950 via-gray-900 to-gray-800">
        <LoginForm onSubmit={handleLogin} />
      </div>
    </>
  );
}

export default LoginPage;
