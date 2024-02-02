import { FaPlay } from "react-icons/fa";
function Aboutus(props){
    return(
        <>
            <div className='main_two'>
          <div className='text'>
            <div className='two_p1'>
              <div className='shape1'></div>
              <div className='text_cdmi'>ABOUT US</div>
            </div>
            <p className='career'>IT CAREER IN SURAT, MOVING TOWARDS THE BETTER TOMORROW!</p>
            <p className='prag'>
              Creative Design & Multimedia Institute(CDMI) is a reputed training institute in Surat for web design, Game design,Mobile App Development, Game Development ,Video Editing & All types of IT Courses with 9 years of full-fledged, result-oriented training experience. We stepped in the market in 2014 with the goal to help students, working professionals and other interested candidates get that dream job or open that desired freelance business in some of the most popular Computer / IT fields. Our aim is to ease the hiring process for businesses and organizations by providing work-ready professionals who can contribute greatly to their success. Since then, we have worked hard to achieve this goal and dedicated our time and resources to train students extensively.
            </p>
            <div className='btn_part1'>
              <a className='btn2'>Enroll Now... !</a>
            </div>
          </div>
          <div className='photo'>
            <div className='img_sir'>
              <img src={require('../image/part2_img.webp')}></img>
            </div>
            <p className='play'>
              <a href='https://youtu.be/ZZpoqf-mwEM?si=mxur6i92DSBGZUoo'><FaPlay></FaPlay><i className='p_icon'></i></a>
            </p>
          </div>
        </div>
        </>
    );
}
export default Aboutus;