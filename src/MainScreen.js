import React from 'react';
import './App.css';
import Navbar1 from './NavBar1';
import Carousel from './Carousel';
import Card from './Card';
import Portal from './Portal';
import Footer from './Footer';


function MainScreen() {
  return (
    <div className="App">
      <Navbar1 />
      <Carousel />
      
      <div 
      id="card-section"
      className="container text-center my-5"
      style={{minHeight: 'calc(70vh - 462px)'}}>

        <div class="container">
          <div class="row">
            <div class="col-3">
              <Card 
                imageUrl="./click.png" 
                title="User Friendly"
                description="Our interface makes team management a breeze with accurate and secure employee information that’s just a click away." 
              />
            </div>

            <div class="col-3">
              <Card 
                imageUrl="./okay.jpeg" 
                title="Time-Efficient"
                description="Productivity is the main goal of BDE, we like our clients to complete their task in the most easiest way as possible. "
              />
            </div>

            <div class="col-3">
              <Card 
                imageUrl="./thumb.jpeg" 
                title="Secure" 
                description="We take employee data security seriously. Be confident that sensitive employee data is stored 100% securely."
              />
            </div>
            <div class="col-3">
              <Card 
                imageUrl="speed.jpeg" 
                title="Fast Loading" 
                description="No matter how much data is stored we will make sure our clients will feel that blitz of our fast-data processing power."
              />
            </div>
          </div>
        </div>
      </div>

    <hr />
      <Portal />
      <Footer />
    </div>
  );
}

export default MainScreen;