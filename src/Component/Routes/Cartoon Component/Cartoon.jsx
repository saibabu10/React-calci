import React, { Component } from 'react'
import axios from 'axios'
import './Cartoon.css';
export class Cartoon extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      character:[],
       errorMessage:' '
    }
  }
  componentDidMount()
  {
    axios
    .get('https://rickandmortyapi.com/api/character')
    .then(response =>
      {
        console.log(response)
        this.setState({character:response.data.results})
      })
      .catch(error =>
        this.setState({errorMessage:'Error Retriving Data'}))
  }
  render() {
    const {character,errorMessage}=this.state
    return (
     <React.Fragment>
      <div  className='header'><h1>The Rick and Morty API<br/><br/></h1> </div>
      <br/>
      <div className='body'>
      {character.length
      ?character.map(character => <div key={character.id}className='content'>
      
      <img src={character.image}/>
      <h2> {character.name}</h2>
      status:{character.status}<br/>
      species:
      {character.species}</div>):null}
      {errorMessage ? <div>{errorMessage}</div>:null}
      </div>
     </React.Fragment>
    )
  }
}
 
export default Cartoon