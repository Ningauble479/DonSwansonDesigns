import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    width: 700,
    margin: '25px',
    display: 'flex'
  },
  media: {
    minHeight: 400,
    width: '50%',
    float: 'right'
  },
  content: {
      width: '50%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
  },
  mediaMini: {
      width: '100%',
      minHeight: 200
  },
  rightMedia: {
      display: 'flex',
      flexDirection: 'column',
      width: '50%',
      height: '100%'
  },
  cardMedia1: {
      display: 'flex'
  }
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2">
            Cup
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            A very pretty cup
          </Typography>

        <Button size="large" color="primary">
          Buy
        </Button>
        </CardContent>
        <CardActionArea className={classes.cardMedia1}>
        <CardMedia
          className={classes.media}
          image={require('./Test.jpg')}
          title="Contemplative Reptile"
        />
        <div className={classes.rightMedia}>
        <CardMedia
          className={classes.mediaMini}
          image={require('./Test.jpg')}
          title="Contemplative Reptile"
        />
        <CardMedia
          className={classes.mediaMini}
          image={require('./Test.jpg')}
          title="Contemplative Reptile"
        />
        </div>
      </CardActionArea>
    </Card>
  );
}