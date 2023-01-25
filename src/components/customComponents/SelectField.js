import React from "react";

function SelectField({
  name,
  handleChange,
  label,
  value,
  options,
  disabled = false,
  voteBtnIsClicked = false,
}) {
  const handleOnChange = (e) => {
    handleChange(e.target.name, e.target.value);
  };
  return (
    <div className="border-charity-color4 rounded-lg border-2 w-full bg-white py-4 text-black my-10">
      <div className="w-full md:w-2/4 pl-4 px-4">
        <label className="w-full pb-2">
          {label}
          <span className="text-charity-color5 ml-1">*</span>
        </label>
        <select
          name={name}
          value={value}
          className={`w-full border-b-2 border-charity-color4 pt-2 text-black placeholder-charity-color4 focus-within:outline-none ${disabled && "cursor-not-allowed"}`}
          onChange={handleOnChange}
          disabled={disabled}
          required
        >
          <option
            value=""
            className="text-charity-color4"
            selected={value === "" && true}
            disabled
          >
            {label}
          </option>
          {options.length !== 0 &&
            options.map((option, id) => {
              return (
                <option key={id} value={option.nominee}>
                  {option.nominee}
                </option>
              );
            })}
        </select>
      </div>
    </div>
  );
}

export default SelectField;
