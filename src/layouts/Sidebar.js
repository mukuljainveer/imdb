import React, {Component} from "react";
import styled from 'styled-components';
import { MdLocalMovies } from 'react-icons/md';
import {Link} from "react-router-dom";
import Icon from "./utility/Icon";

const StyledSideNav=styled.div`
  background-color: black;
  width: 80px;
  color: white;
  position: fixed;
  bottom: 0px;
  height: 100%;
`;

class SideNav extends Component{
    render() {
        return(
            <>
                <StyledSideNav/>
            </>
        )
    }
}

class NavItem extends Component{
    handleClick=()=>{

    }

    render() {
        const {active}=this.props;

        return (
            <div>
                <StyledNavItem active={active}>
                    <Link to='/movies'>
                        <Icon isSelected={true} onClick={this.handleClick} text="Movies"><MdLocalMovies/></Icon>
                    </Link>
                </StyledNavItem>
            </div>
        );
    }


}

class Sidebar extends Component{
    render() {
        return(
            <>
                <SideNav/>
            </>
        )
    }
}

export default Sidebar;