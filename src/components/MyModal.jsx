import React from 'react'

const MyModal = ({showModal, setShowModal, modalText}) => {
  return (
    showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowModal(false)}>&times;</span>
            <h2>Предупреждение</h2>
            <p className="modal-text">Возможна аварийная ситуация!{<br></br>} Проверьте устройство: {modalText}</p>
          </div>
        </div>
      )
  )
}

export default MyModal