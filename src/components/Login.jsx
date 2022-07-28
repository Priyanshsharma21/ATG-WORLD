import React, { useState } from 'react'
import './styles/Login.css'
import {BsFacebook} from 'react-icons/bs'
import {FcGoogle} from 'react-icons/fc'
import Art from '../assets/art.png'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Login = (props) => {
    const [signUpScreen, setSignUpScreen] = useState(true)

    const handleSignIn = (e)=>{
        e.preventDefault()
        setSignUpScreen(prev=>!prev)
    }

  return (
        <>
        <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className='model_baba'
    >
      
        <div className="row-md-2 message__box ">
            <p className="text__msg">
                Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼
            </p>
        </div>
        {signUpScreen ?(
            <div className="row row__height">
            <div className="col signIn_col">
                <div className="heading">
                    <h3>Create Account</h3>
                </div>

                <div className="form_signIn mt-4">
                    <div className="name">
                        <input className='fname' type="text" placeholder="First Name" />
                        <input className='lname' type="text" placeholder="Last Name" />
                    </div>
                    <div className="credintials">
                        <input className='email' type="email" placeholder="Email" />
                        <input className='pass' type="password" placeholder="Password"/>
                        <input className='pass2' type="password" placeholder="Confirm Password"/>
                    </div>

                    <div className="submit_btn">
                        <button type="button" className="btn btn-primary btn__account">
                            Create Account
                        </button>
                    </div>
                    <div className="fb_gg">
                        <button type="button" className="btn btn__log">
                            <BsFacebook className='me-1'/>Sign up with Facebook
                        </button>
                        <button type="button" className="btn btn__log">
                            <FcGoogle className='me-1'/>Sign up with Google
                        </button>
                    </div>
                </div>
            </div>
            
            <div className="col visual_col">
                <div className="already">
                    <a href="/" className="login_btn_go" onClick={handleSignIn}>
                        Already have an account?<span className="ss"> Sign In</span>
                    </a>
                </div>
                <div className="visual">
                    <img src={Art} alt="pic" className="img__illist" />
                </div>

                <div className="tnt">
                    <p className="tnt_text">By signing up, you agree to our Terms & conditions, Privacy policy</p>
                </div>
            </div>
            <Modal.Footer className="mt-5 foot_er footer foot_1">
                <Button onClick={props.onHide} className='me-3'>Close</Button>
             </Modal.Footer>
            
        </div>
        ):(
            <div className="row row__height">
            <div className="col signIn_col">
                <div className="heading">
                    <h3>Sign In</h3>
                </div>

                <div className="form_logIn mt-4">
                    <div className="credintials">
                        <input className='email' type="email" placeholder="Email" />
                        <input className='pass' type="password" placeholder="Password"/>
                    </div>

                    <div className="submit_btn">
                        <button type="button" className="btn btn-primary btn__account">
                            Sign In
                        </button>
                    </div>
                    <div className="fb_gg">
                        <button type="button" className="btn btn__log">
                            <BsFacebook className='me-1'/>Sign up with Facebook
                        </button>
                        <button type="button" className="btn btn__log">
                            <FcGoogle className='me-1'/>Sign up with Google
                        </button>
                        <a href="#" className="btn btn__log forgot">
                            Forget Password?
                        </a>
                    </div>
                </div>
            </div>
            
            <div className="col visual_col">
                <div className="already">
                    <a href="/" className="login_btn_go" onClick={handleSignIn}>
                    Don’t have an account yet? <span className="ss"> Create new for free!</span>
                    </a>
                </div>
                <div className="visual">
                    <img src={Art} alt="pic" className="img__illist" />
                </div>
            </div>
            <Modal.Footer className="mt-5 foot_er footer">
                <Button onClick={props.onHide} className='me-3'>Close</Button>
             </Modal.Footer>
        </div>
      
        )}
       
        </Modal>
        </>
  )
}

export default Login