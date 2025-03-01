import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export const Modal = ({ open, onClose, children, className = "" }) => {
  const dialog = useRef();

  useEffect(() => {
    const modal = dialog.current;
    if (open) {
      dialog.current.showModal();
    }

    return () => modal.close();
  }, []);
  return createPortal(
    <dialog
      ref={dialog}
      open={open}
      className={`modal ${className}`}
      onClose={onClose}
    >
      {children}
    </dialog>,
    document.getElementById("modal")
  );
};
