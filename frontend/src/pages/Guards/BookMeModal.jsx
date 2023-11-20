import React from 'react';
import Modal from 'react-modal';
import "../../../src/App.css"


const BookMeModal = ({ isOpen, closeModal, content }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="BookMeModal"
      className="modal"
      ariaHideApp={false}
    >
      <div className="modal-content " >
        <button className="close-button  mt-32 mb-10  btn  rounded-ful bg-sky-500 hover:bg-sky-700  " onClick={closeModal}>
          Close
        </button>
        <div className='pb-14 font-semibold text-cyan-400 leading-10 text-xl whitespace-break-spaces '>
         {content}
        </div>
      
      </div>
    </Modal>
  );
};

export default BookMeModal;
