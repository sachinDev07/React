import { Component } from "react";
import food from "../assests/images/food.png";

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
   
    return (
      
      <div>
        <div className="mt-24 h-[90vh] bg-about_hero bg-no-repeat bg-cover bg-center  flex flex-col justify-center items-center  ">
          <span className="absolute z-10 w-full min-h-[90vh] bg-black opacity-50"></span>
          <h1 className="text-white z-30 text-8xl font-bold">foodCaffe'</h1>
          <p className="text-slate-300 z-30 text-lg font-normal tracking-wider">To eat is a necessity, but to eat intelligently is an art.</p>
         </div>
         <div className="py-2 px-44 flex justify-between items-center ">  
            <h2 className="text-8xl text-[#232946] font-medium leading-[6rem]">Enjoy food all over the world</h2>
            <img src={food} className="w-1/2 h-96" alt="burger-image" />
         </div>
      </div>

    );
  }
}

export default About;
