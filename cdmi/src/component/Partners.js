function Partners(){
    return(
        <>
            <div className='container'>
          <div className='space std'>
            <div className='offer_part'>
              <div className='heading1'>
                <div className='shape1'></div>
                <div>STUDENT PLACEMENT</div>
              </div>
              <p className='course'>OUR RECRUITMENT PARTNERS</p>
            </div>
            <div className='company'>
              <div className='inner_com'>
                <div className='one_c'>
                  <a href='https://www.resolutesolutions.in/'> <img src={require('../image/comp1.png')}></img></a>
                </div>
                <div className='one_c'>
                  <a href='https://www.cdmi.in/'><img src={require('../image/comp2.png')}></img></a>
                </div>
                <div className='one_c'>
                  <a href='https://www.squareinfosoft.com/'><img src={require('../image/comp3.png')}></img></a>
                </div>
                <div className='one_c'>
                  <a href='https://trigontic.com/'><img src={require('../image/comp4.png')}></img></a>
                </div>
                <div className='one_c'>
                  <a href='https://viraniinfotech.com/'><img src={require('../image/comp5.png')}></img></a>
                </div>
                <div className='one_c'>
                  <a href='https://www.webmigrates.com/'><img src={require('../image/comp6.png')}></img></a>
                </div>
              </div>
            </div>
          </div>

        </div>
        </>
    );
}
export default Partners;