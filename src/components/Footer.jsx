import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {

    const { user } = useContext(UserContext);

    return (
        <div className="bg-green-300 py-2 px-11 mt-12 flex flex-col gap-y-3 justify-center items-center ">
            <h3 className="text-blue-900 mt-4">Made with <span className="text-base text-red-600 font-extrabold">{("<")} {user.course} {("/>")}</span> by Sachin Kumar</h3>
            <h5 className="text-blue-900 mb-4">&copy; 2023 <span className="text-black"><Link to="/">foodCaffe</Link></span>. All rights reserved.</h5>
        </div>
    )
};

export default Footer;