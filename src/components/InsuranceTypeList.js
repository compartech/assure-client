import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Switch from '@material-ui/core/Switch';

import DriveEtaIcon from '@material-ui/icons/DriveEta';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import DirectionsBoatIcon from '@material-ui/icons/DirectionsBoat';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function InsuranceTypeList() {
    const classes = useStyles();
    const [checked, setChecked] = React.useState(['auto', 'housing']);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    return (
        <List subheader={<ListSubheader>Insurance Type</ListSubheader>} className={classes.root}>
            <ListItem>
                <ListItemIcon>
                    <DriveEtaIcon />
                </ListItemIcon>
                <ListItemText id="switch-list-label-auto" primary="Auto" />
                <ListItemSecondaryAction>
                    <Switch
                        edge="end"
                        onChange={handleToggle('auto')}
                        checked={checked.indexOf('auto') !== -1}
                        inputProps={{ 'aria-labelledby': 'switch-list-label-auto' }}
                    />
                </ListItemSecondaryAction>
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <HomeWorkIcon />
                </ListItemIcon>
                <ListItemText id="switch-list-label-housing" primary="Housing" />
                <ListItemSecondaryAction>
                    <Switch
                        edge="end"
                        onChange={handleToggle('housing')}
                        checked={checked.indexOf('housing') !== -1}
                        inputProps={{ 'aria-labelledby': 'switch-list-label-housing' }}
                    />
                </ListItemSecondaryAction>
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <DirectionsBoatIcon />
                </ListItemIcon>
                <ListItemText id="switch-list-label-boat" primary="Boat" />
                <ListItemSecondaryAction>
                    <Switch
                        edge="end"
                        onChange={handleToggle('boat')}
                        checked={checked.indexOf('boat') !== -1}
                        inputProps={{ 'aria-labelledby': 'switch-list-label-boat' }}
                    />
                </ListItemSecondaryAction>
            </ListItem>
        </List>
    );
}
