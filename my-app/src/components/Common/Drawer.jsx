import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Sidebar from './Sidebar';
import './common.scss';


export default function TemporaryDrawer(props) {
  const {open, setOpen} = props;

  const handleClose = () => {
    setOpen(false);
  }

  const DrawerList = (
    <Box sx={{ width: 300 }} role="presentation" onClick={handleClose}>
      <List>
      <Sidebar />
      </List>
    </Box>
  );

  return (
    <div>
      <Drawer anchor="right" open={open} onClose={handleClose} >
        {DrawerList}
      </Drawer>
    </div>
  );
}