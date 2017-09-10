// import React, { Component } from 'react';
import React from 'react';

// class WelcomeMessage extends Component {
//   render() {
//     return (
//       <header className="example">
//         <h1>Welcome to {this.props.data.title}.</h1>
//       </header>
//     );
//   }
// }

const WelcomeMessage = ({ data }) => (
  <header className="example">
    <h1>Welcome to {data.title}</h1>
  </header>
);

export default WelcomeMessage;
