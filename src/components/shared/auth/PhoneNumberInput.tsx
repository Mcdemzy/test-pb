import { useState } from "react";

const PhoneNumberInput = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [focused, setFocused] = useState(false);

  return (
    <div className="relative w-full">
      {/* Label */}
      {(focused || phoneNumber) && (
        <label className="text-sm text-gray-600 mb-1 block">Phone Number</label>
      )}

      {/* Combined Select and Input Field */}
      <div className="flex items-center border rounded-[8px] focus-within:ring-2 focus-within:ring-[#06543C]">
        {/* Select Dropdown */}
        <select className="rounded-l-[8px] px-3 py-2 focus:outline-none bg-transparent">
          <option>US</option>
          <option>UK</option>
          <option>NG</option>
        </select>

        {/* Phone Number Input */}
        <input
          type="tel"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="flex-1 px-4 py-2 rounded-r-[8px] focus:outline-none"
        />
      </div>
    </div>
  );
};

export default PhoneNumberInput;
