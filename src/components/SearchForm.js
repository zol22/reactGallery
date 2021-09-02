import React from "react";
import { withRouter } from 'react-router-dom';  // This is needed when dealing with object as history

class SearchForm extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault();
      
        this.props.onSearch(this.query.value); // this.query.value is a reference of what the user types made it in input
        let path = `/search/${this.query.value}`; // create the 'path' for search
        //console.log(this.props.history);
        this.props.history.push(path); // push the 'path' in history object. This will be matched in app.js with the route "/search:query"
        e.currentTarget.reset(); // reset the input value to empty
    }
    render(){
        return (
           <form onSubmit={this.handleSubmit} className="search-form">
             <input 
             type="text" 
             ref={(input) => this.query = input}
             placeholder="Search"/>
             <button type="submit">Go!</button>
           </form> 
           
        )
    }


}
export default withRouter(SearchForm);