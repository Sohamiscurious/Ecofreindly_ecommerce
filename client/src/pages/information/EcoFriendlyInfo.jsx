import React from 'react';
import './EcoFriendlyInfo.css'; // Import your CSS file
import Marquee from "react-fast-marquee";

function EcoFriendlyInfo() {
  return (
    <div className="parent-container">
      {/* Container 1 */}
      <div className="container">
        <div className="head">
          <h2>Explore more about Eco-friendly products</h2>
          <p>Eco-friendliness, also known as environmental friendliness, refers to actions, products, and lifestyles that are environmentally responsible and minimize harm to the natural world.</p>
        </div>
        <marquee className="blink" direction="up" >
        <ul id="info-list">
                    <li class="info-item">
                        <span class="info-title">Reducing Waste</span>
                        <p>Eco-friendly practices involve reducing, reusing, and recycling materials to minimize waste generation.</p>
                        <div class="leaf"></div> 
                    </li>
                    <li class="info-item">
                        <span class="info-title">Energy Efficiency</span>
                        <p>Using energy-efficient appliances, vehicles, and technologies helps reduce greenhouse gas emissions and dependence on fossil fuels.</p>
                        <div class="leaf"></div> 
                    </li>
                    <li class="info-item">
                        <span class="info-title">Renewable Energy</span>
                        <p>Transitioning to renewable energy sources like solar, wind, and hydroelectric power reduces reliance on non-renewable fossil fuels.</p>
                        <div class="leaf"></div> 
                    </li>
                    <li class="info-item">
                        <span class="info-title">Green Transportation</span>
                        <p>Encouraging the use of public transportation, carpooling, biking, and walking reduces emissions and congestion.</p>
                        <div class="leaf"></div>
                    </li>
                    <li class="info-item">
                        <span class="info-title">Conservation</span>
                        <p>Conserving natural resources such as water, forests, and biodiversity is a fundamental aspect of eco-friendliness.</p>
                        <div class="leaf"></div> 
                    </li>
                </ul>
     
        </marquee>
      </div>
    </div>
  );
}

export default EcoFriendlyInfo;
