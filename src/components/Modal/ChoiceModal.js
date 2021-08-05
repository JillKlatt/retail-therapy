import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { addPoint, changeRound, changeHP, addToInventory } from '../Actions/index'
import { useDispatch, useSelector } from 'react-redux';

function ChoiceModal(props) {
    const [show, setShow] = useState(false);

    const dispatch = useDispatch()
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const renderOutcome = () => {
      setShow(false)
      dispatch(changeRound())
        if (props.answer === 'correct'){ dispatch(addPoint())}
        if (props.hp !== undefined){ dispatch(changeHP(props.hp))}
        if (props.inventory !== ''){ dispatch(addToInventory(props.inventory))}
    }
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          {props.buttonChoice}
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          {/* <Modal.Header closeButton>
            <Modal.Title>{props.outcome}</Modal.Title>
          </Modal.Header> */}
          <Modal.Body>{props.outcome}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={renderOutcome}>
              X
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  export default ChoiceModal