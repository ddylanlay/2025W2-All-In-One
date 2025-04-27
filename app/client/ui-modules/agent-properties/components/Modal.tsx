import React, { ReactNode } from "react";

interface ModalType {
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
}

export default function Modal(props: ModalType) {
  return (
    <>
      {props.isOpen && (
        <div style={styles.modalOverlay} onClick={props.toggle}>
          <div onClick={(e) => e.stopPropagation()} style={styles.modalBox}>
            {props.children}
          </div>
        </div>
      )}
    </>
  );
}

const styles = {
  modalOverlay: {
    zIndex: 9999,
    width: '100vw',
    height: '100vh',
    position: 'absolute' as const,
    top: 0,
    background: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBox: {
    display: 'block',
    background: 'white',
    width: '70%',
    height: '70%',
    padding: '1rem',
    borderRadius: '1rem',
  }
};
