import React from 'react';
import { Link, hashHistory } from 'react-router';

import Drawer from 'material-ui/Drawer';
import FlatButton from 'material-ui/FlatButton';
import ChevronLeft from 'material-ui/svg-icons/navigation/chevron-left';
import Home from 'material-ui/svg-icons/action/home';

import {grey400, grey600, grey700, white, faintBlack} from 'material-ui/styles/colors';

export default class Navigation extends React.Component {
    constructor(props) {
        super(props);
    }

    goTo(link) {
        hashHistory.push(link);
    }

    render() {
        const styles = {
            drawer: {
                backgroundColor: grey700,
                top: '60px'
            },
            navDrawer: {
                backgroundColor: grey700,
                top: '110px',
                height: 'calc(100% - 110px)'
            },
            navToggle: {
                position: 'fixed',
                top: '60px',
                left: '290px',
                zIndex: '1400',
                height: '48px',
                width: '30px',
                minWidth: '30px',
                lineHeight: '48px',
                backgroundColor: grey700,
                transition: '300ms all'
            },
            navToggleIcon: {
                color: white,
                fill: white,
                height: '30px',
                width: '30px',
                transition: '300ms all'
            },
            item: {
                color: white,
                textTransform: 'uppercase',
                height: '48px',
                borderBottom: '1px solid ' + grey600
            },
            navItem: {
                color: white,
                textTransform: 'uppercase',
                height: '16px',
                padding: '16px',
                borderBottom: '1px solid ' + grey600,
                cursor: 'pointer'
            },
            linkFilter: {
                color: white,
                fontSize: '14px',
                height: '48px'
            },
            homeButtonIcon: {
                fill: grey400,
                color: grey400
            },
            homeButton: {
                color: white,
                margin: '13px 0',
                padding: '0',
                height: '22px',
                lineHeight: '22px'
            },
            searchButton: {
                margin: '10px 12px',
                padding: '7px',
                borderRadius: '2px',
                height: '36px',
                width: '294px',
                border: '1px solid ' + grey400,
                fontSize: '16px',
                color: grey600,
                boxShadow: '0px 1px 2px 0px ' + faintBlack
            }
        };

        if (!this.props.open) {
            styles.navToggle.left = '-6px';
            styles.navToggleIcon.transform = 'rotate(-180deg)';
        }

        return (
            <div>
                <FlatButton
                    icon={<ChevronLeft style={styles.navToggleIcon}/>}
                    style={styles.navToggle}
                    hoverColor={grey700}
                    onTouchTap={this.props.toggleNav}
                />
                <Drawer open={this.props.open} containerStyle={styles.drawer} width={320}>
                    <ul style={{listStyle: 'none', padding: '0', margin: '0'}}>
                        <li style={styles.item}>
                            <FlatButton
                                label='Home'
                                icon={<Home style={styles.homeButtonIcon}/>} href='/fin'
                                hoverColor={grey700}
                                style={styles.homeButton}
                            />
                        </li>
                        <li id='drawerLogo' style={styles.navItem} onClick={this.goTo.bind(null, 'logo')}>
                            Logo
                        </li>
                        <li id='drawerMenu' style={styles.navItem} onClick={this.goTo.bind(null, 'menu')}>
                            Menu
                        </li>
                        <li id='drawerNavigation' style={styles.navItem} onClick={this.goTo.bind(null, 'navigation')}>
                            Navigation
                        </li>
                    </ul>
                </Drawer>
            </div>
        )
    }
}