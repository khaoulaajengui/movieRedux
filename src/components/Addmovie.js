import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { AddMovie } from '../redux/movieSlice';
const Addingmovie=()=> {
  const [show, setShow] = useState(false);
  const [newMovie, setNewMovie]=useState({
    id:uuidv4()
  })
  const handleChange=(e)=>{
    setNewMovie({...newMovie,[e.target.name]:e.target.value})

  }
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch= useDispatch()

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Addmovie
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add your movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <input name='title' placeholder='enter the title' onChange={handleChange} />
         <input name='description' placeholder='enter the description' onChange={handleChange}/>
         <input name='poster' placeholder='enter the URL of the poster'onChange={handleChange}/>
         <input name='rating' placeholder='enter your rate'onChange={handleChange}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>dispatch(AddMovie(newMovie))}>Save</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Addingmovie;