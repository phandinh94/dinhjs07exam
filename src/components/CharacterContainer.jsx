import React, {Component} from "react";
import SearchBox from "./SearchBox";
import imgSRC from '../assets/logo.png'
import Result from "./Result";


class CharacterContainer extends Component {
    state = { 
        profiles: [],
        loadIng: "",
     } 
     handleChange = (e) => {
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value
        })
     }
     handleSubmit = (e) => {
        let backURL = "https://breakingbadapi.com/api/";
        fetch(backURL)
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err)=> console.log(err))
     }
     componentDidMount (){
        let backURL = "https://breakingbadapi.com/api/";
        fetch(backURL)
        .then((res) => res.json())
        .then((data)=> {
            let profiles = data.characters;
            this.setState({
                profiles: profiles,
            })            
        }
        )
        .catch((err)=> console.log(err))
     }
    render() { 
        
        return (
            <div className='App'>
            <header className="name-app" >
                <img src={imgSRC}/>
            </header>
            <SearchBox 
            profiles={this.state.profiles}
            inputValue={this.state.loadIng} 
            handleSubmit={this.handleSubmit} 
            handleChange={this.handleChange}
            />
            </div>
        );
    }
}
 
export default CharacterContainer;