import React, { Component } from 'react';
import Clue from './Clue';

class Clues extends Component {
  
  render() {
    const clues = this.props.clues.map((clue)=>{
        return <Clue clue={clue}/>
    })
    return (
      <>
      <h3>Clues</h3>
      {clues}
      </>
    );
  }
}

export default Clues;