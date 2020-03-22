import React, { useEffect, useState } from 'react';
import { searchByArtist } from '../services/SearchService';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';

const DetailComponent = ({ match }) => {

  const [data, setData] = useState(undefined);
  const artist = match.params.id;

  useEffect(() => {
    searchByArtist(artist)
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        alert(err);
      })
  }, [artist]);


  if (!data) {
    return (
      <Box mx="auto" textAlign="center" pt={5} pb={5}>
        <CircularProgress />
      </Box>
    );
  }
  else {
    return (
      <Box mx="auto" pt={5} pb={5}>
        <Box textAlign="center">
          <img src={data.picture.medium} />
          <Typography component="h2" variant="h2">{data.name}</Typography>
        </Box>
        <Typography component="p" variant="body1">{data.abstract}</Typography>
      </Box>
    );
  }
}

export default DetailComponent;