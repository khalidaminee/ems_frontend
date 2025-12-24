import React, { Component, createRef } from 'react'


export class CreateRef extends Component {
    constructor(props){
        super(props);
        this.inputReference = createRef();
    }

    componentDidMount(){
      this.inputReference.current.value = "Mohammad Khalid Aminee";
    }

  handleReference = () => {
      this.inputReference.current.focus();
      this.inputReference.current.style.background = "green";
      this.inputReference.current.style.color = "white";
    }
  render() {
    console.log(this.inputReference);
    return (
      <div>
        <h1>Ref in react.</h1>

        {/* Example 1 */}
        <input type="text" ref={this.inputReference} className='form-control form-control-md ' />

        {/* Example 2 */}

        <button className='primary' onClick={this.handleReference}>Focus Input</button>
        
      </div>
    )
  }
}

export default CreateRef
