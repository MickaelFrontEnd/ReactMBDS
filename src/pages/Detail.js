import React, { useEffect, useState } from 'react';
import { searchByArtist } from '../services/SearchService';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import GroupInformation from '../components/GroupeInformation';
import GroupTabInformation from '../components/GroupeTabInformation';
import PropTypes from 'prop-types';

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
        <Box textAlign="center" mb={2}>
          <img src={data.picture.medium} alt={data.name}/>
          <Typography component="h2" variant="h2">{data.name}</Typography>
        </Box>
        <Typography component="p" variant="body1">{data.abstract}</Typography>
        <Box mt={2} mb={2}><GroupInformation data={data} /></Box>
        <Box mt={2} mb={2}><GroupTabInformation albums={data.albums} members={data.members} /></Box>
      </Box>
    );
  }
}

DetailComponent.propTypes = {
  match: PropTypes.object
}

export default DetailComponent;