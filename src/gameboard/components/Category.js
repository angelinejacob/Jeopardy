import React, { Component } from 'react';
import Clues from './Clues';

class Category extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <>
      <h3>Category</h3>
      <Clues/>
      </>
    );
  }
}

export default Category;