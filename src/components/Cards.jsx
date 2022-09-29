import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box } from '@mui/system';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button } from '@mui/material';
import {ButtonGroup} from '@mui/material';
import {Badge} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Cards(props) {
  const [itemCount, setItemCount] = React.useState(0);
  const [expanded, setExpanded] = React.useState(false);
console.log("sdf",props)
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card classname="carder" sx={{ maxWidth: 345,boxShadow: "rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;",maxHeight:"400"}}>
      <CardHeader
        avatar={
          <Box sx={{ bgcolor: red[500],padding:"1%",borderRadius:"5px"}} aria-label="recipe">
           {`${props.data.offer}% SAVE`}
          </Box>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        
      />
      <CardMedia
        component="img"
        height="40%"
        image={props.data.pic}
        alt="Paella dish"
      />
      <CardContent >
        <Typography variant="h6" color="text.secondary" sx={{fontSize:"14px",color:"black"}}>
        {props.data.name}
        </Typography>
        <Typography variant="h7" color="text.secondary" sx={{fontSize:"12px"}}>
    {`${props.data.gram} Price: ${props.data.price}`}
        </Typography>
      </CardContent>
      <CardActions>
      <Badge color="secondary" badgeContent={(props.quantity<1)?0:props.quantity}>
          <ShoppingCartIcon  onClick={()=>
              props.AddCart(props.data)
            } />{" "}
        </Badge>
        <ButtonGroup >
          <Button
            onClick={()=>
             props.incrDecr(false,props.data.id)
            }
          >
            {" "}
            <RemoveIcon fontSize="small" />
          </Button>
          <Button
            onClick={()=>
              props.AddCart(props.data)
            }
          >
            {" "}
            <AddIcon fontSize="small"/>
          </Button>
        </ButtonGroup>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
