import React from 'react'
import { useSelector } from 'react-redux'
import{Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div><Link to="/post"><button>Post</button></Link>
    <Link to="/album"><button>Album</button></Link>
    <Link to="/photo"><button>Photos</button></Link>
    <Link to="/comment"><button>Comments</button></Link>
    <Link to="/todos"><button>Todos</button></Link>
    <Link to="/users"><button>Users</button></Link>
    </div>
  )
}

export default Navbar