import type React from "react";

interface ButtonProps {
  title: string;
  btnClass?: string;
  txtClass?: string;
}

const Button: React.FC<ButtonProps> = ({ title, btnClass, txtClass }) => {
  return (
    <button
      type="submit"
      className={`bg-red-500 p-2 w-full rounded-sm my-5 cursor-pointer ${btnClass}`}
    >
      <p className={`text-white font-bold text-center ${txtClass}`}>{title}</p>
    </button>
  );
};

export default Button;
