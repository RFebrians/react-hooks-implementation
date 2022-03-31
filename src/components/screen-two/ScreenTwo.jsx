import React from 'react';

const ScreenTwo = () => {
  return (
    <main className="app--screen screen--two">
      <h2>useEffect Example </h2>

      <div style={{ display: 'flex', columnGap: '1rem' }}>
        <button type="button" data-modal="modal-five">
          Basic
        </button>
        <button type="button" data-modal="modal-six">
          Cleanup
        </button>
        <button type="button" data-modal="modal-seven">
          Fetch
        </button>
      </div>
    </main>
  );
};

export default ScreenTwo;
