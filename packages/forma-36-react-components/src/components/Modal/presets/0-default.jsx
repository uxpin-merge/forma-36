import React from 'react';
import { Modal } from '../Modal';
import { ModalHeader } from '../ModalHeader/ModalHeader';
import { ModalContent } from '../ModalContent/ModalContent';
import { ModalControls } from '../ModalControls/ModalControls';
import { Button } from '../../../../../components/button/src/Button';

export default (
  <Modal
    uxpId="modal-1"
    isShown={false}
    title="Centered modal"
    size=""
    allowHeightOverflow={false}
    modalHeaderProps={{}}
    modalContentProps={{}}
    className=""
    testId=""
    shouldCloseOnOverlayClick="true"
    shouldCloseOnEscapePress="true"

  >
    <ModalHeader uxpId="modal-header" title="Title" />
    <ModalContent uxpId="modal-content" >Hello from controlled modal window</ModalContent>
    <ModalControls uxpId="modal-controls" >
      <Button uxpId="button1" variant="positive" onClick={() => setShown(false)}>
        Confirm
      </Button>
      <Button uxpId="button2" variant="secondary" onClick={() => setShown(false)}>
        Close
      </Button>
    </ModalControls>
  </Modal>
);




{/* <Modal title="Centered modal" isShown={isShown}>
  {() => (
    <React.Fragment>
      <Modal.Header title="Title" />
      <Modal.Content>Hello from controlled modal window</Modal.Content>
      <Modal.Controls>
        <Button buttonType="positive" onClick={() => setShown(false)}>
          Confirm
              </Button>
        <Button buttonType="muted" onClick={() => setShown(false)}>
          Close
              </Button>
      </Modal.Controls>
    </React.Fragment>
  )}
</Modal> */}
