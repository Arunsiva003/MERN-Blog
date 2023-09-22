import React, { useContext, useState } from "react"
import { IoSettingsOutline } from "react-icons/io5"
import { BsBagCheck } from "react-icons/bs"
import { AiOutlineHeart } from "react-icons/ai"
import { GrHelp } from "react-icons/gr"
import { BiLogOut } from "react-icons/bi"
import { RiImageAddLine } from "react-icons/ri"
import { Context } from "../../context/Context"
import { Link } from "react-router-dom"
import Img from "../../assets/images/user.jpg";

export const User = () => {
  const { user, dispatch } = useContext(Context)

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" })
  }
  const [profileOpen, setProfileOpen] = useState(false)
  const close = () => {
    setProfileOpen(false)
  }

  const PublicFlo = "https://as-mer-blog.onrender.com/images/"

  return (
    <>
      <div className='profile'>
        {user ? (
          <>
            <button className='img' onClick={() => setProfileOpen(!profileOpen)}>
              <img src={user.profilePic ? PublicFlo + user.profilePic : Img} alt='' />
            </button>
            {profileOpen && (
              <div className='openProfile boxItems' onClick={close}>
                <Link to={"/account"}>
                  <div className='image'>
                    <div className='img'>
                      <img src={user.profilePic ? PublicFlo + user.profilePic : Img} alt='' />
                    </div>
                    <div className='text'>
                      <h4>{user.username}</h4>
                      <label>Blogger</label>
                    </div>
                  </div>
                </Link>
                <Link to='/create'>
                  <button className='box'>
                    <RiImageAddLine className='icon' />
                    <h4>Create Post</h4>
                  </button>
                </Link>
                <Link to='/account'>
                <button className='box'>
                  <IoSettingsOutline className='icon' />
                  <h4>My Account</h4>
                </button>
                </Link>
                <Link to='/about'>
                  <button className='box'>
                  <AiOutlineHeart className='icon' />
                    <h4>About</h4>
                  </button>
                </Link>
                <Link to="/help">
                <button className='box'>
                  <GrHelp className='icon' />
                  <h4>Help</h4>
                </button>
                </Link>
                <button className='box' onClick={handleLogout}>
                  <BiLogOut className='icon' />
                  {user && <h4>Log Out</h4>}
                </button>
              </div>
            )}
          </>
        ) : (
          <Link to='/login'>
            <button>My Account</button>
          </Link>
        )}
      </div>
    </>
  )
}
