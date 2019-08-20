import React from 'react';
import './publications-layout.css'
const LayoutPublications = props => {
  return (
    <div className="Publications-Container">
        {props.children}
    </div>
  )
}

export default LayoutPublications;