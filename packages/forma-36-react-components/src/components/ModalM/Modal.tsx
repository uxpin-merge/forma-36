import React, { useState } from 'react';
import { Modal as F36Modal, ModalProps } from '../Modal';
// import { ModalHeader } from '../Modal/ModalHeader/ModalHeader';
// import { ModalContent } from '../Modal/ModalContent/ModalContent';
// import { ModalControls } from '../Modal/ModalControls/ModalControls';
// import { Button } from '../../../../../components/button/src/Button';
// import { Button } from '@contentful/f36-button';

function Modal({ children, title, size, ...otherprops }: ModalProps) {
  const [isShown, setIsShown] = useState(false);
  return (
    <>
      <div
        className="fakeWrapper"
        style={{
          width: '100%',
          minWidth: '100%',
          height: '100%',
          minHeight: '100%',
        }}
      ></div>
      <F36Modal
        onClose={() => setIsShown(false)}
        isShown={isShown}
        title={title}
        size={size}
        allowHeightOverflow={false}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEscapePress={true}
        children={children}
        parentSelector={() => document.querySelector('.fakeWrapper')}
        {...otherprops}
      />
    </>
  );
}

export default Modal;
