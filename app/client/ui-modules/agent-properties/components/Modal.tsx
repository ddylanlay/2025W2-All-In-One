import React, { ReactNode } from "react";

interface ModalType {
  children?: ReactNode;
  footer?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
}

export default function Modal(props: ModalType) {
  return (
    <>
      {props.isOpen && (
        <div style={styles.modalOverlay}>
          <div onClick={(e) => e.stopPropagation()} style={styles.modalBox}>
            <div style={styles.modalContent}>
              {props.children}
            </div>

            <div style={styles.modalFooter}>
              {props.footer}
            </div>
            
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
    position: 'fixed' as const,
    top: 0,
    left: 0,
    background: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBox: {
    display: 'flex',
    flexDirection: 'column' as const,
    background: 'white',
    width: '70%',
    height: '85vh', // fixed height relative to viewport
    padding: '1rem',
    borderRadius: '1rem',
    overflow: 'hidden', // keep content inside
  },
  modalContent: {
    flex: 1,
    overflowY: 'auto' as const,
    paddingRight: '1rem',
  },
  modalFooter: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '1rem',
    paddingTop: '1rem',
    borderTop: '1px solid #ddd',
    backgroundColor: 'white',
    position: 'sticky' as const,
    bottom: 0,
    paddingBottom: '1rem',
  },
};