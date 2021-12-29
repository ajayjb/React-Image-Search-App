import React from "react";
import SearchBar from "./Components/searchBar/SearchBar";
import UnflashApi from "./Api/UnflashApi";
import ImageField from "./Components/imageField/ImageField";

class App extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {photos : []};
    }

    searchGetter = async (value) =>{
        UnflashApi.get("/search/photos",{
           params : {query : value},
       })
       .then((res)=>{
           this.setState({photos:res.data.results})
        })
       .catch((err)=>console.log(err))
    }

    render(){
        return (
            <div className="ui segment">
                <SearchBar onSubmit={this.searchGetter}/>
                <ImageField photos={this.state.photos}/>
            </div>
        );
    }
}

export default App;