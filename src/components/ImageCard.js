import React from "react";
// import './ImageList.css'

class ImageCard extends React.Component {

    constructor(props){
        super(props);

        this.state= {spans: 0};

        this.imageRef= React.createRef();
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;

        const spans = Math.ceil(height / 8.3);

        this.setState({spans: spans}) // { spans }
    };

    render(){

        const{ description, urls, alt_description} = this.props.image;
        const capitalize = alt_description? alt_description : "File Photo"
        const newDescription = capitalize.charAt(0).toUpperCase() + capitalize.slice(1)
        const shortNewDescription = newDescription.length>38 ? newDescription.slice(0,38).concat("...") : newDescription.concat(".")

        return (
                <div className="card" style = {{ gridRowEnd: `span ${this.state.spans}`}}>
                    <a href={urls.regular} target="_blank" rel="noreferrer">
                        <img 
                        ref={this.imageRef}
                        alt={description}
                        src={urls.regular}
                        />
                    </a>
                    <div className="center">
                        <span>
                            <p>{shortNewDescription}</p>
                        </span>
                    </div>
                </div>
        );
    }
}

export default ImageCard;