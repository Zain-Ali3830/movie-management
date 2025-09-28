'use client'
import LoginForm from "@/app/components/LoginForm";

function LoginPage() {
  const handleLogin = (formData) => {
    console.log("Logging in with", formData.email, formData.password);
  };

  return (
    <div className="min-h-screen px-4 flex items-center justify-center bg-gradient-to-r from-gray-950 via-gray-900 to-gray-800">
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
}

export default LoginPage;
