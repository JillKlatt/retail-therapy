import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { changePoint, changeRound, changeHP, addToInventory } from '../Actions/index'
import { useDispatch } from 'react-redux';
import './Modal.css'

function ChoiceModal(props) {
  const [show, setShow] = useState(false);

  const dispatch = useDispatch()
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const renderOutcome = () => {
    setShow(false)
    dispatch(changeRound())
    if (props.answer === 'correct') { dispatch(changePoint(10)) }
    if (props.hp !== undefined) { dispatch(changeHP(props.hp)) }
    if (props.inventory !== '' && props.inventory !== undefined) { dispatch(addToInventory(props.inventory)) }
    console.log(props.inventory)
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        {props.buttonChoice}
      </Button>

      <Modal className='modal'
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered show={show} onHide={handleClose}>

        <Modal.Body>{props.outcome}</Modal.Body>
        <Modal.Footer>
          <Button className='close-button' variant="secondary" onClick={renderOutcome}>
            X
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ChoiceModal