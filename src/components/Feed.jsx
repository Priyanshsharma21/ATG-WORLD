import React, { useState } from 'react'
import { Container,Row, Col,Image } from 'react-bootstrap'
import {Posts, Groups,Category,Meetup,Jobs,Login} from './index'
import './styles/Feed.css'
import {GoLocation} from 'react-icons/go'
import {FaPen} from 'react-icons/fa'
import {category,feedItems,meetup,job,group_info} from '../constants/constant'
import {AiOutlineUsergroupAdd,AiOutlineExclamationCircle,AiOutlineLike} from 'react-icons/ai'
import {FiLogOut} from 'react-icons/fi'
import {MdGroupAdd} from 'react-icons/md'
import {motion} from 'framer-motion'


const Feed = ({isJoin, setIsJoin}) => {
  const [pen,setPen] = useState(true)
  const [enteredLoc,setEnteredLoc] = useState('')

  const handleJoin = ()=>{
    setIsJoin((prevState)=>!prevState)
  }

  const handlePen = (e)=>{
    e.preventDefault()
    setEnteredLoc(e.target.value)
    if(enteredLoc.length>0){
      setPen(false)
    }else if(enteredLoc.length===0){
      setPen(true)
    }
  }

  return (
    <>
      <Container className="feed">
        <Row className="feed__category">
          <div className="category__row">
            <div className="cato">
              <Category category={category}/>
            </div>
            <div className="feed_btns">
              <a className="btn  post__btn">
              <span className="post__text_feed">Write a Post</span>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item dropdown  ">
                        <a className="nav-link feed_btn_toggler  dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <span className="nav__accounts write_a_post"></span>
                        </a>
                        <ul className="dropdown-menu dropdown__correct dropup">
                            <li><a className="dropdown-item" href="/">Article</a></li>
                            <li><a className="dropdown-item" href="/">Meet-Up</a></li>
                            <li><a className="dropdown-item" href="/">Job</a></li>
                        </ul>
                    </li>
                </ul>
              </a>
              {isJoin ? (
                <a onClick={handleJoin} className="btn btn-primary join_group_btn">
                  <MdGroupAdd className="group__icon me-1"/><span className="join__text">Join Group</span>
                </a>
              ):(
                <a onClick={handleJoin} className="btn btn-secondary leave__text">
                  <FiLogOut className="group__icon me-1"/><span className="">Leave Group</span>
                </a>
              )}
 
            </div>

            </div>
           
      <div className="feed__line"></div>
        </Row>
        <div className="category__mobile  container-fluid">
          <div className="posts__writen">
            <h4 className="post_w">Posts(345)</h4>
          </div>
          <div className="dropdown ">
              <a className="btn dropBox pb-3 btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Filter:All
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Filter</a></li>
                <li><a className="dropdown-item" href="#">More Filter</a></li>
                <li><a className="dropdown-item" href="#">More More Filter</a></li>
              </ul>
            </div>
        </div>

        <Row>
            <Col className="col-lg-7 col-md-12 col-sm-12 content__col">
            {feedItems.map(post=>(
              <Posts post={post}/>
            ))}

            {meetup.map(meetup=>(
              <Meetup meetup={meetup}/>
            ))}

            {job.map(job=>(
              <Jobs job={job}/>
            ))}

            </Col>

            <Col className="col-5 ">
              <div className="main_row">
              <div className="row">
                <div className="col">
                  <div className="ur_location">
                    <form className="d-flex" role="search">
                    <GoLocation className='location_ico'/>
                      <input onChange={(e)=>handlePen(e)} className="form-control me-2 location__input" type="search" placeholder="Enter Your Location" aria-label="Search" />
                      {pen && <FaPen className='pen'/>}
                    </form>
                  </div>

                  <div className="information">
                    <AiOutlineExclamationCircle className='me-2'/>
                    <span className="info_text">Your location will help us serve better <br /> and extend a personalised experience.</span>
                  </div>
                </div>
              </div>

              <div className="row">
                {!isJoin && (
                  <motion.div
                  whileInView={{ opacity: [0.5, 1] }}
                  transition={{ duration: 2, type: 'tween' }}
                  >
                    <div className="col group_col">
                    <h4 className="reco"><AiOutlineLike className="me-1" />RECOMMENDED GROUPS</h4>
                    <div className="grp mt-4">
                    {group_info.map(group=>(
                        <Groups group={group}/>
                      ))}
                    </div>
                  </div>
                  </motion.div>
                )}
              </div>
              </div>
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default Feed

