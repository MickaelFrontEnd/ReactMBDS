import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import PropTypes from 'prop-types';

const AlbumDetail = ({ open, onClose, album }) => {
  return (
    <Dialog aria-labelledby="album-dialog" open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <Box p={2}>
        <Box textAlign="center" mb={2}>
          <Box mb={2}>
            <img src={album.cover.medium} alt={album.title} />
          </Box>
          <Typography component="h3" variant="h5">{album.title}</Typography>
        </Box>
        <List component="nav" aria-label="song list">
          {album.songs?.map((song) => (
            <ListItem key={song._id}>
              <ListItemText primary={`${song.position + 1}) ${song.title}`} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Dialog>
  )
};

AlbumDetail.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  album: PropTypes.array
}

export default AlbumDetail;