import "./main.css"
import planetone from "./planet-one.png"
import React from 'react';
import {useState} from 'react';
import $ from 'jquery'




const Main = ()=>{
  
   // using jupiter as reference for planet size/ using our sun as reference for star size and temp
   
    // Use states
      const [message, setMessage] = useState("Name");

      const [Mass, setMass] = useState('Mass:');
      const [Radius, setRadius] = useState('Radius:');
      const [Temp, setTemp] = useState('Planet Temperature:');
      const [years, setYears] = useState('Light Years Away:');
      const [star, setStar] = useState('Host Star Size:');
      const [startemp, setStarTemp] = useState('Host Star Temperature:');


//



      const handleChange = event => {
       
        setMessage(event.target.value)
        setMass("...")
        setRadius("...")
        setTemp("...")
        setYears("...")
        setStar("...")
        setStarTemp("...")        
      };

      const handleClick = event => {
        event.preventDefault();
        

        var name = message
        $.ajax({
            method: 'GET',
            url: 'https://api.api-ninjas.com/v1/planets?name=' + name,
            headers: { 'X-Api-Key': 'LUzifa1Hcd3nt987OZgdkA==8nL9HBP8W1PZUT84'},
            contentType: 'application/json',
            success: function(result) {
                
                console.log(result);

                
        // 👇️ set value of input field
        setMass("Mass: " +result[0].mass)
        setRadius("Radius: "+result[0].radius)
        setTemp("Planet Temperature: "+result[0].temperature) 
        setYears("Light Years Away: "+result[0].distance_light_year)
        setStar("Star Size: "+result[0].host_star_mass)
        setStarTemp("Star Temperature: "+result[0].host_star_temperature)
        setMessage(result[0].name)


            },
            
            error: function ajaxError(jqXHR) {
                
              
                console.error('Error: ', jqXHR.responseText);
            }

            
        });

     
      }

    return(
    
    <div className="main">
      
        <div className="planet-name">
       
        <div className="search-bar">
        <h1 className="Name">{message}</h1>

        <form className="example "  action="action_page.php" onSubmit={handleClick} >
        <input type="text" placeholder="Search.." name="search" id="input-text" onChange={handleChange} />
        <div className="buttons">
        <button type="submit"  id="btn-search"><i className="fa-solid fa-satellite-dish"></i> </button>
        <button type="button"><i className="fa-solid fa-key tooltip"> 
        
        <span className="tooltiptext"> <p> Mass: mass of the planet in Jupiters</p>  <p> Radius: Average radius of the planet in Jupiters</p> <p> Temperature: Average surface temperature of the planet or sun in Kelvin</p> <p> Light Years Away: distance of planet from Earth in light years</p> <p> Star Size: Size of host star in comparison to earths star </p>
        
        </span></i></button>
        </div>
        

        </form>
        </div>

        </div>

        <div className="hero">
            <div className="info-one">
                <h3 className={`${Mass === "..."? "dot-pulse":"planet-mass"}`}>{Mass}</h3>
                <h3 className={`${Radius === "..."? "dot-pulse":"planet-radius"}`}>{Radius}</h3>
                <h3 className={`${Temp === "..."? "dot-pulse":"planet-temp"}`}>{Temp}</h3>
            </div>
            
            <div className="planet-image">
            <img src={planetone} alt="" className={`${Mass ==="..." ? "planet-image-effect":""}`} />
            </div>

            <div className="info-two">
            <h3 className={`${years === "..."? "dot-pulse":"years-away"}`} >{years}</h3>
            <h3 className={`${star === "..."? "dot-pulse":"host-star"}`}>{star}</h3>
            <h3 className={`${startemp === "..."? "dot-pulse":"host-star-temp"}`}>{startemp}</h3>

            </div>
        </div>
    </div>
    
)
}


export default Main