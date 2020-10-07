import React, { useEffect, useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import http from "../../http";
import { render } from "react-dom";
import { pure } from "recompose";
import { useSelector } from "react-redux";
import store from "./../../store/";
import { setActiveTvSeries } from "./../../store/actions/HeaderActions";

const useStyles = makeStyles({
  seasonEp: {
    display: "flex",
    flexDirection: "column",
    height: "150px",
    fontWeight: "bold",
  },

  
});

const SimpleCard = function SimpleCard(props) {
  const [loading, setLoading] = useState(false);
  // const [isDetailVisible,setIsDetailVisible]=useState(props.isDetailVisible?props.isDetailVisible:false)
  let [DetailVisible, setDetailVisible] = useState(null);

  const classes = useStyles();

  const cardDetailsHandler = async (name) => {
    store.dispatch(setActiveTvSeries(name));
    props.setTvSeriesSesions(cardData.totalSeasons);
    await setDetailVisible(name);
  };

  const [cardData, setCardData] = useState({});

  const activeSeries = useSelector((state) => state.TvSeriesName.tvSeiesName);

  useEffect(() => {
    setDetailVisible(activeSeries);
  });

  const CustomCard = (props) => {
    return props.DetailVisible == props.cardData.Title ? (
      <Card
        onClick={() => cardDetailsHandler(props.cardData.Title)}
        style={{ backgroundColor: "#f3bc2e", color: "white" }}
      >
        <CardContent>
          <Grid container>
            <Grid item xs={12}>
              <Box flexWrap="wrap" display="flex">
                <Box style={{ padding: "10px", marginRight: "130px" }}>
                  <h3>
                    <b>{props.cardData.Title}</b>
                  </h3>
                  <div className={classes.seasonEp}>
                    <span>{props.cardData.totalSeasons} Seasons</span>
                    <span>{props.cardData.episodes} Episodes</span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      fontWeight: "bold",
                    }}
                  >
                    <span>iMDB Rating: {props.cardData.imdbRating}/10</span>
                    <span>Go to iMDB Page</span>
                  </div>
                </Box>
                <Box style={{ border: "4px solid white" }}>
                  <img
                    src={props.cardData.Poster}
                    width="200px"
                    height="250px"
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    ) : (
      <Card
        onClick={() => cardDetailsHandler(props.cardData.Title)}
        style={{ backgroundColor: "white" }}
      >
        <CardContent>
          <Grid container>
            <Grid item xs={12}>
              <Box flexWrap="wrap" display="flex" flexDirection="column">
                <Box style={{ border: "4px solid #f3bc2e" }}>
                  <img
                    src={props.cardData.Poster}
                    width="150px"
                    height="200px"
                  />
                </Box>
                <Box>
                  <div>
                    <b>{cardData.Title}</b>
                  </div>
                  <div>iMDB Rating: {props.cardData.imdbRating}/10</div>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    );
  };

  useEffect(() => {
    http.get(`/?type=series&t=${props.name}&apikey=23fc6b51`).then((res) => {
      setCardData(res);
      setLoading(true);
    });
  }, []);

  return (
    <>
      {loading ? (
        <CustomCard DetailVisible={DetailVisible} cardData={cardData} />
      ) : (
        ""
      )}
    </>
  );
};

export default pure(SimpleCard);
