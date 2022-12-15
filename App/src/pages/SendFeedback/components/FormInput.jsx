import { useState } from "react";
import "./FormInput.css";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const [error, setError] = useState(false);
  const {id, label, submit, setSubmit, errorMessage, maxLength, onChange, ...inputProps } = props;
  const handleFocus = () => {
    setFocused(true);
  };

  return (
    <div className="FormInput">
      <label>{label}</label>
      <textarea
        {...inputProps}
        onChange={(e) => {
            const newSubmit = [...submit];
            
            if (e.target.value.length <= maxLength) {
              setError(false);
              newSubmit[id - 1] = true;
            }
            else {
              setError(true);
              newSubmit[id - 1] = false;
            }

            setSubmit(newSubmit);
            onChange(e);
          }
        }
        onBlur={handleFocus}
        onFocus={() => inputProps.name === "content" && setFocused(true)}
        focused={focused.toString()}
        error={error.toString()}
      />
     <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
