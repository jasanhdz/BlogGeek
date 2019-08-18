import React from 'react';
import { createPortal } from 'react-dom';

class ModalContainer extends React.Component {
  render(props) {
    // createPortal(que voy a renderizar, donde?)
    return createPortal(
      this.props.children, 
      document.getElementById('modal-container')
    )
  }
}

export default ModalContainer;