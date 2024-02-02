import logoimg from '../image/logo.svg';

function Sdheader(props) {
    return (
        <>
            <div className='container logohd'>
                <div>
                    <img src={logoimg} className="logo" alt=''></img>
                </div>
                <div>
                    <ul className='menu'>
                        {
                            props.data.map((ele) => {
                                return (
                                    <li>{ele.hd}<span>{ele.hdicon}</span></li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>

        </>
    );
}
export default Sdheader;