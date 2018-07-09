import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Modal from 'react-modal';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#root')
class App extends Component {

  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      modalIsOpen1:false
    };
  }

  openModal() {
    this.setState({ 
      modalIsOpen: true,
      modalIsOpen1:false 
    });
  }

openModal1() {
    this.setState({ 
      modalIsOpen: false,
      modalIsOpen1:true 
    });
  }
  closeModal() {
    this.setState({ modalIsOpen: false,modalIsOpen1:true });
  }
  closeModal1() {
    this.setState({ modalIsOpen1: false });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <div>
          <button onClick={()=>this.openModal()}>Open Modal</button>
          <button onClick={()=>this.openModal1()}>Open Modal1</button>

          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={()=>this.closeModal()}
            style={customStyles}
          >

            <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
            <button onClick={()=>this.closeModal()}>close</button>
            <div>I am a modal</div>
            <form>
              <input />
              <button>tab navigation</button>
              <button>stays</button>
              <button>inside</button>
              <button>the modal</button>
            </form>
          </Modal>

          <Modal
            isOpen={this.state.modalIsOpen1}
            onRequestClose={()=>this.closeModal1()}
            style={customStyles}
          >

            <h2>Hello</h2>
            <button onClick={()=>this.closeModal1()}>close</button>
            <div>I am a modal1</div>
            <form>
              <input />
              <button>tab navigation</button>
              <button>stays</button>
              <button>inside</button>
              <button>the modal</button>
            </form>
          </Modal>
        </div>
      </div>
    );
  }
}

export default App;
