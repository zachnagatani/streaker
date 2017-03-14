import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { hashHistory } from 'react-router';

const NavMenu = props => {
    return (
        <IconMenu
            iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
            anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
            targetOrigin={{horizontal: 'right', vertical: 'top'}}
            style={{display: 'flex', alignItems: 'center'}}
            iconStyle={{color: '#fff'}}
        >
            <MenuItem primaryText="Dashboard" onTouchTap={() => hashHistory.push('/dashboard')} />
            <MenuItem primaryText="Log Out" />
        </IconMenu>
    );
};

export default NavMenu;