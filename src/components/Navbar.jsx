import React, { useState } from 'react'
import './styles/Navbar.css'
import { BiSearch } from 'react-icons/bi';
import { AiOutlineArrowLeft } from 'react-icons/ai'
import profilePic from '../assets/profile.jpg'
import { motion } from 'framer-motion';


const Navbar = ({join,setJoin}) => {
    const [login, setLogin] = useState(false);

    const handleClick = ()=>{
        setLogin(prevState=>!prevState)
    }

    const handleJoin = ()=>{
        setJoin(prevState=>!prevState)
    }

  return (
    <div>
    <nav className="navbar navbar-expand-lg bg-light navbar__main">

    
        {/* logo  */}
      <div className="container-fluid d-flex justify-content-between ">
            <div className="nav__logo sm:visually-hidden">
                <a className="navbar-brand" href="/">
                    <span className="nav_A">A</span>
                    <span className="nav_T">T</span>
                    <span className="nav_G">G.</span>
                    <span className="nav_W">W</span>
                    <span className="nav_O">O</span>
                    <span className="nav_R">R</span>
                    <span className="nav_L">L</span>
                    <span className="nav_D">D</span>
                </a>
            </div>
           

            {/* search  */}
            <div className="nav__SearchBox hidden md:block ">
                <div className="card-body row no-gutters align-items-center rounded-pill ">
                    <div class="col input__box">
                        <div className="icon">
                         <BiSearch />
                        </div>
                        <input class="form-control input__search form-control-lg  border-white form-control-borderless" type="search" placeholder="Search for your favorite groups in ATG" />
                    </div>
                </div>
            </div>

            {/* login */}
           <motion.div
            whileHover={{ scale: 1 }}
            whileTap={{ scale: 0.9 }}
           >
           <div className="nav__login_div navbar-nav">
            {!login ? (
                <ul className="navbar-nav me-auto mb-2 mb-lg-0" onClick={handleClick}>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <span className="nav__account">Create a account</span> <span className="nav__free">It's free!</span>
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="/">Login with Facebook</a></li>
                            <li><a className="dropdown-item" href="/">Login with Google</a></li>
                            <li><a className="dropdown-item" href="/">Login with Github</a></li>
                        </ul>
                    </li>
                </ul>
            ) : (
                <div>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0" onClick={handleClick}>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src={profilePic} className="nav__profile_img" alt="profileImage" />
                            <span className="nav__profile_name">Priyansh Sharma</span>
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="/">Login with Facebook</a></li>
                            <li><a className="dropdown-item" href="/">Login with Google</a></li>
                            <li><a className="dropdown-item" href="/">Login with Github</a></li>
                        </ul>
                    </li>
                </ul>
                </div>
            )}
           </div>
           </motion.div>

            {/* hamburger  */}
            <div className="mobile__box navbar-toggler container-fluid">
                <div className="togglers ">
                <span className="navbar-toggler" type="text" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <div className="btn__join_now">
                        <a href="/" className='arrow'><AiOutlineArrowLeft /></a>
                    </div>
                </span>

                {join ? (
                   <span onClick={handleJoin} className="navbar-toggler" type="text" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <div className="btn__join_now">
                            <a href="/" className='join'>Leave Group</a>
                        </div>
                    </span>
                ):(
                    <span onClick={handleJoin} className="navbar-toggler" type="text" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <div className="btn__join_now">
                            <a href="/" className='join'>Join Group</a>
                        </div>
                    </span>
                )}

                
                </div>
            </div>
        
        </div>
    </nav>
    </div>
  )
}

export default Navbar