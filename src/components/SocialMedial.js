import React from "react"
import styled from 'styled-components'

const StyledSocialMedia = styled.div`
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    margin-right: 4px !important;
    :hover{
        cursor: pointer;
    }
    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;


class SocialMedia extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            imgSrc: this.props.img
         };
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
    }

    handleMouseOver() {
        this.setState({
          imgSrc: this.props.imgBackground
        });
    }
    
    handleMouseOut() {
        this.setState({
          imgSrc: this.props.img
        });
    }

    render(){
        return(
            <StyledSocialMedia>
                <a href={this.props.link}>
                    <div onMouseOver={this.handleMouseOver}
                         onFocus={this.handleMouseOver}
                         onMouseOut={this.handleMouseOut}
                         onBlur={this.handleMouseOut}>
                        <img src={this.state.imgSrc} alt="sm-logo"/>
                    </div>
                </a>
            </StyledSocialMedia> 
        )
    }
}

export default SocialMedia;