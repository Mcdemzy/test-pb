import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const FloatingLabelInput = ({
  type,
  placeholder,
}: {
  type: string;
  placeholder: string;
}) => {
  const [value, setValue] = useState("");
  const [focused, setFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const isPasswordField = type === "password";

  return (
    <div className="relative w-full">
      <label
        className={`absolute left-3 top-2 transition-all duration-200 text-[#98A2B3] ${
          focused || value
            ? "text-xs top-[-10px] bg-white px-1 text-gray-600"
            : "text-base"
        }`}
      >
        {placeholder}
      </label>
      <input
        type={isPasswordField && !showPassword ? "password" : "text"}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="w-full border px-4 py-2 rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#06543C] text-gray-900 pr-10"
      />
      {isPasswordField && (
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-3 text-gray-500"
        >
          {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
        </button>
      )}
    </div>
  );
};

const App = () => {
  return (
    <main>
      <section className="h-screen flex">
        {/* Left side */}
        <section className="w-[40%] flex items-center">
          <div className="bg-[#06543C] h-[98vh] w-full ml-4 rounded-[15px] p-8 flex flex-col justify-center">
            {/* Logo */}
            <div className="mb-8">
              <img
                src="images/logo.svg"
                alt="Betta Logo"
                className="h-10 bg-white absolute top-4 left-8"
              />
            </div>
            {/* Content */}
            <h1 className="mb-6 text-[60px] md:text-[60px] leading-[78px] tracking-[-2px] font-bold text-white">
              Unlock the Power <br /> of Sports Betting <br /> Data
            </h1>
            <p className="text-[1rem] leading-6 font-normal text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem esse,
              libero repellat accusamus vero repudiandae quia nihil architecto
              earum ullam quod omnis dolores,
            </p>
          </div>
        </section>

        {/* Right side */}
        <section className="w-[60%] flex items-center justify-center p-8">
          <div className="w-full max-w-xl">
            <h2 className="text-[2.25rem] font-semibold text-gray-900 text-center">
              Sign up for an account
            </h2>
            <p className="mb-6 font-normal leading-6 text-[#667085] text-center">
              Get started today by entering just a few details
            </p>
            <form className="space-y-6">
              <FloatingLabelInput type="text" placeholder="Username" />
              <FloatingLabelInput type="email" placeholder="Enter Email" />
              <div className="flex items-center space-x-2">
                <select className="rounded-[8px] border px-3 py-2 text-[#101828] focus:outline-none focus:ring-2 focus:ring-[#06543C]">
                  <option>US</option>
                  <option>UK</option>
                  <option>NG</option>
                </select>
                <FloatingLabelInput type="tel" placeholder="Phone Number" />
              </div>
              <FloatingLabelInput
                type="password"
                placeholder="Enter Password"
              />
              <FloatingLabelInput
                type="password"
                placeholder="Confirm Password"
              />
              <div className="flex items-center text-sm">
                <input type="checkbox" id="terms" className="mr-2" />
                <label htmlFor="terms">
                  I agree to the{" "}
                  <a href="#" className="text-[#06543C] underline">
                    Terms & Conditions
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-[#06543C] underline">
                    Privacy Policy
                  </a>
                </label>
              </div>
              <button className="w-full rounded bg-[#98A2B3] px-4 py-2 text-white">
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
      </section>
    </main>
  );
};

export default App;
