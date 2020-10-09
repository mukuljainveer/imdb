import React from "react";
import { Tab, Nav } from 'react-bootstrap'
import TvSeries from "../pages/TvSeries";
import Box from "@material-ui/core/Box";
import PopularTvSeries from "../pages/PopularTvSeries";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
    formControl: {
        minWidth:120
    },
    rootLabel:{
        top:-7
    },
    tabContentContainer:{
        position: 'absolute',
        margin: '10px',
        top: '42px',
        width: '90%',
    }
}));

const TabSwitcher = () => {
    const classes = useStyles();

    const [state, setState] = React.useState({
        age: "",
        name: "hai"
    });

    const handleChange = (event) => {
        const name = event.target.name;
        setState({
            ...state,
            [name]: event.target.value
        });
    };

    return (
        <>
            <Box display="flex" flexDirection="row" justifyContent='space-between'>
                <Box>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first" >
                        <Nav variant="pills" className="flex-row">
                            <Nav.Item>
                                <Nav.Link eventKey="first">My Series</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Popular</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content className={classes.tabContentContainer}>
                            <Tab.Pane eventKey="first">
                                <TvSeries />
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <PopularTvSeries />
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </Box>
                <Box>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel className={classes.rootLabel}  htmlFor="outlined-age-native-simple">Rating</InputLabel>
                        <Select
                            native
                            value={state.rating}
                            onChange={handleChange}
                            label="Rating"
                            inputProps={{
                                style:{
                                    width: '166px',
                                    padding: '11px',
                                },
                                name: "Rating",
                                id: "outlined-age-native-simple"
                            }}
                        >
                            <option aria-label="None" value="" />
                            <option>Alphabet (a-z)</option>
                            <option>Alphabet (z-a)</option>
                            <option>Rating (low to high)</option>
                            <option>Rating (high to low)</option>
                        </Select>
                    </FormControl>

                    {/* <select style={selectBoxStyle} value="Rating">
                       <option disabled>Rating</option>
                       <option>Alphabet (a-z)</option>
                       <option>Alphabet (z-a)</option>
                       <option>Rating (low to high)</option>
                       <option>Rating (high to low)</option>
                   </select> */}
                </Box>
            </Box>
        </>
    )
}

export default TabSwitcher;