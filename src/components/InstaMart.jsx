import { useState } from "react";

const Section = ({title, description, isVisible, setIsVisible}) => {

    return (
        <div className="border border-white p-2 m-2">
            <h3 className="font-bold text-xl">{title}</h3>
            {
                isVisible ? 
                            (
                             <div>
                                <button className="underline text-white" onClick={() => setIsVisible(false)}>Hide</button>
                                <p className="text-[#b8c1ec]">{description}</p>
                             </div>
                            )
                          : 
                            (
                             <button className="underline text-white" onClick={() => setIsVisible(true)}>Show
                             </button>
                            )
            }
        </div>
    );
};


const InstaMart = () => {

  const[visibleSection, setVisibleSection] = useState("true");

  return (
    <div className="mt-24 px-44 h-[68vh] text-white flex flex-col justify-center  bg-[#232946]">
      <h1 className="text-3xl p-2 font-bold">Instamart</h1>

      <Section
        title={"About Instamart"}
        description={
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
        } 

        isVisible = {visibleSection === "about"}
        setIsVisible={() => setVisibleSection(visibleSection === "about" ? "" : "about")}

      />

      <Section
        title={"Team Instamart"}
        description={
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
        }

        isVisible = {visibleSection === "team"}
        setIsVisible={() => setVisibleSection(visibleSection === "team" ? "" : "team")}

      />

      <Section
        title={"Careers Instamart"}
        description={
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
        }

        isVisible = {visibleSection === "carreer"}
        setIsVisible={() => setVisibleSection(visibleSection === "carreer" ? "" : "carreer")}
      />

    </div>
  );
};

export default InstaMart;
