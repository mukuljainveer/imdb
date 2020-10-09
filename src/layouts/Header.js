import React, { useState } from "react";
import { MdOndemandVideo, MdLocalMovies } from "react-icons/md";
import { AiFillHome, AiOutlineClockCircle } from "react-icons/ai";
import { BsPerson, BsSearch } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import Icon from "./utility/Icon";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import { Grid, Box } from "@material-ui/core/";
import store from "../store";
import { searchable, setNavigation } from "../store/actions/HeaderActions";

const Header = (props) => {
  const [navSelected, setNavSelected] = useState(props.navigate);

  const navigate = (path) => {
    store.dispatch(setNavigation(path));
    setNavSelected(path);
  };

  const searchEnable = () => {
    store.dispatch(searchable());
  };

  return (
    <>
      <div className="nav-vertical">
        <ul className="nav-ul">
          <Link to="/home" onClick={() => navigate("Home")}>
            <li>
              <Icon isSelected={navSelected} text="Home">
                <AiFillHome />
              </Icon>
            </li>
          </Link>
          <Link to="/tvseries" onClick={() => navigate("TV Series")}>
            <li>
              <Icon isSelected={navSelected} text="TV Series">
                <MdOndemandVideo />
              </Icon>
            </li>
          </Link>
          <Link to="/movies" onClick={() => navigate("Movies")}>
            <li>
              <Icon isSelected={navSelected} text="Movies">
                <MdLocalMovies />
              </Icon>
            </li>
          </Link>
        </ul>

        <div>
          <ul className="nav-ul-bottom">
            <li>
              <Icon isSelected={navSelected} text="Logout">
                <BiLogOut />
              </Icon>
            </li>
          </ul>
        </div>
      </div>

      <div className="pageHeader">
        <Grid container>
          <Grid item xs={6} md={5} sm={6}>
            <h2>
              Watch<b>This</b>
            </h2>
          </Grid>
          <Grid xs={3} md={3} sm={6} item>
            <AiOutlineClockCircle /> <Moment format="DD MMMM hh:mm" />
          </Grid>
          <Grid md={3} sm={12} item>
              <Box justifyContent="flex-end" display="flex">
                <Box>
                    <div className="btn search-btn">
                        Name Lastname <BsPerson />
                    </div>
                </Box>
                <Box>
                    <span onClick={searchEnable} className="btn search-btn">
                        <BsSearch />
                    </span>
                </Box>
              </Box>
            {/* <div className="col-md-4" align="right">
              Name Lastname <BsPerson />
              <a onClick={searchEnable} className="btn search-btn">
                <BsSearch />
              </a>
              <Modal />
            </div> */}
          </Grid>
        </Grid>
        {/* <div className="container-fluid">
                    <div className="row" style={{padding:'10px'}}>
                        <div className="col-md-4">
                            <h2>Watch<b>This</b></h2>
                        </div>
                        <div className="col-md-4" align="center">
                            <AiOutlineClockCircle/> <Moment format="DD MMMM hh:mm"/>
                        </div>
                        <div className="col-md-4" align="right">
                            Name Lastname <BsPerson/>
                            <a onClick={searchEnable}  className="btn search-btn"><BsSearch/></a>
                            <Modal/>
                        </div>
                    </div>
                </div> */}
      </div>
    </>
  );
};

// const mapActiontoProps=(action)=>{
//     console.log(action)
//     return {
//         searchable:action.searchable
//     }
// }
//
// export default connect(null,mapActiontoProps)(Header);
export default Header;
