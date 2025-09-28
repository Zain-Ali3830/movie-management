'use client';
import SignupForm from "@/app/components/SignupForm";
import { useRouter as Router } from "next/navigation";
function SignupPage() {
    const router=Router()
  const handleSignup = (formData) => {
    console.log("Signing up with", formData.userName, formData.email, formData.password,formData.confirmPassword);
    router.push("/pages/login");
  };

  return (
    <div className="min-h-screen px-4 py-1 flex items-center justify-center bg-gradient-to-r from-gray-950 via-gray-900 to-gray-800">
      <SignupForm onSubmit={handleSignup} />
    </div>
  );
}

export default SignupPage;