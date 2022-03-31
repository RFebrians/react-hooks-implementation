import React from 'react';

const ScreenFour = ({}) => {
  return (
    <main className="app--screen screen--four">
      <h2>useState Example</h2>

      <div style={{ display: 'flex', columnGap: '1rem' }}>
        <button type="button" data-modal="modal-one">
          Basic
        </button>
        <button type="button" data-modal="modal-two">
          Array
        </button>
        <button type="button" data-modal="modal-three">
          Object
        </button>
        <button type="button" data-modal="modal-four">
          Counter
        </button>
      </div>
    </main>
  );
};

export default ScreenFour;
