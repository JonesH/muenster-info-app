import React from "react";
import * as moment from "moment";
import "moment/locale/de";
import Typography from "@material-ui/core/Typography";
import RoomIcon from "@material-ui/icons/Room";
import ClockIcon from "@material-ui/icons/WatchLater";
import LabelIcon from "@material-ui/icons/Label";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  card: {
    margin: theme.spacing(2)
  },
  tag: {
    fontVariant: "small-caps"
  },
  title: {
    letterSpacing: 1,
    fontWeight: theme.typography.fontWeightLight
  },
  media: {
    height: 140
  },
  cardContent: {
    padding: theme.spacing(1, 2)
  },
  actions: {
    justifyContent: "center"
  },
  cardContentDetails: {
    height: 0,
    transition: "height 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"
  },
  detailsExpanded: {
    height: "auto",
    transition: "height 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"
  }
}));

function EventCard({ title, time, place, tags, image, description, lat, lon }) {
  const classes = useStyles();

  const [isExpanded, setExpanded] = React.useState(false);

  return (
    <Card className={classes.card} raised={true}>
      <CardMedia className={classes.media} image={image} title={title} />
      <CardContent className={classes.cardContent}>
        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          className={classes.title}
        >
          {title}
        </Typography>
        <Typography variant="body1" color="textSecondary" component="p">
          <List disablePadding={true}>
            <ListItem dense={true}>
              <ListItemIcon>
                <ClockIcon />
              </ListItemIcon>
              <ListItemText primary={moment(time).fromNow()} />
            </ListItem>
            <ListItem dense={true}>
              <ListItemIcon>
                <RoomIcon />
              </ListItemIcon>
              <ListItemText primary={place} />
            </ListItem>
            <ListItem dense={true}>
              <ListItemIcon>
                <LabelIcon />
              </ListItemIcon>
              <ListItemText primary={tags.join(", ")} />
            </ListItem>
          </List>
        </Typography>
      </CardContent>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            {description}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </Card>
  );
}

export default EventCard;
