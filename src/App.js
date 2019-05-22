import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router >
        <div className="container">
            <div className = "name">
            <h1 id="title">
                Alane Bibang
            </h1>
        </div>

            <br />
            <br/>

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
        <br />
        <div className = "experience">
        <h2>
        <p className = "font">
        I am a resourceful, results-oriented Front-End Developer who loves to see projects through from start to finish. As a former professional translator who holds over three years experience, I love breaking down complex language or code into user-friendly tools and resources that help create mutually beneficial incentives for both companies and its users.
        </p>
        </h2>

        <br />
        
        </div>
       <div className = "content">
        <div className = "pizza">
        
   
            <p>
            <a href="http://judicious-bridge.surge.sh/">
            <img src="https://i.imgur.com/nlCTe3m.jpg" title="source: imgur.com" height={ 500 } width={ 700 } /></a>

            <br />
            <br/>
        
      <span className = 'rouge'>PIZZA BARN</span> was a collaboration with UX designers where I leant to use some of their tools such as Zeplin and 
        how to build a website through a client's vision and direction. I strongly suggest you go and try their superslice pizza.
        The app is fully responsive and was built using React.js.
           
        </p>
        <br/>
        </div>
       
        <div className = "ensemble">
          
            <a href="http://ensemble-ga.surge.sh/">
            <img src="https://i.imgur.com/8hpE0Y6.jpg" title="source: imgur.com" height={ 500 } width={ 700 } /></a>
            <br/>
            <br/>

            <span className = 'rouge'>ENSEMBLE</span> is a social network where users can find or offer services, or discuss about different topics. It was made to connect students,
           alumnis and teachers in a school. It was built using SQL, React, JavaScript and Express. The back end is deployed on Heroku and the front end on surge
           and the app uses AUTH.
           <br/>
           <br/>

        </div>  

        <div className = "jolly">
          
          <a href="http://jolly-marble.surge.sh/">
          <img src="https://i.imgur.com/zM67jBh.jpg" title="source: imgur.com" height={ 500 } width={ 700 } /></a>
          <br/>
          <br/>
          <span className = 'rouge'>JOLLY</span> is an app that is very dear to me. It is one of my first app and I will keep working on it and eventually deploy it to the
          apple and/or google store or find partnership with schools. Jolly was built for my son and he uses it to learn new words and associate these words with 
          objects that he interacts with on a daily basis. It helps that the app was made using his mother's voice.
      </div>  

           <br/>
           <br/>
       
        <div className = "below">
        <p>
        <a href="http://draconian-force.surge.sh">
            <img src="https://i.imgur.com/9PKdvEZ.jpg" title="source: imgur.com" height={ 500 } width={ 700 } /></a>
                <br/>
                <br/>
                <span className = 'rouge'>BELOW</span> is an e-commerce website where buyers can sell items at a very low price and sellers can sell their products very fast as long as they re willing
                to really decrease their prices to sell super fast. Prices are set so users already know what to expect when they come to this app and how much they can make. The design is inspired by the minimalist art and every element on the page is clickable in order to keep the page clean. I built this app using Ruby on Rails for the back end, and React for the front end.
                The app uses AUTH for users authentication.
        </p>
        <br/>
        </div>
       </div>
    
     </div>
     </Router>
  );
}
export default App;
