import React, { useState } from 'react';
import searchByFullText from '../services/SearchService';
import Search from '../components/SearchComponent';
import Tile from '../components/TileComponent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';

const Home = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const searchHandler = (text) => {
    setIsLoading(true);
    searchByFullText(text)
      .then((result) => {
        setData(result);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        alert(error);
      })
  };

  const renderLoader = () => {
    return isLoading && (
      <Box mx="auto" textAlign="center" pt={5} pb={5}>
        <CircularProgress />
      </Box>
    )
  }

  const renderNoResult = () => {
    if (data === undefined || data.length <= 0) {
      return (
        <Typography component="div">
          <Box textAlign="center" pt={5} pb={5} fontSize={20}>"Il semblerait que vous n'avez pas fait de recherche"</Box>
        </Typography>
      )
    }
  }

  const renderResult = () => (
    !isLoading && <Grid container spacing={1}>
      {data && data.map((item, index) => (
        <Grid item xs={3} spacing={3} key={index}>
          <Tile
            title={item.name}
            picture={item.picture}
            url={`/artist/${item.name}`}
          />
        </Grid>
      ))}
    </Grid>
  )

  return (
    <Box pt={2}>
      <Typography variant="h5" component="h2">
        <Box textAlign="center">Bienvenue, veuillez taper le nom de votre groupe préferé en bas:</Box>
      </Typography>
      <Box mt={2} width={1 / 2} mx="auto" mb={2}>
        <form noValidate autoComplete="off">
          <Search
            placeholder="Rechercher un nom de groupe ici"
            searchFunction={searchHandler} />
        </form>
      </Box>
      <Box pt={2} pb={2}>
        {renderResult()}
        {renderLoader()}
        {renderNoResult()}
      </Box>
    </Box>
  )

}

export default Home;