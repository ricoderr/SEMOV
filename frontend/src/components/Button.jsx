const Button = ({ text, type }) => {
  return (
    <button
      type={type}
      className="min-w-20 min-h-13 p-2 text-3xl text-center cursor-pointer bg-[#ff3131] text-[#ffd200] hover:bg-white rounded hover:shadow-inner hover:shadow-[#ffd200] hover:text-[#ff3131] font-bold"
    >
      {text}
    </button>
  );
};

export default Button;
