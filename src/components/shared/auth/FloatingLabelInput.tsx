import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

interface FloatingLabelInputProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FloatingLabelInput = ({
  type,
  placeholder,
  value,
  onChange,
}: FloatingLabelInputProps) => {
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
        onChange={onChange}
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

export default FloatingLabelInput;
