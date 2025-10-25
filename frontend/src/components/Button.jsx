const Button = ({ text, type }) => {
  return (
    <button
      type={type}
      className="min-w-15 min-h-9 p-1 text-2xl text-center cursor-pointer bg-[#ff3131] text-[#ffd200] hover:bg-white rounded hover:shadow-inner hover:shadow-[#ffd200] hover:text-[#ff3131] font-bold"
    >
      {text}
    </button>
  );
};

export default Button;
