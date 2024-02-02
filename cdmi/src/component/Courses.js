import { LiaStarSolid } from "react-icons/lia";
import { LiaStarHalfAltSolid } from "react-icons/lia";
import { FaArrowRightLong } from "react-icons/fa6";
function Courses(props) {
  return (
    <>

      <div className='container'>
        <div className='space'>
          <div className='heading'>
            <div className='shape1'></div>
            <div>CREATIVE COURSES</div>
          </div>
          <div className='course'>OFFERED COURSES</div>
          <div className='course_info'>
            {
              props.data.map((ele, ind) => {
                return (
                  <div className='item' key={ind}>
                    <div className='course_img'>
                      <img src={ele.img}></img>
                    </div>
                    <div className='info_font'>{ele.name}</div>
                    <div className='info2'>
                      <div className='star'>
                       <a><LiaStarSolid></LiaStarSolid></a>
                       <a><LiaStarSolid></LiaStarSolid></a>
                       <a><LiaStarSolid></LiaStarSolid></a>
                       <a><LiaStarSolid></LiaStarSolid></a>
                        <a><LiaStarHalfAltSolid></LiaStarHalfAltSolid></a>
                      </div>
                      <div className='btn1'><a>Know More..!</a></div>
                    </div>
                  </div>
                )
              })
            }
          </div>
          <div className='course_info'>
          {
              props.data.map((ele, ind) => {
                return (
                  <div className='item' key={ind}>
                    <div className='course_img'>
                      <img src={ele.img}></img>
                    </div>
                    <div className='info_font'>{ele.name}</div>
                    <div className='info2'>
                      <div className='star'>
                      <a><LiaStarSolid></LiaStarSolid></a>
                       <a><LiaStarSolid></LiaStarSolid></a>
                       <a><LiaStarSolid></LiaStarSolid></a>
                       <a><LiaStarSolid></LiaStarSolid></a>
                        <a><LiaStarHalfAltSolid></LiaStarHalfAltSolid></a>
                      </div>
                      <div className='btn1'><a>Know More..!</a></div>
                    </div>
                  </div>
                )
              })
            }
          </div>
          <div className='view'>
            <div>View All Course<a><FaArrowRightLong></FaArrowRightLong></a></div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Courses;