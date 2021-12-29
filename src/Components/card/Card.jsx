import React from 'react';
import "./Card.css"


class Card extends React.Component{
    constructor(props){
        super(props)
        this.imageref = React.createRef();
        this.state = {span:null}
    }

    componentDidMount(){
      this.imageref.current.addEventListener("load", this.setSpan);
    }

    setSpan = ()=>{
        const span = Math.ceil(this.imageref.current.clientHeight/20);
        this.setState({span:span});
    }

    render(){
        const {urls, description} = this.props.photo;
      return (
        <div> <img style={{gridRowEnd:`span ${this.state.span}`}} ref={this.imageref} className="image"  src={urls.regular} alt={description}/> </div>
      ) 
    }
}

export default Card;