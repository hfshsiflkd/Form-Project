// Input.jsx
const Input = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  error,
  required = false,
  type,
}) => {
  return (
    <div className="w-[416px] flex flex-col justify-between space-y-2 relative">
      <label className="flex text-sm text-gray-700 font-semibold">
        {label} {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`border ${
          error ? "border-red-500" : "border-gray-300"
        } rounded p-2 focus:outline-none focus:ring-2`}
      />

      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default Input;
