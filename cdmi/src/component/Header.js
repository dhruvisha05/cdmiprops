import { FaCertificate } from "react-icons/fa";
import { CgMail } from "react-icons/cg";




function Header(props) {
    return (
        <>
            <div className="tophd">
                <div l></div>
                <div className="container tophd1">
                    <div className="first">
                        <div className="icon"><a><CgMail></CgMail></a></div>
                        <div><a>info@cdmi.in</a></div>
                        <div className="icon"><a><FaCertificate></FaCertificate></a></div>
                        <div><a>Verify Certificate</a></div>
                    </div>
                    <div className="second">
                        <a>HAVE ANY QUESTION ? +91 90333 16003</a>
                    </div>
                    <div className="third">
                        <ul className="d-flex">
                            {
                                props.data.map((ele) => {
                                    return (
                                        <li>{ele.ico}</li>
                                    )
                                })
                            }

                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Header;