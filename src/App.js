import React, { Component } from 'react'
// import './App.css';
import image1 from './myimage/Beautiful-eyes.-Photo-Gansforever-Osman-526x598.jpg'
import './component.css'


class App extends Component{
      state = {
    fullName: 'Adeoye Tope', bio: 'Lagos-State', profession: 'Web developer', image: 'image1' , show: true}
  
  handleClick = () => {
      setInterval(() => {
          this.setState({fullName: 'Adeoye Tope' !== 'Tope' ? 'true'  : 'false' });
      }, 5000);
    }
      
  render () { if(this.state.fullName !== 'Adeoye Tope'){
  return(
  <div className='container'>
    <img className='image' src={image1} alt="" />
    <h1 className='fullname'>{this.state.fullName}</h1>
    <div className='paragraph'>
    <p>{this.state.bio}</p>
    <p>{this.state.profession}</p>
    </div>
    
    </div>
  )
  
}
else{return (
  <div>
    <h1>This page does not contain the user's profile</h1>
    <button type='button' onClick={this.handleClick}>Profile</button>
  </div>
)}
  }

}
// }

export default App;
