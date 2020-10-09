import React from "react";
import {Card} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Box from "@material-ui/core/Box";
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import {makeStyles} from "@material-ui/core/styles";
import _ from 'lodash';

function CircularProgressWithLabel(props) {
    const useStyles = makeStyles((theme) => ({
        colorPrimary:{
            color: '#f3bc2f',
        }
    //     element.style {
    //     background: gray;
    //     color: white;
    //     padding: 0px 9px;
    // }

    }));

    const classes=useStyles();

    return (
        <Box position="relative" display="inline-flex">
            <CircularProgress className={classes.colorPrimary} size={100} variant="static" value={props.value*10} />
            <Box
                top={0}
                left={0}
                bottom={0}
                right={0}
                color='red'
                position="absolute"
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <Typography style={{fontSize:20}} variant="caption" component="div">{`${props.value}`}</Typography>
            </Box>
        </Box>
    );
}

// CircularProgressWithLabel.propTypes = {
//     value: PropTypes.number.isRequired,
// };

const RatingCard=(props)=>{
    return(
        <>
            <Card>
                <CardContent>
                    <Box display="flex" flexDirection="row" justifyContent='space-between' bgcolor="background.paper">
                        <Box>
                            <b>{props.Season}</b>
                        </Box>
                        <Box>
                            <Badge
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                color="secondary"
                            >
                                IMDB
                            </Badge>
                        </Box>
                    </Box>
                    <Box  display="flex" flexDirection="column" bgcolor="background.paper">
                        <Box>
                            Rating:
                        </Box>
                        <Box alignSelf='center'>
                            <CircularProgressWithLabel value={_.random(5,9)} />
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </>
    )
}

export default RatingCard;