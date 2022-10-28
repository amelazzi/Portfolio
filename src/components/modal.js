import React from "react"
import Modal from "styled-react-modal"

import styled from "styled-components"
import { Link } from "gatsby";
import { dark, bordo } from "../styles/colors"
import CloseIcon from "../images/close-icon.png"
import BurgerIcon from "../images/menu-icon.png"

const MenuIcon = styled.img`
    display: none;
    width: 2rem;
    height: 1.5rem;
    :hover{
        cursor: pointer;
    }
    @media (max-width: 48em) {
        display: block;
        position: absolute;
        right: 2rem;
    }
`;

const StyledModal = Modal.styled`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: ${dark};
    padding: 2rem;
    opacity: ${props => props.opacity};
    img{
        width: 1.5rem;
        :hover{
            cursor: pointer;
        }
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    text-align: center;
    color: white !important;
    text-transform: uppercase;
    margin: 1.5rem 0rem !important;
    padding: 0 !important;
    font-weight: 500;
    :hover{
        color: ${bordo} !important;
    }
`;

const HomeLink = styled(StyledLink)`
    margin-top: 4rem !important;
`;


class FancyModalButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      opacity: 0
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.afterOpen = this.afterOpen.bind(this);
    this.beforeClose = this.beforeClose.bind(this);
  }

  toggleModal(e) {
    this.setState({ isOpen: !this.state.isOpen });
  }

  afterOpen() {
    setTimeout(() => {
      this.setState({ opacity: 1 });
    });
  }

  beforeClose() {
    return new Promise(resolve => {
      this.setState({ opacity: 0 });
      setTimeout(resolve, 200);
    });
  }

  render() {
    return (
      <>
        <MenuIcon src={BurgerIcon} onClick={this.toggleModal} alt="menu"/>
        <StyledModal
            isOpen={this.state.isOpen}
            afterOpen={this.afterOpen}
            beforeClose={this.beforeClose}
            onBackgroundClick={this.toggleModal}
            onEscapeKeydown={this.toggleModal}
            opacity={this.state.opacity}
            backgroundProps={{ opacity: this.state.opacity }}
        >
            <div onClick={this.toggleModal} role="button" tabIndex={0} onKeyPress={this.toggleModal}>
                <img src={CloseIcon} alt="close" />
            </div>
            <HomeLink to="/#home" onClick={this.toggleModal} > Home </HomeLink>
            <StyledLink to="/#projects" onClick={this.toggleModal} > Projects </StyledLink>
            <StyledLink to="/#contact" onClick={this.toggleModal} > Contact </StyledLink>
        </StyledModal>
      </>
    );
  }
}

export default FancyModalButton