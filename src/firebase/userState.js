import React, { createContext, useState } from "react";

export const userContext = createContext();

const UserState = (props) => {
    const [user, setUser] = useState({});
    return (
        <userContext.Provider value={{ user, setUser }}>
            {props.children}
        </userContext.Provider>
    )
}

export default UserState;