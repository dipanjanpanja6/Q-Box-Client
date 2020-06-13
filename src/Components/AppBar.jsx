import React from 'react';
import { Link, fade, makeStyles, Menu, AppBar, MenuItem, Toolbar, IconButton, Typography, InputBase, Badge } from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import Home from '@material-ui/icons/HomeRounded';
import Info from '@material-ui/icons/InfoRounded';
import Person from '@material-ui/icons/PersonRounded';
import MenuBook from '@material-ui/icons/MenuBookRounded';
import CategoryIcon from '@material-ui/icons/Category';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import OfflineBoltIcon from '@material-ui/icons/OfflineBolt';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { Theme } from '../theme'
import { Link as RouterLink, useHistory } from 'react-router-dom';
import SvgIcon from '@material-ui/core/SvgIcon';

const useStyles = makeStyles((theme) => ({
    Appbar: {
        background: Theme.boxColor,

    },
    AppbarAll: {
        backgroundColor: 'rgb(0,0,0,0)'
    },
    grow: {
        flexGrow: 1,
        // width:'100vw'
    },
    menuButton: {
        padding: 0
    },
    title: {
        display: 'block',
        color: '#fff',
        // [theme.breakpoints.up('sm')]: {
        //     display: 'block',
        // },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    button: {
        borderRadius: '50%',
        height: `calc(1.75vh + 1.75vw)`,
        width: `calc(1.75vh + 1.75vw)`,
        background: Theme.boxColor,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: `4px 4px 5px 1px rgba(00,00,00,0.2),-4px -4px 5px 1px rgba(255,255,255,0.2)`,
    },
    menu: {
        background: Theme.boxColor,
        right: 16,
        left: 'auto !important'
    }

}));

