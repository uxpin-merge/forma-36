import React from 'react';
import Modal from '../Modal';
import { ModalHeader } from '../../Modal/ModalHeader/ModalHeader';
import { ModalContent } from '../../Modal/ModalContent/ModalContent';
import { ModalControls } from '../../Modal/ModalControls/ModalControls';
import { Button } from '../../../../../components/button/src/Button';
// import { Button } from '@contentful/f36-button';

export default (
  <Modal
    uxpId="modalM-1"
    isShown={false}
    title="Centered modal"
    size=""
    allowHeightOverflow={false}
    modalHeaderProps={{}}
    modalContentProps={{}}
    className=""
    testId=""
    shouldCloseOnOverlayClick={true}
    shouldCloseOnEscapePress={true}
  >
    <ModalHeader uxpId="modal-header" title="Title" />
    <ModalContent uxpId="modal-content">
      Hello from controlled modal window
    </ModalContent>
    <ModalControls uxpId="modal-controls">
      <Button uxpId="button1" variant="positive">
        Confirm
      </Button>
      <Button uxpId="button2" variant="secondary">
        Close
      </Button>
    </ModalControls>
  </Modal>
);
