import React from 'react'
import './styles/Posts.css'
import {motion} from 'framer-motion'
import {AiOutlineEye} from 'react-icons/ai'
import {BsFillShareFill} from 'react-icons/bs'
import {BsThreeDots,BsWhatsapp,BsFacebook} from 'react-icons/bs'
import {AiOutlineInstagram}from 'react-icons/ai'

const Posts = ({post}) => {
  return (
    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 1, type: 'tween' }}
    >
    {/* card for posts  */}
      <div className="card card_dim mb-3">
        <img src={post.imageUrl} className="card-img-top card__image__main" alt="..." />
        <div className="card-body">
        <p className="card-text card_cato">{post.category}</p>

        <div className="title__box">
          <h5 className="card-title card_title">{post.title}</h5>
          <div class="btn-group">
                  <button type="" class="btn dropdown-toggle toggle_btn_post" data-bs-toggle="dropdown" aria-expanded="false" >
                      <BsThreeDots />
                  </button>
                  <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#">Edit</a></li>
                      <li><a class="dropdown-item" href="#">Report</a></li>
                      <li><a class="dropdown-item" href="#">Option 3</a></li>
                  </ul>
              </div>
        </div>

        <p className="card-text card_desc">{post.desc}</p>

        <div className="postedBy">
          <div className="post__profile">
            <img src={post.postedByImg} className="post__image" alt="userImage" />
            <span className="card_postedBy">{post.postedByName}</span>
          </div>

          <div className="views">
            <p className="card_views  pt-2"><AiOutlineEye className="me-1 eye_of_tiger"/>{post.views}</p>
            <div class="btn-group">
                <button type="button" class="btn btn__share ms-3 dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" >
                    <BsFillShareFill />
                </button>
                <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#"><BsWhatsapp className='me-3'/>Whatsapp</a></li>
                    <li><a class="dropdown-item" href="#"><BsFacebook className='me-3'/>Facebook</a></li>
                    <li><a class="dropdown-item" href="#"><AiOutlineInstagram className='me-3'/>Instagram</a></li>
                </ul>
            </div>
          </div>
        </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Posts