import { useState } from "react";

const Section = ({title, description, isVisible, setIsVisible}) => {

    return (
        <div className="border border-black p-2 m-2">
            <h3 className="font-bold text-xl">{title}</h3>
            {
                isVisible ? (
                             <div>
                                <button className="underline" onClick={() => setIsVisible(false)}>Hide</button>
                                <p>{description}</p>
                             </div>
                            )
                          : (<button className="underline" onClick={() => setIsVisible(true)}>Show</button>)
            }
        </div>
    );
};


const InstaMart = () => {

  const[visibleSection, setVisibleSection] = useState("true");

  return (
    <div className="py-2 px-44">
      <h1 className="text-3xl p-2 mt-28 font-bold">Instamart</h1>

      <Section
        title={"About Instamart"}
        description={
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
        } 

        isVisible = {visibleSection === "about"}
        setIsVisible = {() => setVisibleSection("about")}

      />

      <Section
        title={"Team Instamart"}
        description={
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
        }

        isVisible = {visibleSection === "team"}
        setIsVisible = { () => setVisibleSection("team")}

      />

      <Section
        title={"Careers Instamart"}
        description={
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
        }

        isVisible = {visibleSection === "carreer"}
        setIsVisible = { () => setVisibleSection("carreer")}

      />

    </div>
  );
};

export default InstaMart;
