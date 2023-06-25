import React from 'react'
import { useRef } from 'react'
import './contacts.css'
import {MdEmail} from "react-icons/md"
import {FaFacebookMessenger} from "react-icons/fa"
import {BsWhatsapp} from "react-icons/bs"
import emailjs from 'emailjs-com'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Contacts = () => {

  const form = useRef();

  const clear = (e) => {
    e.target.reset()
    toast.success('Cleared!', {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
  }

  const sendEmail = (e) => { 
    e.preventDefault();

    emailjs.sendForm('service_wf08v7w', 'template_k3pmmlr', form.current, 'a9PFCp7L2fo59ZMpj')
    .then((result) => {
      e.target.reset()
      toast.success('Your message was send successfully!', {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
      }, (error) => {
        toast.error('Sorry, the message was not send!', {
          position: "bottom-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
      });
  };

  return (
    <section id='contact'>
      <h5>If you want to</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>stefanovtih02@gmail.com</h5>
            <a href='mailto:stefanovtih02@gmail.com' target={"_blank"}>Send me an email</a>
          </article>

          <article className='contact__option'>
            <FaFacebookMessenger className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Tihomir Stefanov</h5>
            <a href='https://m.me/tihomir.stefanov.543' target={"_blank"}>Chat </a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whats App</h4>
            <h5>+447756701888</h5>
            <a href='https://api.whatsapp.com/send?phone+4456701888' target={"_blank"}>Chat</a>
          </article>
  
        </div>
        <form ref={form} onSubmit={sendEmail} onReset={clear}>
            <input type="text" name="name" placeholder='Your Full Name' required />
            <input type="email" name="email" placeholder='Your Email' required/>
            <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
            <button type="submit" className='btn btn-primary'>Send Message</button>
            <button type='reset' className='btn btn-primary'>Clear</button>
        </form>
      </div>
      <ToastContainer className="toast__container"/>
    </section>
    
  )
}

export default Contacts