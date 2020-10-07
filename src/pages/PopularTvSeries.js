import React, { useEffect, useRef, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from "../layouts/utility/Card";
import RatingCard from "../layouts/utility/RatingCard";
import Box from "@material-ui/core/Box";
import Ratings from "../layouts/Ratings";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '0px',
        margin: '18px 0px'
    },
    ratingSection: {
        marginTop: '60px'
    }
}));

const PopularTvSeries = () => {

    const [seasons, setSeasons] = useState(10)

    const setTvSeriesSesions = (totalSeasons) => {
        setSeasons(totalSeasons)
    }

    const [tvSeries, setTvSeries] = useState([
        {
            name: 'westworld',
            type: 'series'
        },
        {
            name: 'TVF Pitchers',
            type: 'series'
        },
        {
            name: 'Narcos',
            type: 'series'
        },
        {
            name: 'Mahabharat',
            type: 'series'
        },
        {
            name: 'Ramayan',
            type: 'series'
        },
    ]);

    const classes = useStyles();

    return (
        <>

            <div style={{ width: '100%', marginBottom: '12px' }}>
                <Box flexWrap="wrap"
                    display="flex"
                    justifyContent="flex-start"
                    flexDirection="row"

                >
                    {tvSeries.map((series, index) => (
                        <Box p={1} key={index}>
                            <Card setTvSeriesSesions={setTvSeriesSesions} isDetailVisible={index == 0 ? true : false} name={series.name} />
                        </Box>
                    ))}
                </Box>
            </div>
            <Ratings seasons={seasons} />
        </>
    )
}

export default PopularTvSeries