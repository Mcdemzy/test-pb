import FloatingLabelInput from "../components/shared/auth/FloatingLabelInput";
import AuthSidebar from "../components/shared/auth/AuthSidebar";

const Signup = () => {
  return (
    <main className="h-screen flex flex-col md:flex-row">
      {/* Left hand side */}
      <AuthSidebar />

      {/* Right Side */}
      <section className="w-full md:w-3/5 flex items-center justify-center p-8">
        <div className="w-full max-w-xl">
          <h2 className="text-[2rem] font-semibold text-gray-900 text-center">
            Sign up for an account
          </h2>
          <p className="mb-6 text-[#667085] text-center">
            Get started today by entering just a few details
          </p>
          <form className="space-y-6">
            <FloatingLabelInput type="text" placeholder="Username" />
            <FloatingLabelInput type="email" placeholder="Enter Email" />
            <div className="flex items-center space-x-2">
              <select className="rounded-[8px] border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#06543C]">
                <option>US</option>
                <option>UK</option>
                <option>NG</option>
              </select>
              <FloatingLabelInput type="tel" placeholder="Phone Number" />
            </div>
            <FloatingLabelInput type="password" placeholder="Enter Password" />
            <FloatingLabelInput
              type="password"
              placeholder="Confirm Password"
            />
            <div className="flex items-center text-sm">
              <input type="checkbox" id="terms" className="mr-2" />
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
            <button className="w-full rounded bg-[#98A2B3] px-4 py-2 text-white cursor-pointer">
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
    </main>
  );
};

export default Signup;
