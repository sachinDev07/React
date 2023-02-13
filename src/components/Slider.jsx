import { IMG_SLIDER_URL } from "../config";
import { Link } from "react-router-dom";
import useAllRestaurents from "../hooks/useAllRestaurents";

const Slider = ({ slider }) => {

    return(
        <div className="mt-24 px-44 py-8 bg-black">
           
                <div className="flex justify-between items-center">
                {slider.slice(0,4).map((item, index) => (
									<div className="px-1 py-3" key={item.data.bannerId}>
										<div key={item.data.bannerId} className="w-64 transition-all duration-300 ease-in-out hover:scale-105">
											<Link to="/" className="d-block text-center shadow-sm">
												<img
													alt="#"
													src={IMG_SLIDER_URL + item.data.creativeId}
													className="w-full rounded"
												/>
											</Link>
										</div>
									</div>
								))}
                </div>
            </div>
    );
};

export default Slider;