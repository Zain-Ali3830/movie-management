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
      const res = await loginUser(formData);
      console.log(res);
      if (res) {
        localStorage.setItem("token", res.token);
        toast.success("Login successful!");
        router.push("/pages/home");
        setLoginFormData({
          email: "",
          password: "",
        });
      }
    } catch (error) {
      console.error(error);
      toast.error("Login failed. Please check your credentials.");
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
