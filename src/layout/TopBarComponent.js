import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';

const TopBar = () => (
  <AppBar position="static">
    <ToolBar>
      <IconButton edge="start" color="inherit" aria-label="menu">
        <MenuIcon />
      </IconButton>
      <Typography variant="h6">
        Music Band
      </Typography>
    </ToolBar>
  </AppBar>
)
export default TopBar;