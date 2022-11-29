import React, {Component} from 'react';
import './App.css';
import CharacterContainer from './components/CharacterContainer';


class App extends Component {
  state = { 
    imgName: "./assets/logo.png"
   } 
  render() { 
    return (
      <>
      <CharacterContainer/>
      </>
    );
  }
}
 
export default App;
