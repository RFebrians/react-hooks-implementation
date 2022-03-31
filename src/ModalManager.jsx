import React from 'react';

import ModalOne from './components/common/modal-one/ModalOne'
import ModalTwo from './components/common/modal-two/ModalTwo'
import ModalThree from './components/common/modal-three/ModalThree'
import ModalFour from './components/common/modal-four/ModalFour'
import ModalFive from './components/common/modal-five/ModalFive'
import ModalSix from './components/common/modal-six/ModalSix'
import ModalSeven from './components/common/modal-seven/ModalSeven'
import ModalEight from './components/common/modal-eight/ModalEight'
import ModalNine from './components/common/modal-nine/ModalNine'
import ModalTen from './components/common/modal-ten/ModalTen'
import ModalEleven from './components/common/modal-eleven/ModalEleven'
import ModalTwelve from './components/common/modal-twelve/ModalTwelve'


// this is modal section , not a page

const ModalManager = ({ closeFn, modal = '' }) => {
  return (
    <>
      <ModalOne closeFn={closeFn} open={modal === 'modal-one'} />
      <ModalTwo closeFn={closeFn} open={modal === 'modal-two'} />
      <ModalThree closeFn={closeFn} open={modal === 'modal-three'} />
      <ModalFour closeFn={closeFn} open={modal === 'modal-four'} />
      <ModalFive closeFn={closeFn} open={modal === 'modal-five'} />
      <ModalSix closeFn={closeFn} open={modal === 'modal-six'} />
      <ModalSeven closeFn={closeFn} open={modal === 'modal-seven'} />
      <ModalEight closeFn={closeFn} open={modal === 'modal-eight'} />
      <ModalNine closeFn={closeFn} open={modal === 'modal-nine'} />
      <ModalTen closeFn={closeFn} open={modal === 'modal-ten'} />
      <ModalEleven closeFn={closeFn} open={modal === 'modal-eleven'} />
      <ModalTwelve closeFn={closeFn} open={modal === 'modal-twelve'} />
    </>
  );
};

export default ModalManager;
