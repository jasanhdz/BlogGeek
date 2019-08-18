import React from 'react';
import './home-layout.css';
const HomeLayout = props => {
  return (
    <section className="Container">
      {props.children}
    </section>
  )
}

export default HomeLayout;