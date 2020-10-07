import Grid from "@material-ui/core/Grid";
import RatingCard from "./utility/RatingCard";
import React from "react";
import _ from 'lodash';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    ratingSection:{
        marginTop:'60px'
    }
}));

export default (props)=>{
    const classes = useStyles();

    return(
        <Grid container className={classes.ratingSection} spacing={2}>
            {_.times(props.seasons, (value) => {
               let sesions=`Season ${value+1}`
               return(
                   <Grid key={value} item xs={12} sm={2}>
                       <RatingCard Season={sesions}/>
                   </Grid>
               )
            })}
        </Grid>
    )
}