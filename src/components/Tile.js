import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  media: {
    height: 200,
  },
  content: {
    height: 50
  },
  title: {
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    overflow: "hidden"
  }
});

const Tile = ({ title, picture, url, album }) => {
  const classes = useStyles();
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={picture}
          title={title}
        />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2" className={classes.title}>{title}</Typography>
          {album && <Typography variant="body2" color="textSecondary" component="p">Album: {album}</Typography>}
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" component={Link} to={url}>
          Voir en detail
        </Button>
      </CardActions>
    </Card>
  )
};

Tile.propTypes = {
  title: PropTypes.string,
  picture: PropTypes.string,
  url: PropTypes.string,
  album: PropTypes.string
};

export default Tile;