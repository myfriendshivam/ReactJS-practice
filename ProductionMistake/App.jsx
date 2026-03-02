import React, { useState } from 'react'

function App() {
    // const [isLoggedIn, setIsLoggedIn] = useState(false); // -> work
    // const [isLoggedIn, setIsLoggedIn] = useState(null); // -> work
    // const [isLoggedIn, setIsLoggedIn] = useState(undefined); // -> work
    const [isLoggedIn, setIsLoggedIn] = useState(0); // -> not work -> initially define the value then due to shotcircuit in && operator it will print first time 0 then work fine. 

    // const [isLoggedIn, setIsLoggedIn] = useState(""); // -> work

    // const [isLoggedIn, setIsLoggedIn] = useState(); // -> work

    // const [isLoggedIn, setIsLoggedIn] = useState([]); // -> not work
    // const [isLoggedIn, setIsLoggedIn] = useState(NaN); // -> not work same as zero like



    return (
        <div style={{ padding: "2rem" }}>
            <h1>Welcome to Chai with React</h1>
            <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Toggle Login</button>
            <div>
                <h3>&& operator</h3>
                {isLoggedIn && <p>Welcome to ReactJs playlist</p>}

                {/* {!!isLoggedIn && <p>Welcome to ReactJs playlist</p>}  -> solving useState(0) with this !! ->  one ! means isLoggedIn is true or false but second time ! means its sense of true or false come back into it.(convert it 100% true or false) */}

                {/* {isLoggedIn.length > 0 && <p>Welcome to ReactJs playlist</p>} -> for empty array */}\
            </div>
            <div>
                <h3>Trenary operator</h3>
                {isLoggedIn ? <p>Welcome to ReactJs playlist</p> : "Please Login"}
            </div>

        </div>
    )
}

export default App