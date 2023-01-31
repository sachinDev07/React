import { createContext } from "react";

const UserContext = createContext({
    user : {
        name : "Sachin",
        course : "React",
    }
});


UserContext.displayName = "UserContext";

export default UserContext;