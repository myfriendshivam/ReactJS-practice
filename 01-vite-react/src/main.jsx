import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return(
        <div>
            <h1>Custom App | Chai</h1>
        </div>
    )
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// } 

const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit google</a>
)

const anotheruser = "Shivam Kant"

const reactElement = React.createElement(
    'a',
    {href: "https://google.com", target: '_blank'},
    'click me to visit google',
    anotheruser
)
 
createRoot(document.getElementById('root')).render(
    // <App />
    // <MyApp/>
    // ReactElement -> this is not render because your syntax is not correct, the react is written by render function has some expectations which is not fullfill by your reactelement
    
    // anotherElement
    reactElement
)
