import React from 'react'
import './Contact.css'
import {MdCall} from 'react-icons/md';
import {BsFillChatDotsFill} from 'react-icons/bs';
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'
const Contact = () => {
  return (
    <div>
      <section id="contact-section" className='c-wrapper'>
           <div className='paddings innerWidth flexCenter c-container'>
            {/*left side*/}
            <div className='flexColStart c-left'>
            <span className='orangeText'>Our Contacts</span>
            <span className='primaryText'>Easy to Contact Us</span>
            <span className='secondaryText'>We always ready to help by providing the services. We believe a good place to live that can make your life better</span>
                <div className='flexColStart contactModes'>
                     {/*first row */}
                    <div className='flexStart row'>
                        <div className='flexColCenter mode'>
                            <div className='flexColStart'>
                                <div className='flexCenter icon'>
                                    <MdCall size={25} />
                                </div>
                                <div className='flexColStart detail'>
                                    <span className='primaryText'>Call Us</span>
                                    <span className='secondaryText'>021 123 145 14</span>
                                </div>
                            </div>

                            <div className='flexCenter button'>
                                Call Now
                            </div>
                        </div>
                        {/*second mode */}
                        <div className='flexColCenter mode'>
                            <div className='flexColStart'>
                                <div className='flexCenter icon'>
                                    <BsFillChatDotsFill size={25} />
                                </div>
                                <div className='flexColStart detail'>
                                    <span className='primaryText'>Chat</span>
                                    <span className='secondaryText'>021 123 145 14</span>
                                </div>
                            </div>

                            <div className='flexCenter button'>
                                Chat Now
                            </div>
                        </div>
                    </div>

                    {/*second row*/}

                    <div className='flexStart row'>
                       {/*third mode */}
                        <div className='flexColCenter mode'>
                            <div className='flexColStart'>
                                <div className='flexCenter icon'>
                                    <MdCall size={25} />
                                </div>
                                <div className='flexColStart detail'>
                                    <span className='primaryText'>Video Call</span>
                                    <span className='secondaryText'>021 123 145 14</span>
                                </div>
                            </div>

                            <div className='flexCenter button'>
                              Video Call Now
                            </div>
                        </div>
                        {/*fourth mode */}
                        <div className='flexColCenter mode'>
                            <div className='flexColStart'>
                                <div className='flexCenter icon'>
                                    <HiChatBubbleBottomCenter size={25} />
                                </div>
                                <div className='flexColStart detail'>
                                    <span className='primaryText'>Message</span>
                                    <span className='secondaryText'>021 123 145 14</span>
                                </div>
                            </div>

                            <div className='flexCenter button'>
                                Messsage Now
                            </div>
                        </div>
                    </div>
                </div>
               
               

            </div>
            {/*right side*/}
          <div className='c-right'>
            <div className='image-container'>
                <img src='./ri2.png'  />
            </div>
          </div>
           </div>
      </section>
    </div>
  )
}

export default Contact
