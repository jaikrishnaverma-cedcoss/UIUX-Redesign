import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import InputIcon from '@mui/icons-material/Input';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Product from './Product';
import { Badge, Button } from '@mui/material';
import Rating from '@mui/material/Rating';
import Nav from './Nav';
import IcecreamIcon from '@mui/icons-material/Icecream';
import Carousel from 'react-material-ui-carousel';
import Items from './Items'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { useContext } from 'react';
import { UserContext } from '../App';
import Cart from './Cart';

const drawerWidth = 240;
export default function Sidebar() {
  type Anchor = 'top' | 'left' | 'bottom' | 'right';
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const user=useContext(UserContext);
  var items = [
    {
        name: "Random Name #1",
        description: "Probably the most random thing you have ever seen!",
        image:"banner.png"
    },
    {
        name: "Random Name #2",
        description: "Hello World!",
        image:"banner2.jpg"
    }
]
const toggleDrawer =
(anchor: Anchor, open: boolean) =>
(event: React.KeyboardEvent | React.MouseEvent) => {
  if (
    event &&
    event.type === 'keydown' &&
    ((event as React.KeyboardEvent).key === 'Tab' ||
      (event as React.KeyboardEvent).key === 'Shift')
  ) {
    return;
  }

  setState({ ...state, [anchor]: open });
};

const list = (anchor: Anchor) => (
  <Box
    sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 ,zIndex:"1202"}}
    role="presentation"
    // onClick={toggleDrawer(anchor, false)}
    // onKeyDown={toggleDrawer(anchor, false)}
  >
   <Typography variant="h5" color="#bb0000" sx={{textAlign:"center",margin:"10px"}}>Cart Data</Typography>
    <Cart cart={user.state.cart}/>
  </Box>
);


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar sx={{display:"flex",justifyContent:"space-between"}}>
          {/* <Typography variant="h6" noWrap component="div">
            Clipped drawer
          </Typography> */}
          <Box sx={{display:"flex",alignItems:"center"}}> <img src="way2door-min.png" style={{width:"100px"}} alt="" />
         
          </Box> <Typography>Today's order will be delivered tomorrow. सबसे सस्ता और सबसे अच्छा. </Typography>
         
         <Box sx={{display:"flex",alignItems:"center",justifyContent:"space-between",width:"12%"}}>
          <Button sx={{background:"white"}}  onClick={toggleDrawer('top', true)}><InputIcon/>Login</Button>
          <Box> 
          <Badge color="primary" badgeContent={user.state.cart.length}>
          <ShoppingCartIcon fontSize={'large'}  onClick={toggleDrawer('bottom', true)} />{" "}
        </Badge>
        </Box> </Box> 
        </Toolbar>
      
      </AppBar>
    {(['left', 'right', 'top', 'bottom'] as const).map((anchor) => (
  <React.Fragment key={anchor}>
    {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
    <SwipeableDrawer
      anchor={anchor}
      open={state[anchor]}
      onClose={toggleDrawer(anchor, false)}
      onOpen={toggleDrawer(anchor, true)}
    >
      {list(anchor)}
    </SwipeableDrawer>
  </React.Fragment>
))}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}



      >
        <Typography variant="body1" color="black"></Typography>
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
          {/* <ListItem key={"text"} disablePadding> */}
                {/* <ListItemButton> */}
                  <ListItemIcon>
                  <Box component="span" sx={{ p: 2, border: '1px dashed grey',}}>
  
          <Typography variant="h6" noWrap component="div">
           LUCKNOW VEG
          </Typography> 
          <Typography variant="h6" noWrap component="div">
            EXPRESS
          </Typography> 
          <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
          <Typography variant="subtitle1" noWrap component="div">
            Average 3.5/5
          </Typography>
          <Button variant="contained" sx={{fontSize:"10px",backgroundColor:"red"}}>
  View Reviews
</Button>
<Button variant="contained"   sx={{fontSize:"10px",backgroundColor:"green"}} href="#contained-buttons">
  Contact Info
</Button>
    </Box>
        </ListItemIcon>    
            {['Fresh Fruits', 'Fresh Vegetables', 'Dry Fruits'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {[ 'Fresh Non Veg','Dairy Products','Frozen Products'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                  <IcecreamIcon/>
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />



        <Carousel>
            {
                items.map( (item, i) => <Items key={i} item={item} /> )
            }
        </Carousel>


       <Product/>
      </Box>
    </Box>
  );
}
