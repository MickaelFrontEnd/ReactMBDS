import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import AlbumDetail from './AlbumDetail';
import MemberDetail from './MemberDetail.txt';

const useStyles = makeStyles(theme => ({
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useGroupTabStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export const GroupTabInformation = ({ albums, members }) => {
  const groupTabClasses = useGroupTabStyles();
  const [value, setValue] = React.useState(0);
  const [album, setAlbum] = React.useState({
    album: {
      cover: {
        medium: ''
      },
      title: ''
    },
    open: false
  });

  const handleChange = (event, newValue) => {
    event.preventDefault();
    setValue(newValue);
  };

  const openDialog = (album) => {
    setAlbum({
      album,
      open: true
    });
  }

  const onDialogCloseHandler = (album) => {
    setAlbum({
      album,
      open: false
    })
  }

  const classes = useStyles();

  return (
    <div className={groupTabClasses.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="Group information tab">
          <Tab label="Albums" {...a11yProps(0)} />
          {members.length > 0 && <Tab label="Membre du groupe" {...a11yProps(1)} />}
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <GridList className={classes.gridList} cols={3.5} cellHeight={{ height: 400 }}>
          {albums.map((album) => (
            <GridListTile key={album._id} onClick={() => openDialog(album)} style={{ cursor: "pointer" }}>
              <img src={album.cover?.medium} alt={album.title} />
              <GridListTileBar title={album.title} />
            </GridListTile>
          ))}
        </GridList>
      </TabPanel>
      {members.length > 0 && <TabPanel value={value} index={1}>
        <Box>
          {members.map((member) => (
            <MemberDetail member={member} />
          ))}
        </Box>
      </TabPanel>
      }
      <AlbumDetail open={album.open} album={album.album} onClose={() => onDialogCloseHandler(album.album)} />
    </div>
  );
}

export default GroupTabInformation;