import { useState } from "react";
import "./FormInput.css";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, onChange, ...inputProps } = props;
  const handleFocus = () => {
    setFocused(true);
  };
  return (
    <div className="FormInput">
      <label>{label}</label>
      <textarea
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() => inputProps.name === "content" && setFocused(true)}
        focused={focused.toString()}
      />
    </div>
  );
};

export default FormInput;
