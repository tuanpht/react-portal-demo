import React from 'react';
import Portal from '../Portal';

function Modal({
  isOpen,
  onClose,
  onConfirm,
  title,
  children,
  cancelLabel = 'Close',
  confirmLabel = 'OK',
}) {
  const modalClass = isOpen ? 'modal fade show' : 'modal fade';

  return (
    <Portal>
      <div
        className={modalClass}
        tabIndex="-1"
        style={isOpen ? { display: 'block' } : {}}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{title}</h5>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={onClose}
              ></button>
            </div>
            <div className="modal-body">{children}</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onClose}
              >
                {cancelLabel}
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={onConfirm}
              >
                {confirmLabel}
              </button>
            </div>
          </div>
        </div>
      </div>
      {isOpen && <div className="modal-backdrop fade show" />}
    </Portal>
  );
}

export default Modal;
