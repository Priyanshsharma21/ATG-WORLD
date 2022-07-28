import React from 'react'
import './styles/Meetup.css'
import {GoLocation} from 'react-icons/go'
import {RiCalendarEventFill} from 'react-icons/ri'
import {AiFillInstagram, AiOutlineEye} from 'react-icons/ai'
import {BsFillShareFill, BsThreeDots,BsWhatsapp,BsFacebook} from 'react-icons/bs'
import {AiOutlineInstagram}from 'react-icons/ai'
import {motion} from 'framer-motion'

const Meetup = ({meetup}) => {
  return (
    <motion.div
    whileInView={{ opacity: [0, 1] }}
    transition={{ duration: 1, type: 'tween' }}
    >
    {/* card for feeds */}
    <div className="card mb-3">
        <img src={meetup.imageUrl} className="card-img-top card__image__main" alt="..." />
        <div className="card-body">
        <p className="card-text card_cato">{meetup?.category}</p>
        <div className="title__cont">
            <h5 className="card-title card_title">{meetup?.title}</h5>
            <div class="btn-group">
                <button type="button" class="btn btn-secondary btn__toggle__meetup dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" >
                    <BsThreeDots />
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Edit</a></li>
                    <li><a class="dropdown-item" href="#">Report</a></li>
                    <li><a class="dropdown-item" href="#">Option 3</a></li>
                </ul>
            </div>
        </div>
        <div className="date_loc_cont mt-2">
            <p className="card-text card_desc company_name"><RiCalendarEventFill className="me-1"/>{meetup?.date}</p>
            <p className='loc__me'><GoLocation className='me-1 geoLoc'/>{meetup.location}</p>
        </div>  
        <div className="btn_website">
            <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            >
              <a href="/" className="visit_web">Visit Website</a>
            </motion.div>
        </div>      

        <div className="postedBy">
          <div className="post__profile">
            <img src={meetup?.postedByImg} className="post__image" alt="userImage" />
            <span className="card_postedBy">{meetup?.postedByName}</span>
          </div>

          <div className="views">
            <p className="card_views pt-2"><AiOutlineEye className="me-1 eye_of_tiger"/>{meetup.views}</p>
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

export default Meetup