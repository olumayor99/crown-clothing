import React from "react";
import "./custom-button.styles.scss";
const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
  <buton
    className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
    {...otherProps}
  >
    {children}
  </buton>
);
export default CustomButton;
