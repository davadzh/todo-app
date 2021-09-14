import React, { FC } from "react";

type ButtonType = "FilledButton" | "OutlinedButton";

interface CustomButtonProps {
  buttonType: ButtonType;
  children?: React.ReactChild | React.ReactNode;
}

//TODO
const CustomButton = ({ buttonType, children }: CustomButtonProps) => {
  return <button>{children}</button>;
};

export default CustomButton;
