import React from 'react';
import { ReactDOM } from 'react';


const Modal=({toggle})=>{
    return ReactDOM.createPortal(
        <div>
        <div className="modal-container">

          <div className="modal__header">
            <h1>Rules</h1>
            <button onClick={toggle}>
              
            </button>
          </div>
      
        </div>
        </div>,
      document.getElementById("modal")
    );
  };

  export default Modal;
  