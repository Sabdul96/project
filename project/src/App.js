import React from "react";
import "./App.css";
import Blog from "./Blog";
// import Register from "./Register";

const App = () => {
  return (
    <main>
      <header>
      <a href="Photos.html" className="Logo"> <h1> WELCOME: Travel Oasis</h1> </a>
      <nav> 
        <a href=""> Join Oasis</a>
      </nav>
      </header>

      <div class="card"> 
      <img src="/assets/beach3.jpeg" />
      <div class="container">
      <h4> 
        MALAWI DESTINATION BEACH 1
      </h4>

      <p>
The beaches in Malawi are known for their white sand, clear waters, and lush vegetation. They are also home to a variety of wildlife, including dolphins, hippos, and crocodiles.

In addition to the natural beauty, Malawi also offers a variety of activities for tourists to enjoy, including swimming, sunbathing, boating, fishing, and scuba diving. There are also a number of cultural attractions in Malawi, such as the ancient ruins of the Great Zimbabwe.
Malawi is a landlocked country in southeastern Africa, but it has a number of beautiful beaches along Lake Malawi. These beaches are a popular destination for tourists from all over the world, and for good reason. </p> 


      </div>
      </div>

<br></br>
      <div class="card"> 
      <div class="container">
        <img src="/assets/beach3.jpeg"/>
      <h4> 
        MALAWI DESTINATION BEACH 1
      </h4>

      <p>
The beaches in Malawi are known for their white sand, clear waters, and lush vegetation. They are also home to a variety of wildlife, including dolphins, hippos, and crocodiles.

In addition to the natural beauty, Malawi also offers a variety of activities for tourists to enjoy, including swimming, sunbathing, boating, fishing, and scuba diving. There are also a number of cultural attractions in Malawi, such as the ancient ruins of the Great Zimbabwe.
Malawi is a landlocked country in southeastern Africa, but it has a number of beautiful beaches along Lake Malawi. These beaches are a popular destination for tourists from all over the world, and for good reason. </p> 


      </div>
      </div>

      <br></br>
      <div class="card">
        <div class="container">
  <Blog/>
  </div>
  </div>
    </main>

    
  );
};

export default App;
