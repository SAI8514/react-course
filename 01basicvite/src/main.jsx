import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'



function myApp(){
    return(
      <div>
        <h1>Custom React App</h1>
      </div>
    )
  }

const reactElement = React.createElement(
    'a',
    {href: "https://google.com", target:"_blank"},
    'Click to visit Google'
)

  const AnotherElement = (
    <a href="http://google.com" target='_blank'> Visit Google</a>
  )
ReactDOM.createRoot(document.getElementById('root')).render(

   reactElement
)