export default function PrimarySearchAppBar(props) {
    const classes = useStyles();
    const history = useHistory()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    function ElevationScroll(props) {
        const { children, window } = props;
        console.log(props);

        const trigger = useScrollTrigger({
            disableHysteresis: true,
            threshold: 0,
            //   target: window ? window() : undefined,
        });

        return React.cloneElement(children, {
            elevation: trigger ? 4 : 0,
            className: trigger ? (classes.Appbar) : (classes.AppbarAll)
        });
    }

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';


    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            classes={{ paper: classes.menu }}
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            anchorPosition={{ left: '100px' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem onClick={() => history.push('/qbook')}>
                <IconButton color="inherit">
                    {/* <div className={classes.button}> */}
                    <LibraryBooksIcon />
                    {/* </div> */}
                </IconButton>
                <p>Q-Book</p>
            </MenuItem>
            <MenuItem onClick={() => history.push('/courses')}>
                <IconButton color="inherit">
                    {/* <div className={classes.button}> */}
                    <FormatListBulletedIcon />
                    {/* </div> */}
                </IconButton>
                <p>Courses</p>
            </MenuItem>
            <MenuItem>
                <IconButton aria-label="show 11 new notifications" color="inherit">
                    <Badge badgeContent={11} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={() => history.push('/about')}>
                <IconButton color="inherit">
                    {/* <div className={classes.button}> */}
                    <Info />
                    {/* </div> */}
                </IconButton>
                <p>About</p>
            </MenuItem>
            <MenuItem onClick={() => history.push('/login')}>
                <IconButton color="inherit" >
                    {/* <div className={classes.button}> */}
                    <AccountCircle />
                    {/* </div> */}
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    return (
        <div className={classes.grow}>
            <ElevationScroll {...props}>

                <AppBar >
                    <Toolbar>
                        <IconButton
                            disableRipple
                            onClick={() => { history.push('/home') }}
                            edge="start"
                            className={classes.menuButton}
                            color="inherit"
                        >
                            <SvgIcon style={{ height: 50, width: 50 }}>
                                <svg viewBox="0 0 485.075 485.076">
                                    <defs>
                                        <clipPath id="clip-path">
                                            <rect id="Rectangle_760" data-name="Rectangle 760" width="343" height="343" rx="47" transform="translate(717 577.795) rotate(-45)" fill="#008c9e" />
                                        </clipPath>
                                        <radialGradient id="radial-gradient" cx="0.75" cy="0.017" r="1.105" gradientTransform="matrix(-0.18, 0.984, -2.541, -0.466, 0.928, -0.714)" gradientUnits="objectBoundingBox">
                                            <stop offset="0" stop-color="#64b4d2" />
                                            <stop offset="0.328" stop-color="#8167f2" />
                                            <stop offset="0.696" stop-color="#8a51e4" />
                                            <stop offset="1" stop-color="#8d3ddc" />
                                        </radialGradient>
                                    </defs>
                                    <g id="Group_8040" data-name="Group 8040" transform="translate(10807 15148)">
                                        <g id="Group_8036" data-name="Group 8036" transform="translate(395 -384)">
                                            <g id="Group_8031" data-name="Group 8031" transform="translate(-6 2)">
                                                <g id="Group_8030" data-name="Group 8030" transform="translate(-11913 -15062)">
                                                    <g id="Mask_Group_7642" data-name="Mask Group 7642" transform="translate(0 -39.256)" clip-path="url(#clip-path)">
                                                        <g id="Group_7900" data-name="Group 7900" transform="translate(288.6 806.8)" opacity="0">
                                                            <path id="Path_1940" data-name="Path 1940" d="M-22262.424-15210.229s-67.6-320-150.3-320-133.031,72.727-225.453,72.727-130.91,230.3-130.91,230.3l20.689,543.6h458.8Z" transform="translate(23190.4 14994.2)" fill="url(#radial-gradient)" />
                                                        </g>
                                                        <path id="Path_2779" data-name="Path 2779" d="M182,0A182,182,0,1,1,0,182,182,182,0,0,1,182,0Z" transform="translate(853 484.256)" fill="rgba(129,103,242,0.7)" />
                                                        <path id="Path_2780" data-name="Path 2780" d="M185.433,0C287.845,0,370.866,83.021,370.866,185.433S287.845,370.866,185.433,370.866,0,287.845,0,185.433,83.021,0,185.433,0Z" transform="translate(650.134 349.39)" fill="rgba(141,61,220,0.64)" />
                                                        <path id="Path_2778" data-name="Path 2778" d="M182,0A182,182,0,1,1,0,182,182,182,0,0,1,182,0Z" transform="translate(884 229.256)" fill="rgba(100,180,210,0.56)" />
                                                        <g id="Group_7901" data-name="Group 7901" transform="translate(23357 16552.258)">
                                                            <path id="Subtraction_9" data-name="Subtraction 9" d="M21662,15806a137.03,137.03,0,0,1-27.408-2.763,135.252,135.252,0,0,1-48.629-20.463,136.4,136.4,0,0,1-49.273-59.836,135.137,135.137,0,0,1-7.924-25.529,137.295,137.295,0,0,1,0-54.817,135.269,135.269,0,0,1,20.463-48.632,136.4,136.4,0,0,1,59.834-49.274,135.29,135.29,0,0,1,25.529-7.925,137.29,137.29,0,0,1,54.816,0,135.26,135.26,0,0,1,48.631,20.464,136.38,136.38,0,0,1,49.275,59.839,135.2,135.2,0,0,1,7.928,25.528,137.39,137.39,0,0,1,0,54.817,135.334,135.334,0,0,1-20.467,48.631,136.395,136.395,0,0,1-59.838,49.272,135.363,135.363,0,0,1-25.529,7.925A137.03,137.03,0,0,1,21662,15806Zm0-210a74,74,0,1,0,74,74A74.083,74.083,0,0,0,21662,15596Z" transform="translate(-44059 -31644)" fill="#fff" />
                                                            <path id="Path_1943" data-name="Path 1943" d="M-20566-14968.8h59.068s2.264,36.972,27.594,52.419c11.2,6.83,26.787,15.257,41.1,16.072,17.449,1,32.637-6.7,32.637-6.7l-61.008,59.8s-45.273-12.615-70.121-43.018S-20566-14968.8-20566-14968.8Z" transform="translate(-1855.4 -948.203)" fill="#fff" />
                                                        </g>
                                                    </g>
                                                    <g id="Rectangle_777" data-name="Rectangle 777" transform="translate(717 538.537) rotate(-45)" fill="none" stroke="#fff" stroke-width="3">
                                                        <rect width="343" height="343" rx="47" stroke="none" />
                                                        <rect x="1.5" y="1.5" width="340" height="340" rx="45.5" fill="none" />
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </SvgIcon>
                        </IconButton>
                        <Link to='/home' underline='none' component={RouterLink} className={classes.title} variant="h6" noWrap>
                            RIOCITY BOX
          </Link>
                        <div className={classes.grow} />
                        {/* <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="Search…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </div> */}


                        <div className={classes.sectionDesktop}>

                            {/* <IconButton onClick={() => history.push('/courses')} color="inherit">
                                <div className={classes.button}>
                                    <Home />
                                </div>
                            </IconButton> */}

                            <IconButton color="inherit">
                                <div className={classes.button}>

                                    <Badge badgeContent={11} color="secondary">
                                        <NotificationsIcon />
                                    </Badge>
                                </div>
                            </IconButton>

                            <IconButton onClick={() => history.push('/about')} color="inherit">
                                <div className={classes.button}>
                                    <Info />
                                </div>
                            </IconButton>
                            <IconButton onClick={() => history.push('/courses')} color="inherit">
                                <div className={classes.button}>
                                    {/* <OfflineBoltIcon /> */}
                                    <FormatListBulletedIcon />
                                </div>
                            </IconButton>
                            <IconButton onClick={() => history.push('/qbook')} color="inherit">
                                <div className={classes.button}>
                                    {/* <LibraryBooksIcon /> */}
                                    <MenuBook />
                                    {/* <ImportContactsIcon/> */}
                                </div>
                            </IconButton>
                            <IconButton
                                onClick={() => { history.push('/login') }}
                                color="inherit"
                            >
                                <div className={classes.button}>
                                    <AccountCircle />
                                </div>
                            </IconButton>
                        </div>
                        <div className={classes.sectionMobile}>
                            <IconButton
                                aria-label="show more"
                                aria-controls={mobileMenuId}
                                aria-haspopup="true"
                                onClick={handleMobileMenuOpen}
                                color="inherit"
                            >
                                <MoreIcon />
                            </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            {renderMobileMenu}
        </div>
    );
}
