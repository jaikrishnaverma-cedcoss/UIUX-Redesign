import React from 'react'

import { Button } from '@mui/material';
import { Paper } from '@mui/material'
const Items = (props) => {
    return (
        <Paper>
          <img src={props.item.image} style={{width:"100%"}} alt="" />
            
        </Paper>
    )
}


export default Items;
