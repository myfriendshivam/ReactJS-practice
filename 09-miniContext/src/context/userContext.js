import React from "react";

const UserContext = React.createContext()

export default UserContext;

// all context is a provider and create component who directly access all state using UserContext
{/* <UserContext>
    <Login/>
    <Card>
        <Data/>
    </Card>
</UserContext> */}