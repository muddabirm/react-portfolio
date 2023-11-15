//import { useState } from 'react'
import './App.css'

function App() {
 // const [count, setCount] = useState(0)

  return (
    <>
    <body>
    <nav id="navbar">
        <h1>Muddabir Masood</h1>
        <ul className="navlinks">
            <li><a href="#aboutmetxt">About Me</a></li>
            <li><a href="#myWorks">My Work</a></li>
            <li><a href="#contactme">Contact Me</a></li>
        </ul>
    </nav>
    <div id="mainimg">
      <img src="./images/placeholder.png" alt="placeholder image for profile" id="image"/>
    </div>
    <div id="aboutmetxt">
        <p>I am a fullstack web developer with a passion for web development and solving problems. In my free time i love to play video games and spend time with my cat Peaches. Below is some of my personal projects.</p>
    </div>
    <section id="myWorks" className="projects">
        <div id="card">
            <h3>note taker project</h3>
            <p>click to see deployed heroku app:</p>
            <p><a href="https://note-taker-app-2-744e7da4c97f.herokuapp.com/"><img src="./images/Screenshot 2023-11-14 212011.png" alt="github link"/></a></p>
        </div>
            <h3>social media api project</h3>
            <p>this social media api is a backend for a test social media site click the image to proceed to the github page</p>
            <p><a href="https://github.com/muddabirm/no-sql-social-media-api"><img src="./images/Screenshot 2023-11-14 205813.png" alt="github link"/></a></p>
        <div/>

    </section>
    <div id="contactme">contact me at: muddabirm@gmail.com</div>
    </body>
    </>
  )
}

export default App
