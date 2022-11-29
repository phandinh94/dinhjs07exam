import React, {Component} from "react";
import Result from "./Result";

class SearchBox extends Component {
    state = {  } 
    render() { 
        let {inputValue, handleChange, handleSubmit, profiles} = this.props
        return (
            <>
             <form onSubmit={handleSubmit}>
                <input 
                className="input-search" 
                placeholder="Search character"
                name="character"
                value={inputValue}
                onChange={handleChange}/>
            </form>
            {profiles.map((e,i)=> <Result character={e} key={i}/>)}
            </>
           
            
        );
    }
}
 
export default SearchBox;