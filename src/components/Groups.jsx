import React, { useState } from 'react'
import './styles/Group.css'
import {motion} from 'framer-motion'
import {RiUserFollowFill,RiUserUnfollowFill} from 'react-icons/ri'

const Groups = ({group}) => {
  const [isFollow, setIsFollow] = useState(false)
  const handleFollow = ()=>{
    setIsFollow(prevState=>!prevState)
  }
  return (
    <div className="card mb-4" style={{maxWidth: '340px', border:'none'}}>
      <div className="row">
        <div className="col-md-4 image_column">
          <img src={group.imageUrl} alt="group_image" className="group_image" />
        </div>
        <div className="col-md-4 title_name">
          <h5 className="card-title ">{group.name}</h5>
        </div>
        <div className="col-md-4">
          <motion.div className="card-body follow"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleFollow}
          >
          {isFollow ? (
            <a type='text' classnames="follow_btn"><RiUserFollowFill className='me-2 text-primary'/></a>
          ):(
            <a type='text' classnames="follow_btn"><RiUserUnfollowFill className='me-2 text-danger'/></a>
          )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Groups

