import React from 'react'
import './footer.scss'
import { AiFillInstagram, AiOutlineTwitter, AiFillLinkedin, AiFillFacebook } from "react-icons/ai";


const Footer = () => {
  return (
    <footer>
    <div class="container_1">
          <div class="row">
              <span >Email us:</span>
              <p class="">info@joinuplyft.com</p>
          </div>
          <div class="contact">
                <span>Contact Us:</span><br />
                <span>+91 8828047571</span>

              <ul className='Footer-List'>
                <li><a href="https://www.instagram.com/theclimatebook/" target="_blank"><AiFillInstagram className='Footer-Icons' /></a></li>
                <li><a href="#!"><AiOutlineTwitter className='Footer-Icons'/></a></li>
                <li><a href="https://www.linkedin.com/company/the-climate-book" target="_blank"><AiFillLinkedin className='Footer-Icons'/></a></li>
                <li><a href="#!"><AiFillFacebook className='Footer-Icons'/></a></li>
              </ul>
            </div>
        </div>

        <div class="footer-copyright">
          <div class="copy-right">
            <span>  Copyright © 2023 <br />All right reserved by Uplyft</span>
          </div>
        </div>
    </footer>
  )
}

export default Footer