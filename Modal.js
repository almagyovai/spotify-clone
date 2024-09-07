import React from "react";

function Modal({ open, children }) {
  if (!open) return null;
  
  return <div>{children}</div>;
}

export default Modal;
