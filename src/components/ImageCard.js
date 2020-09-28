import React from 'react';
class ImageCard extends React.Component{
    constructor(props){
        super(props);
        this.state ={spans:0}

        this.imageRef = React.createRef();
    }
    componentDidMount(){
        this.imageRef.current.addEventListener('load',this.setSpans)
    }
    setSpans = () =>{
    const height=this.imageRef.current.clientHeight;
    const span = Math.ceil(height/10);
    this.setState({spans:span})
    }
    render(){
        const {Description,urls} = this.props.image;
        return(
            <div style={{gridRowEnd:`span ${this.state.spans}`}}>
                <img alt={Description} src={urls.regular} ref={this.imageRef}/>
            </div>
        )
    }
}
export default ImageCard