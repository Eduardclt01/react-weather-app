import React, { ChangeEventHandler, FocusEventHandler } from "react";
import styled from "styled-components";

const StyledInputField = styled.input`
  padding: var(--spacing-1);
  border: none;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    outline: none;
  }
  &:focus-visible {
    outline: none;
  }
`;

function InputField(props: {
  onChange: ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
  onFocus: FocusEventHandler<HTMLInputElement>;
  value: string;
  onBlur: FocusEventHandler<HTMLInputElement>;
}) {
  const { value, onChange, placeholder, onFocus, onBlur } = props;

  return (
    <StyledInputField
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
}

export default InputField;
