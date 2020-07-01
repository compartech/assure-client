import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 760,
        border: '1px solid rgba(0, 0, 0, .125)',
    },
    media: {
        height: 40,        
        paddingTop: '15%', // 16:9,
    },
});

const HilightCard = (props) => {
    const classes = useStyles();

    return (
        <Grid item xs={12} 
            style={{ textAlign: "center", padding: "1rem" }}
        >
            <Card className={classes.root}>
                <CardMedia
                    className={classes.media}
                    image={props.content.image}
                    title={props.content.company}
                />
                <CardContent>
                    <Typography gutterBottom variant="caption" component="h1">
                        {props.content.company}
                    </Typography>
                    <Typography component="p">
                        {props.content.announcement}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link to={props.content.link}>
                        <Button size="small" color="primary"> learn more </Button>
                    </Link>
                </CardActions>
            </Card>
        </Grid>
    );
}

export default HilightCard;