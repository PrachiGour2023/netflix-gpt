import type React from "react";

interface TextInputProps {
  name: string;
  value: string;
  placeholder: string;
  handleChange: (e: { target: { name: string; value: string } }) => void;
  handleBlur: (e: { target: { name: string; value: string } }) => void;
  fieldClass: string;
  type: string;
}

const InputField: React.FC<TextInputProps> = ({
  name,
  value,
  placeholder,
  handleChange,
  handleBlur,
  fieldClass,
  type,
}) => {
  return (
    <div className={`p-2 rounded-sm border-1 border-gray-400 ${fieldClass}`}>
      <input
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
        className={`text-white focus:outline-none w-90 p-2`}
      />
    </div>
  );
};

export default InputField;
