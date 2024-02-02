
import './App.css';
import slider_img from './image/slider1.webp';
import { GiTeacher,GiUpgrade } from "react-icons/gi";
import { HiUserGroup,HiComputerDesktop } from "react-icons/hi2";
import { MdSupportAgent } from "react-icons/md";
import { FaHandsHoldingChild } from "react-icons/fa6";

import { FaLinkedinIn, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaArrowRightLong } from "react-icons/fa6";
import { TfiGoogle } from "react-icons/tfi";
import { FiYoutube } from "react-icons/fi";
import { TfiAngleDown } from "react-icons/tfi";
import { LiaStarSolid } from "react-icons/lia";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import Sdheader from './component/Sdheader';
import Courses from './component/Courses';
import Aboutus from './component/Aboutus';
import Partners from './component/Partners';
import Footer from './component/Footer';
import Why from './component/Why';
import Demanded from './component/Demanded';

var icon_menu=[
  {ico:<FaFacebookF></FaFacebookF>},
  {ico:<FaTwitter></FaTwitter>},
  {ico:<TfiGoogle></TfiGoogle>},
  {ico:<FaLinkedinIn></FaLinkedinIn>},
  {ico:<FaInstagram></FaInstagram>},
  {ico:<FiYoutube></FiYoutube>},
  {ico:<FaWhatsapp></FaWhatsapp>},
]
var sdheader=[
  {hd:'HOME'},
  {hd:'COURSES',hdicon:<TfiAngleDown></TfiAngleDown>},
  {hd:'ACTIVITIES',hdicon:<TfiAngleDown></TfiAngleDown>},
  {hd:'BLOG'},
  {hd:'KNOW US',hdicon:<TfiAngleDown></TfiAngleDown>},
  {hd:'GET IN TOUCH'},
  {hd:'STUDENT ZONE',hdicon:<TfiAngleDown></TfiAngleDown>},
]
var star_icon=[
  {star:<LiaStarSolid></LiaStarSolid>},
  {star:<LiaStarSolid></LiaStarSolid>},
  {star:<LiaStarSolid></LiaStarSolid>},
  {star:<LiaStarSolid></LiaStarSolid>},
  {star:<LiaStarSolid></LiaStarSolid>},
]
var courses1= [
  { img: require('./image/course1.webp'), name: 'Development Courses' },
  { img: require('./image/course2.webp'), name: 'Design Courses' },
  { img: require('./image/course3.webp'), name: 'Programming IT' },
]
var coursrs2=[
  { img: require('./image/course4.webp'), name: 'Trendy Courses' },
  { img: require('./image/course5.jpg'), name: 'Civil-Mech. Engineering' },
  { img: require('./image/course6.webp'), name: 'Business Development' }
]

var read_our= [
  { icon:<GiTeacher class='sv1'></GiTeacher>, 
    name: 'Industry Experts As Trainers',
    pragraph:"Our trainers have 5+ years of industry experience coupled with extensive research and analysis."
  },
  { icon:<HiUserGroup class='sv2'></HiUserGroup>, 
    name: 'Latest Curriculum',
    pragraph:"We Provides latest curriculum for all courses which designed in such a way that Students will get full knowledge within a short time."
  },
  { icon:<HiComputerDesktop class='sv3'></HiComputerDesktop>, 
    name: 'Latest Technology',
    pragraph:"We strive to let you have a solid foundational knowledge of technologies shaping the IT World today."
  },
  { icon:<MdSupportAgent  class='sv4'></MdSupportAgent>, 
  name: 'Industry Experts As Trainers',
  pragraph:"At the end of each training,our training instructor will go through the possible technical questions you may be asked."
},
{ icon:<GiUpgrade class='sv5'></GiUpgrade>, 
  name: 'Latest Curriculum',
  pragraph:"We will be provided free upgradation for any newer version of the course you have."
},
{ icon:<FaHandsHoldingChild class='sv6'></FaHandsHoldingChild>, 
  name: 'Latest Technology',
  pragraph:"We will provide you lifetime support on all the courses you learned from us."
},
]

function App() {
  return (
    <>
      <div>
        <Header data={icon_menu}></Header>
        <Sdheader data={sdheader}></Sdheader>
        <div className='slider'>
          <img src={slider_img}></img>
        </div>
        <Courses data={courses1}></Courses>
        <Aboutus></Aboutus>
        <Partners></Partners>
        <Why data={read_our}></Why>
        <Demanded></Demanded>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
