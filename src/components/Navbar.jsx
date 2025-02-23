import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
     <AppBar>
          <Toolbar>
     <Typography variant="h2" color="white">Blog Dashboard</Typography>
     <Button color="primary">
      <Link to ="/" >HOME</Link>
      <br/>
      </Button>
      <Button>
      <Link to ="/add-blog" >BLOG</Link>
      </Button>
      </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
