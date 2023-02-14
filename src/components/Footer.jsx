import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {

    const { user } = useContext(UserContext);

    return (
        <div data-testid='footer' className="bg-[#16161a] py-2 px-11 mt-12 flex flex-col gap-y-3 justify-center items-center ">
            <h3  className="text-[#fffffe] mt-4">Made with <span data-testid="course-name" className="text-base text-red-600 font-extrabold">{("<")} {user.course} {("/>")}</span> by Sachin Kumar</h3>
            <h5 className="text-[#fffffe] mb-4">&copy; 2023 <span className="text-red-600 font-bold"><Link to="/">foodCaffe</Link></span>. All rights reserved.</h5>
        </div>
    )
};

export default Footer;