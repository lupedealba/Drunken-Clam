import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import { Grid, MenuItem } from '@material-ui/core';
import './Card.css'
import housingDataArray from './SampleData.json';
// console.log(housingDataArray);

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 450,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }

//   let houseData =     {
//     "listingLink": "https://www.zillow.com/homedetails/33454-Manchester-Rd-Temecula-CA-92592/59405056_zpid/",
//     "address": "33454 Manchester Rd, Temecula, CA 92592",
//     "price": "$498,000",
//     "bedrooms": "5",
//     "baths": "3",
//     "houseSize": "3,717",
//     "year": "2003",
//     "heating": "Other",
//     "cooling": "Central",
//     "lotSize": "6,098 sqft",
//     "listingAgent": "zhenwei fu",
//     "brokerage": "ReMax 2000 Realty",
//     "houseImage": "https://photos.zillowstatic.com/p_h/ISesy5ahlzjfw01000000000.jpg",
//     "agentImage": "https://photos.zillowstatic.com/h_n/ISma6qzaz92yjd0000000000.jpg",
//     "details": "Seller is motivated. Well-maintained home located in desirable area of Temecula. Euro-Mediterranean style inside and out welcomes you the moment you step through the front door. The Downstairs is ideal if you have kids who need space!; there are three good-sized bedrooms, a long hall work area, 2nd living room and an office with French doors leading out to a charming wading pool with water features. Good size backyard is perfect for family party. Best of all about this home has (owned) Solar system will help you save a lot of money! don't miss this nice house!"
//   }

  return (
      <Grid container style={{ paddingTop: 10, paddingLeft: 30, paddingRight: 30 }} spacing={2}>

      { housingDataArray.map((houseData, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3}>
      
        <Card className={classes.card}>
        <CardHeader
            avatar={
            <Avatar aria-label="avatar" className={classes.avatar}>
                <img src={ houseData.agentImage } alt={ houseData.listingAgent } />
            </Avatar>
            }
            action={
            <IconButton aria-label="Settings">
                <MoreVertIcon>
                  <MenuItem primaryText="Refresh" />
                  <MenuItem primaryText="Send feedback" />
                  <MenuItem primaryText="Settings" />
                  <MenuItem primaryText="Help" />
                  <MenuItem primaryText="Sign out" />
                </MoreVertIcon>
            </IconButton>
            }
          title= { <Typography variant="subtitle2"> { houseData.price } </Typography> }
          subheader= { houseData.address }
        />
        <CardMedia
            className={classes.media}
            image= { houseData.houseImage }
            title=""
        />
        <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
            <span>Beds: { houseData.bedrooms } &bull; Baths: { houseData.baths } &bull; Size: { houseData.houseSize } sqft</span><br />
            Year: {houseData.year} &bull; Lot Size: {houseData.lotSize}<br />
            Agent: { houseData.listingAgent } <br/> { houseData.brokerage }
            </Typography>
        </CardContent>
        <CardActions disableSpacing>
            <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="Share">
            <ShareIcon />
            </IconButton>
            <IconButton
            className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="Show more"
            >
            <ExpandMoreIcon />
            </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
            <Typography paragraph>
                { houseData.details }
            </Typography>
            
            </CardContent>
        </Collapse>
        </Card>
        </Grid>
    ))}</Grid>
  );
  
}

