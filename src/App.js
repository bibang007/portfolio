import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
// import Footer from './Footer.js';

function App() {
  return (
    <Router >
        <div className="container">
            <div className = "name">
            <h1 id="title">
                Alane Bibang
            </h1>
        </div>
    
        <div className = "nav">
            <nav>
             <ul>

             <li><a href="https://docdro.id/tkVZUhV">Résumé</a></li>

             <li><a href="https://www.linkedin.com/in/alane-ndong-37024a180/">LinkedIn</a></li>

             <li><a href="https://github.com/bibang007">Github</a></li>

             <li><a href="https://www.instagram.com//odzp7/">Instagram</a></li>

                
            </ul>
            </nav>
        </div>

        <div className = "experience">
        <h2>
        <p className = "font">
            Web Developer and Technical Solutions Engineer who leverages my background in project management to solve complex problems that consumers and businesses face. I am a problem solver with an innate ability to break down complex technical challenges into comprehensible blocks of manageable tasks, accompanied with straight forward and transparent communications relaying intuitive solutions. I am an analytical and collaborative team-player who excels in meeting and surpassing expectations, and will make an immediate and significant impact to any development or solutions based technical role.
        </p>
        </h2>
        </div>
       <div className = "content">
        <div className = "pizza">
        
   
            <p>
            <a href="http://judicious-bridge.surge.sh/">
            <img src="https://i.imgur.com/nlCTe3m.jpg" title="source: imgur.com" height={ 500 } width={ 700 } /></a>

            <br />
            <br/>
        
            An opportunity to combine my two loves, tech and sports! The NBA Player Application is full stack, CRUD, and bcrypt authentication. Ruby on Rails hard coded api database deployed on heroku. Front end build in React.js is deployed on surge. All scripting and styling vanilla, by way of ES6, JavaScript, Ruby, and CSS. Swish!
        </p>
        <br/>
        </div>
       
        <div className = "ensemble">
          
            <a href="http://ensemble-ga.surge.sh/">
            <img src="https://i.imgur.com/8hpE0Y6.jpg" title="source: imgur.com" height={ 500 } width={ 700 } /></a>
            <br/>
            <br/>
            I'm Here is an application designed to link professionals, such as painters or movers, with those in need of professional services. This robust hardcoded database was created by use of Node.js and Express. CRUD and auth again obtained. Front end build in React.js, ES6, JavaScript, HTML and CSS. 
        </div>  

        <div className = "jolly">
          
          <a href="http://jolly-marble.surge.sh/">
          <img src="https://i.imgur.com/zM67jBh.jpg" title="source: imgur.com" height={ 500 } width={ 700 } /></a>
          <br/>
          <br/>
          I'm Here is an application designed to link professionals, such as painters or movers, with those in need of professional services. This robust hardcoded database was created by use of Node.js and Express. CRUD and auth again obtained. Front end build in React.js, ES6, JavaScript, HTML and CSS. 
      </div>  
       
        <div className = "below">
        <p>
        <a href="http://draconian-force.surge.sh">
            <img src="https://i.imgur.com/9PKdvEZ.jpg" title="source: imgur.com" height={ 500 } width={ 700 } /></a>
                <br/>
                <br/>
                Harrison Walkers is a lovely dog walking company, While working on their website I tapped in to a 3rd party api of dog photos,by way of axios, to give users a "treat" when ever they visit Harrison Walkers site.React.js framework used along with vanilla JavaScript. As an added bonus, I researched and utilized Bootstrap making this application highly responsive across screens of all sorts.
        </p>
        <br/>
        {/* <Footer /> */}
        </div>
       </div>
    
     </div>
     </Router>
  );
}
export default App;
