import React from 'react'
import {Link} from 'react-router-dom'
import {AppBar, Button, IconButton, Toolbar, Typography} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';

export const Navbar = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon/>
                    </IconButton>
                    <Link to="/" style={{textDecoration: 'none', color: '#FFF'}}>
                        <Typography variant="h6">
                            Home
                        </Typography>
                    </Link>

                    <Link to="/About" style={{textDecoration: 'none', color: '#FFF'}}>
                        <Button color="inherit">About</Button>
                    </Link>
                    <Button color="inherit" onClick={() => {
                        console.log('click')
                    }}>Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar;