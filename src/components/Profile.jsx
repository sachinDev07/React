import { useEffect } from "react";

const Profile = (props) => {

    useEffect(() => {
        const timer = setInterval(() => {
            console.log("I love React");
        },1000);

        // cleanup function -- called 
        return() => {
            clearInterval(timer);
        }

    },[])
    
    return (
        <div>
            <h2>Profile Page</h2>
            <h3>Myself {props.name} </h3>
        </div>
    );
};

export default Profile;