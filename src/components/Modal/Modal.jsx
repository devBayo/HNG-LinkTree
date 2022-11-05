import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import './Modal.css';

const ModalOverlay = props => {
  return (
    <div className="modal">
      <h2 className="header">Awesome!</h2>
      <p className="content">
        You have successfully sent a message, Check your mail for details.
      </p>
      <Link to="/" className="button" onClick={props.onClick}>
        Ok
      </Link>
    </div>
  );
};

const Modal = props => {
  return (
    <>
      {createPortal(
        <div className="backdrop" />,
        document.getElementById('backdrop-root')
      )}
      {createPortal(
        <ModalOverlay onClick={props.onClick} />,
        document.getElementById('overlay-root')
      )}
    </>
  );
};

export default Modal;
