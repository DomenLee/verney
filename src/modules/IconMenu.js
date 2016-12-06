/**
 * Created by domen on 2016/12/4.
 */

import React, {Component} from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import Download from 'material-ui/svg-icons/file/file-download';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import MenuSvgIcon from 'material-ui/svg-icons/navigation/menu'
import {brown500} from 'material-ui/styles/colors'

class IconMenus extends Component {
    render() {
        return (
            <IconMenu
                iconButtonElement={
                    <IconButton>
                        <MenuSvgIcon
                            color={brown500}
                        />
                    </IconButton>}
                anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                targetOrigin={{horizontal: 'left', vertical: 'top'}}
            >
                <MenuItem
                    primaryText="Copy & Paste"
                    rightIcon={<ArrowDropRight />}
                    menuItems={[
                        <MenuItem primaryText="Cut" />,
                        <MenuItem primaryText="Copy" />,
                        <Divider />,
                        <MenuItem primaryText="Paste" />,
                    ]}
                />

                <MenuItem
                    primaryText="Case Tools"
                    rightIcon={<ArrowDropRight />}
                    menuItems={[
                        <MenuItem primaryText="UPPERCASE" />,
                        <MenuItem primaryText="lowercase" />,
                        <MenuItem primaryText="CamelCase" />,
                        <MenuItem primaryText="Propercase" />,
                    ]}
                />
                <Divider />
                <MenuItem primaryText="Download" leftIcon={<Download />} />
                <Divider />
                <MenuItem value="Del" primaryText="Delete" />

            </IconMenu>
        )
    }
}

export default IconMenus;