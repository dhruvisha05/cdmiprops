import { FaFacebookF, FaTwitter, FaArrowRightLong } from "react-icons/fa6";
import { FaCertificate, FaLinkedinIn, FaInstagram, FaWhatsapp, FaQuoteRight, FaArrowLeft, FaArrowRight, FaHandPointRight, FaUniversity } from "react-icons/fa";
import { TfiGoogle } from "react-icons/tfi";
import { FiYoutube } from "react-icons/fi";

function Footer(){
    return(
        <>
        <footer className='footer_bg'>
          <div className='container'>
            <div className='top_footer'>
              <div className='container '>
                <div className='footer_logo'>
                  <div className='logo_img' >
                    <img src={require("../image/logo2.svg")}></img>
                  </div>
                </div>
                <p className='text_1'>
                  Creative Design and Multimedia Institute is leading computer training institute in surat. We offers government approved computer training courses in Surat.
                </p>
                <h2 className='text_2'>Follow Us On</h2>
                <div className='icon_5'>
                  <a><FaFacebookF></FaFacebookF></a>
                  <a><FaTwitter></FaTwitter></a>
                  <a><TfiGoogle></TfiGoogle></a>
                  <a><FaLinkedinIn></FaLinkedinIn></a>
                  <a><FaInstagram></FaInstagram></a>
                  <a><FiYoutube></FiYoutube></a>
                  <a><FaWhatsapp></FaWhatsapp></a>
                </div>
              </div>
              <div className="part_2">
                <h2 className='link'>Feature Links </h2>
                <ul className='menu1'>
                  <li><FaHandPointRight className='icon_6'></FaHandPointRight>about Us</li>
                  <li><FaHandPointRight className='icon_6'></FaHandPointRight>Blogs</li>
                  <li><FaHandPointRight className='icon_6'></FaHandPointRight>Join Us</li>
                  <li><FaHandPointRight className='icon_6'></FaHandPointRight>Company Login</li>
                  <li><FaHandPointRight className='icon_6'></FaHandPointRight>ertificate Verification</li>

                </ul>
              </div>
              <div className='part_3'>
                <h4 className='us'>Contact Us</h4>
                <h3>HEAD OFFICE - YOGICHOWK</h3>
                <p>401-404, 4th Floor, City Center Complex, Nr. Yogichowk, Varachha, Surat.</p>
                <h5>Mo :<span>+91 90333 16003</span></h5>
                <h3>Other Branches</h3>
                <ul className='icon_7'>
                  <li><FaUniversity className='footer-icon'></FaUniversity>Katargam</li>
                  <li><FaUniversity className='footer-icon'></FaUniversity>Mota Varachha</li>
                  <li><FaUniversity className='footer-icon'></FaUniversity>Adajan</li>
                  <li><FaUniversity className='footer-icon'></FaUniversity>Navsari</li>
                </ul>

              </div>
            </div>
          </div>
        </footer>

        {/* end footer  */}
        {/* footer */}
        <div className='copyright'>
          <div className='container'>
            <div className='container'>
              <h3>© 2023 All Rights Reserved by Creative Design & Multimedia Institute.</h3>
            </div>
          </div>
        </div>
        {/* end footer */}
        {/* =======================footer end============ */}
        </>
    );
}
export default Footer;