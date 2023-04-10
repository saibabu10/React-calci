import React, { Component } from 'react'
import axios from 'axios'
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
        // console.log(response)
        this.setState({character:response.data.results})
      })
      .catch(error =>
        this.setState({errorMessage:'Error Retriving Data'}))
  }
  render() {
    const {character,errorMessage}=this.state
    return (
     <React.Fragment>
      {character.length
      ?character.map(character => <div>{character.name}<br/>
      {character.image}
      <br/>
      {character.status}</div>):null}
      {errorMessage ? <div>{errorMessage}</div>:null}
     </React.Fragment>
    )
  }
}
 
export default Cartoon