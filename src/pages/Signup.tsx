import { useState } from "react";
import FloatingLabelInput from "../components/shared/auth/FloatingLabelInput";
import AuthSidebar from "../components/shared/auth/AuthSidebar";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const isFormValid =
    username.trim() !== "" &&
    email.trim() !== "" &&
    phoneNumber.trim() !== "" &&
    password.trim() !== "" &&
    confirmPassword.trim() !== "" &&
    termsAccepted;

  return (
    <main className="h-screen flex flex-col md:flex-row">
      {/* Left hand side */}
      <AuthSidebar />

      {/* Right Side */}
      <section className="w-full md:w-3/5 flex items-center justify-center p-8">
        <div className="w-full max-w-xl">
          <h2 className="md:text-[2rem] text-[1.5rem] font-semibold text-gray-900 text-center">
            Sign up for an account
          </h2>
          <p className="mb-6 text-[.875rem] md:text-[1rem] text-[#667085] text-center font-normal leading-6">
            Get started today by entering just a few details
          </p>
          <form className="space-y-6">
            <FloatingLabelInput
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <FloatingLabelInput
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="flex items-center space-x-2">
              <select className="rounded-[8px] border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#06543C]">
                <option>US</option>
                <option>UK</option>
                <option>NG</option>
              </select>
              <FloatingLabelInput
                type="tel"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <FloatingLabelInput
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FloatingLabelInput
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <div className="flex items-center text-sm">
              <input
                type="checkbox"
                id="terms"
                className="mr-2"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
                required
              />
              <label htmlFor="terms">
                I agree to the
                <a href="#" className="text-[#06543C] underline">
                  {" "}
                  Terms & Conditions{" "}
                </a>
                and
                <a href="#" className="text-[#06543C] underline">
                  {" "}
                  Privacy Policy{" "}
                </a>
              </label>
            </div>
            <button
              type="submit"
              disabled={!isFormValid}
              className={`w-full rounded px-4 py-2 text-white cursor-pointer ${
                isFormValid ? "bg-[#06543C]" : "bg-[#98A2B3] cursor-not-allowed"
              }`}
            >
              Create Account
            </button>
          </form>
          <p className="mt-6 text-sm text-center text-gray-600">
            Already have an account?{" "}
            <a href="#" className="text-[#06543C] underline">
              Login
            </a>
          </p>
        </div>
      </section>
      <p className="text-[#667085] absolute right-8 text-sm bottom-4">
        Copyright 2025
      </p>
    </main>
  );
};

export default Signup;
