import React from 'react'
import './styles/Jobs.css'
import { Container,Row, Col,Image } from 'react-bootstrap'
import {GoLocation} from 'react-icons/go'
import {RiCalendarEventFill} from 'react-icons/ri'
import {AiFillInstagram, AiOutlineEye} from 'react-icons/ai'
import {BsFillShareFill, BsThreeDots,BsWhatsapp,BsFacebook} from 'react-icons/bs'
import {AiOutlineInstagram}from 'react-icons/ai'
import {BiShoppingBag}from 'react-icons/bi'
import {motion} from 'framer-motion'


const Jobs = ({job}) => {
  return (
    <motion.div
    whileInView={{ opacity: [0, 1] }}
    transition={{ duration: 1, type: 'tween' }}
    >
    {/* card for feeds */}
    <div className="card mb-3">
        <div className="card-body">
        <p className="card-text card_cato">{job?.category}</p>
        <div className="title__box">
          <h5 className="card-title card_title">{job.title}</h5>
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
        <div className="date_loc_cont mt-2">
            <p className="card-text card_desc company_name"><RiCalendarEventFill className="me-1"/>{job?.company}</p>
            <p className='loc__me'><GoLocation className='me-1 geoLoc'/>{job.location}</p>
        </div>  
        <div className="btn_website">
            <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            >
                <a href="/" className="visit_web" style={{color: '#02B875'}}>Apply on TimesJob</a>
            </motion.div>
        </div>      

        <div className="postedBy">
          <div className="post__profile">
            <img src={job?.postedByImg} className="post__image" alt="userImage" />
            <span className="card_postedBy">{job?.postedByName}</span>
          </div>

          <div className="views">
            <p className="card_views pt-2"><AiOutlineEye className="me-1 pb-1 eye_of_tiger"/>{job.views}</p>
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

export default Jobs