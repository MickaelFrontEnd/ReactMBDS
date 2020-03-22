import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  list: {
    width: 250,
  }
});

const TopBar = () => {

  const classes = useStyles();
  const [openMenu, setOpenMenu] = React.useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  }

  return (
    <AppBar position="static">
      <ToolBar>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleMenu}>
          <MenuIcon />
        </IconButton>
        <Drawer open={openMenu} onClose={toggleMenu}>
          <div
            className={classes.list}
            role="presentation"
          >
            <List>
              <ListItem key="Home" component={Link} to="/" onClick={toggleMenu}>
                <ListItemIcon><HomeIcon /></ListItemIcon>
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem button key="GitHub" component="a" href="https://github.com/MickaelFrontEnd/ReactMBDS/" onClick={toggleMenu}>
                <ListItemIcon><GitHubIcon /></ListItemIcon>
                <ListItemText primary="GitHub" />
              </ListItem>
            </List>
          </div>
        </Drawer>
        <Typography variant="h6">
          Music Band
        </Typography>
      </ToolBar>
    </AppBar>
  );
}
export default TopBar;