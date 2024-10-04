// import React from 'react';
// import './Completion.css';


// function Completion(props) {
//   // Generate multiple sprinkle elements with random positions

//   return (

    
//       <h1 className="completion-message" style={{color: 'black'}}>Thank you For Subscribing! 🎉</h1>

//   );
// }

// export default Completion;

import React from 'react';
import Header from './Header';
import './Completion.css'; // Optional if using external CSS file

class Completion extends React.Component {
  render() {
    return (
      <div className="completion-container">
        <Header />
        <h1 className="completion-message">Thank you For Subscribing! 🎉</h1>
      </div>
    );
  }
}

export default Completion;
