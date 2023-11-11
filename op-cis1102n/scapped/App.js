import * as React from 'react'

import { Box } from '@mui/system';
import { Button, Menu, MenuItem } from '@mui/material';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
  useNavigate,
} from "react-router-dom";

import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import About from "./pages/About";
import HistoryOfCS from "./pages/blogs/HistoryOfCS"
import ISCD from "./pages/blogs/ISCD"
import UsesOfComputerSystem from "./pages/blogs/UsesOfComputerSystem"
import NumberSystem from "./pages/blogs/NumberSystem"
import ComputerComponentsAndOSs from "./pages/blogs/ComputerComponentsAndOSs"

import './App.css'
const box = {
  borderRadius: 3,
  border: '1px outset white',
  boxShadow: '1px 2px 5px #cccccc',
  bgcolor: '#71818E',
  top: 0,
  bottom: 20,
  position: 'sticky'
};
const button = {
  fontSize: 17,
  p: '11px',
  m: 1,
  color: 'black',
  borderRadius: 3,
  bgcolor: '#bfbfbf',
}
function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/about" element={<About />} />

            <Route path="/HistoryOfCS" element={<HistoryOfCS />} />
            <Route path="/ISCD" element={<ISCD />} />
            <Route path="/UsesOfComputerSystem" element={<UsesOfComputerSystem />} />
            <Route path="/NumberSystem" element={<NumberSystem />} />
            <Route path="/ComputerComponentsAndOSs" element={<ComputerComponentsAndOSs />} />

          </Route>
        </Routes>
      </Router>
    </div>
  );
}
const Layout = () => {
  //Top bsr with links

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const link = useNavigate();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  }
  const toHome = () => {
    link('/');
  }
  const toAbout = () => {
    link('/about');
  }
  const toBlog = () => {
    setAnchorEl(null);
    link('/blogs');
  }
  const toHCS = () => {
    setAnchorEl(null);
    link('/HistoryOfCS');
  }
  const toISCD = () => {
    setAnchorEl(null);
    link('/ISCD');
  }
  const toUCS = () => {
    setAnchorEl(null);
    link('/UsesOfComputerSystem');
  }
  const toNS = () => {
    setAnchorEl(null);
    link('/NumberSystem');
  }
  const toCCOS = () => {
    setAnchorEl(null);
    link('/ComputerComponentsAndOSs');
  }
  return (
    <div>
      <Box component="section" sx={box}>
        <Button variant="contained" disableElevation sx={button} onClick={toHome}>Home</Button>
        <Button variant="contained" disableElevation sx={button} onClick={handleClick}>Blogs</Button>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={toBlog}>Blogs Page</MenuItem>
          <MenuItem onClick={toHCS}>History of Computer Science</MenuItem>
          <MenuItem onClick={toISCD}>Information System: Concepts and Definitions</MenuItem>
          <MenuItem onClick={toUCS}>Uses of Computer System</MenuItem>
          <MenuItem onClick={toNS}>Number Systems</MenuItem>
          <MenuItem onClick={toCCOS}>Computer Components & Operating Systems</MenuItem>
        </Menu>
        <Button variant="contained" disableElevation sx={button} onClick={toAbout}>About</Button>
      </Box>
      <Outlet />
    </div>

  )
};
export default App;
