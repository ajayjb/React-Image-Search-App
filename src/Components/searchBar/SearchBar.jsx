import React from "react";

class SearchBar extends React.Component{

    constructor(props){
        super(props);
        this.state = {search : ""}
    }

    onInputChange = (event)=>{
        this.setState({search:event.target.value});
    }

    onFormSubmit = (event)=>{
        event.preventDefault();
        this.props.onSubmit(this.state.search);
    }

    render(){
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                    <label>SearchBar</label>
                    <input type="text" value={this.state.search} onChange={this.onInputChange}/>
                    </div>
                </form>
            </div>
        );
    }
}
export default SearchBar;