import React from 'react';

import App7 from '../../../tutorial/useEffect/1.-useEffect-basic';
import Modal from '../modal/Modal';

const ModalOne = ({ closeFn = () => null, open = false }) => {
  return (
    <Modal open={open}>
      <div className="modal--mask">
        <div className="modal-window">
          <header className="modal--header">
            <h1>useEffect Implementation</h1>
          </header>
          <div className="modal--body">
            <p>below are an Example how useEffect change their value</p>
            <App7 />
          </div>
          <footer className="modal--footer">
            <button type="button" onClick={closeFn}>
              Close
            </button>
          </footer>
        </div>
      </div>
    </Modal>
  );
};

export default ModalOne;
