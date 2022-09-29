import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Cards from './Cards';
import { useContext } from 'react';
import { UserContext } from '../App';
import { Button } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Product() {
  const user = useContext(UserContext)
  console.log(user)

  let checkQuantity=(key)=>{
    let quan=0
    user.state.cart.filter(x=>{
if(x.id===key)
quan=x.quantity
return true
    })
    if(quan===0)
    return "";
    else
    return quan;
  }
// let ddr=["Kiwi - Imported-w@d.jpg","Pineapple-w@d.jpg","Pineapple-way2door.jpg","Pomegranate (Anaar).jpg","Kiwi - Imported-w@d.jpg","Pineapple-w@d.jpg","Pineapple-way2door.jpg","Pomegranate (Anaar).jpg",,"Pomegranate (Anaar).jpg","Kiwi - Imported-w@d.jpg","Pineapple-w@d.jpg"]
//  console.log(user)
    return (
    <Box sx={{ flexGrow: 1 }}>
      <Box sx={{display:"flex",justifyContent:"space-between",padding:"0% 1%", border: 1 ,margin:2,borderColor: 'primary.main'}}><Box>Order Timing : 8:00 am To 6:00 pm <Button varient="outlined">Store Open</Button></Box><Box><Button >My Offer</Button><Button >Page Like 12</Button></Box></Box>
      <Grid container spacing={2}>
        {
user.state.store.map(x=>{
   return <Grid item xs={12} sm={6} md={3} lg={2} xl={2}><Cards data={x} incrDecr={user.incrDecr} AddCart={user.AddCart} cart={user.state.cart} quantity={checkQuantity(x.id)}/></Grid>
})
        }
      </Grid>
    </Box>

    
  );
}
