const InputBox = ({label, type, name, value, onChange, width="full"})=> {
    return(
    <label className="text-3xl">
        {label}
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
           className={`${
          width === "full"
            ? "w-full"
            : width === "1/2"
            ? "w-1/2"
            : "w-auto"
        } px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff3131] focus:border-[#ff3131] transition duration-200`}
            />
    </label>
    )
}

export default InputBox