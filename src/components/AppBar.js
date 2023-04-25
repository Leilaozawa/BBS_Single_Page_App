// Import necessary components from MUI library
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';

// Define label object to pass to Switch component
const label = { inputProps: { 'aria-label': 'Switch demo' } };

// Define functional component and accept two props, `change` and `check`
export default function ButtonAppBar({change,check}) {
  return (
    // Use Box component with sx prop to add flexible sizing
    <Box sx={{ flexGrow: 1 }}>
      {/* Use AppBar component to create a navigation bar */}
      <AppBar position="static">
        {/* Use Toolbar component to add content to the navigation bar */}
        <Toolbar>
          {/* Use Typography component to add a title to the navigation bar */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            BBS Test
          </Typography>
          {/* Use Switch component to add a toggle switch to the navigation bar */}
          <Switch {...label} onChange={change} checked={check}/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
