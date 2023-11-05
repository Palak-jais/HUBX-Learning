import React, { useState } from 'react';
import styles from '../ui.module.css'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,

} from 'reactstrap';

function Models(props) {
  const { className } = props;
  const [modal, setModal] = useState(false);
  

  const toggle = () => setModal(!modal);
  const externalCloseBtn = (
    <button
      type="button"
      className="close"
      style={{ position: 'absolute', top: '15px', right: '15px' }}
      onClick={toggle}
    >
      &times;
    </button>
  );

  return (
    <>
        <h2 className={styles.header}>Models</h2>
   
    <div className={styles.stuffs}>
    <p>
      <Button color="danger" onClick={toggle}>
          Open Model
        </Button>
        </p>
      <Modal
     // fullscreen //sm,md,lg,xl
        isOpen={modal}
        toggle={toggle}
        className={className}
      //  modalTransition={{ timeout: 400 }}
     // external={externalCloseBtn}
        backdrop='static'
        size='lg'//'sm'
       // onExit={()=>console.log("exit")}
        onClosed={()=>console.log("closing")}
        
      >
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
    </>
  );
}

export default Models;