import React from 'react';

const LayoutPublications = props => {
  return (
    <div>
       <p className="PublicationMessage">Publicaciones de la Comunidad!!!</p>
      {props.children}
    </div>
  )  
}

export default LayoutPublications;